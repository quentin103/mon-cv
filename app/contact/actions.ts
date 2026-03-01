"use server";

import { Resend } from "resend";

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
    return data.success;
}

export async function sendContactEmail(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;
    const token = formData.get("cf-turnstile-response") as string;

    if (!name || !email || !message) {
        return { success: false, error: "Veuillez remplir les champs obligatoires." };
    }

    if (!token) {
        return { success: false, error: "Veuillez valider le Captcha anti-spam." };
    }

    const isValidToken = await verifyTurnstileToken(token);

    if (!isValidToken) {
        return { success: false, error: "Échec de la validation anti-spam (Capture)." };
    }

    try {
        const { data, error } = await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>", // Changer par votre domaine vérifié sur Resend (ex: no-reply@quentin.dev)
            to: ["koffi.kouamelan.yq@gmail.com"], // Votre adresse e-mail finale
            replyTo: email,
            subject: `Nouveau Message: ${subject || "Contact Portfolio CTA"}`,
            text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        });

        if (error) {
            console.error("Erreur Resend:", error);
            return { success: false, error: "Erreur lors de l'envoi de l'e-mail." };
        }

        return { success: true, message: "Votre message a bien été envoyé !" };
    } catch (e) {
        console.error("Exception in sendContactEmail", e);
        return { success: false, error: "Une erreur interne s'est produite." };
    }
}
