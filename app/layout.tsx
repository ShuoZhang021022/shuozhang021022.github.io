import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto")?.split(",")[0]?.trim() ??
    (host.startsWith("localhost") || host.startsWith("127.0.0.1")
      ? "http"
      : "https");
  const origin = `${protocol}://${host}`;
  const socialImage = new URL("/og.png", origin).toString();

  return {
    metadataBase: new URL(origin),
    title: {
      default: "Shuo Zhang | Personal Homepage",
      template: "%s | Shuo Zhang",
    },
    description:
      "Second-year Ph.D. student in Statistics at the University of Chicago researching large language models and statistics.",
    keywords: [
      "personal homepage",
      "large language models",
      "LLM post-training",
      "reinforcement learning",
      "human-computer interaction",
    ],
    authors: [{ name: "Shuo Zhang" }],
    openGraph: {
      type: "profile",
      locale: "en_US",
      title: "Shuo Zhang | Personal Homepage",
      description:
        "Second-year Ph.D. student in Statistics at the University of Chicago researching large language models and statistics.",
      siteName: "Shuo Zhang — Personal Homepage",
      images: [
        {
          url: socialImage,
          width: 1536,
          height: 1024,
          alt: "Shuo Zhang — Personal Homepage",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Shuo Zhang | Personal Homepage",
      description:
        "Second-year Ph.D. student in Statistics at the University of Chicago researching large language models and statistics.",
      images: [socialImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
