"use client";

import { GitHubCalendar } from "react-github-calendar";

export default function GithubContributions() {
    return (
        <div className="mt-12">
            <h2 className="text-xl font-bold mb-4">
                Mes contributions GitHub
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