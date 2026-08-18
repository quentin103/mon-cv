"use server";

import { Resend } from "resend";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n/config";

const resend = new Resend(process.env.RESEND_API_KEY);

async function verifyTurnstileToken(token: string) {
    // Si la clé secrète n'est pas définie (ex: environnement dev local sans clés), on bypass la vérification 
    // ou alors on peut la forcer. On sécurise ici en retournant 'false' par défaut si configuré.
    const SECRET_KEY = process.env.TURNSTILE_SECRET_KEY;

    if (!SECRET_KEY) {
        console.error("TURNSTILE_SECRET_KEY is missing. Passing validation automatically for dev.");
        return true;
    }

    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `secret=${encodeURIComponent(SECRET_KEY)}&response=${encodeURIComponent(token)}`
    });

    const data = await res.json();
    if (!data.success) {
        console.error("Cloudflare Turnstile Error Response:", data);
    }
    return data.success;
}

/** Messages renvoyés au formulaire de contact, dans la langue du visiteur. */
const actionMessages: Record<Locale, {
    missingFields: string;
    sendFailed: string;
    internalError: string;
    success: string;
    subjectFallback: string;
    subjectPrefix: string;
}> = {
    en: {
        missingFields: "Please fill in the required fields.",
        sendFailed: "Something went wrong while sending the email.",
        internalError: "An internal error occurred.",
        success: "Your message has been sent!",
        subjectFallback: "Portfolio Contact CTA",
        subjectPrefix: "New message",
    },
    fr: {
        missingFields: "Veuillez remplir les champs obligatoires.",
        sendFailed: "Erreur lors de l'envoi de l'e-mail.",
        internalError: "Une erreur interne s'est produite.",
        success: "Votre message a bien été envoyé !",
        subjectFallback: "Contact Portfolio CTA",
        subjectPrefix: "Nouveau Message",
    },
};

export async function sendContactEmail(formData: FormData, locale?: string) {
    const messages = actionMessages[isLocale(locale) ? locale : defaultLocale];
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
        return { success: false, error: messages.missingFields };
    }

    try {
        const { data, error } = await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>", // Changer par votre domaine vérifié sur Resend (ex: no-reply@quentin.dev)
            to: ["koffi.kouamelan.yq@gmail.com"], // Votre adresse e-mail finale
            replyTo: email,
            subject: `${messages.subjectPrefix}: ${subject || messages.subjectFallback}`,
            text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        });

        if (error) {
            console.error("Erreur Resend:", error);
            return { success: false, error: messages.sendFailed };
        }

        return { success: true, message: messages.success };
    } catch (e) {
        console.error("Exception in sendContactEmail", e);
        return { success: false, error: messages.internalError };
    }
}
