"use client";
import styles from "./page.module.css";
import Base from "@/components/base/Base";
import { NextUIProvider } from "@nextui-org/react";
export default function Home() {
  return (
    <NextUIProvider>
      <main>
        <Base></Base>
      </main>
    </NextUIProvider>
  );
}
