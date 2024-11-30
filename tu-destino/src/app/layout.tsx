"use client"
import "./../styles/globals.css";
import { SelectProvider } from "@/context/SelectContext";
import { RootProvider } from "@/context/RootContext";
import { Provider } from "react-redux";
import { store } from "../redux/store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`w-screen h-screen`}>
        <Provider store={store}>
          <RootProvider>
            <SelectProvider>{children}</SelectProvider>
          </RootProvider>
        </Provider>
      </body>
    </html>
  );
}
