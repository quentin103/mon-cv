"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useTranslations } from "@/lib/i18n/context";

export default function GithubContributions() {
    const t = useTranslations();

    return (
        <div className="mt-12">
            <h2 className="text-xl font-bold mb-4">
                {t.common.githubContributions}
            </h2>
            <GitHubCalendar
                username="quentin103"
                blockSize={15}
                blockMargin={5}
                fontSize={14}
                year={new Date().getFullYear()}
            />
        </div>
    );
}