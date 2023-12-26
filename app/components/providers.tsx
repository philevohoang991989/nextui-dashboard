"use client";
import { NextUIProvider } from "@nextui-org/react";
import { FC, ReactNode, StrictMode, useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";

interface ProviderProps {
  children: ReactNode;
}
const Provider: FC<ProviderProps> = ({ children }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);
  
    if (!mounted) {
      return null;
    }
  return (
    <StrictMode>
      {" "}
      <NextUIProvider>
        
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          themes={["light", "dark"]}
        //   enableSystem={true}
        >
          {children}
        </ThemeProvider>
      </NextUIProvider>
    </StrictMode>
  );
};
export default Provider;
