"use client";

import { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function Providers({ children }: { children: ReactNode }) {
  // keep QueryClient stable across re-renders
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <NextThemesProvider attribute="class" defaultTheme="light" enableSystem>
        {children}
      </NextThemesProvider>
    </QueryClientProvider>
  );
}
