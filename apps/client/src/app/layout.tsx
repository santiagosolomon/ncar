import type { Metadata } from "next";
import '@/styles/globals.css';
import Providers from "./providers";

export const metadata: Metadata = {
  title: "NCAR Incident Reports",
  description: "Incident reporting system for logistics/warehouses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
