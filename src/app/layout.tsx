import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Dimas Kendika Fazrulfalah | Founder Kalana Labs & Web Developer",
  description: "Portfolio and CV of Dimas Kendika Fazrulfalah, S1 Informatika student at Jenderal Soedirman University & Founder of Kalana Labs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#09090b] text-[#f4f4f5]">{children}</body>
    </html>
  );
}
