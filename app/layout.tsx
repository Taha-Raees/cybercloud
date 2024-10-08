import type { Metadata } from "next";
import ClientLoadingLayout from "./appLayout"; 
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
// Metadata
export const metadata: Metadata = {
  title: "CyberCloud - Cloud Gaming Service",
  description: "Stream game anywhere, anytime",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Wrap children with ClientLoadingLayout */}
        <ClientLoadingLayout>
          {children}
        </ClientLoadingLayout>
      </body>
      <GoogleAnalytics gaId="G-W3DNTLG0Y3" />
    </html>
  );
}
