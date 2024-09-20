import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <p>Hi, I’m [Your Name], a Junior Network Administrator.</p>
      <a href="/about">About Me</a>
      <a href="/portfolio">Portfolio</a>
      <a href="/contact">Contact</a>
    </div>
  );
}
