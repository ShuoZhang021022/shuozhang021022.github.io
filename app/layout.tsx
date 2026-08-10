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
      default: "你的名字｜个人主页",
      template: "%s｜你的名字",
    },
    description: "个人简介、研究兴趣、精选项目与近期动态。",
    keywords: ["个人主页", "作品集", "研究", "项目"],
    authors: [{ name: "你的名字" }],
    openGraph: {
      type: "profile",
      locale: "zh_CN",
      title: "你的名字｜个人主页",
      description: "研究者、开发者与终身学习者。",
      siteName: "你的名字的个人主页",
      images: [
        {
          url: socialImage,
          width: 1536,
          height: 1024,
          alt: "你的名字的个人主页",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "你的名字｜个人主页",
      description: "研究者、开发者与终身学习者。",
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
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
