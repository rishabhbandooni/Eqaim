"use client";
import { Provider } from "react-redux";
import { store } from "../store/store";
import "./globals.css";

// const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
