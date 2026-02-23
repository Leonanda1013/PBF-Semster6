import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Navbar from "@/components/layouts/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>

        <h1>Praktium Next.js Pages Router</h1>
        <p>Mahasiswa D4 Pengembangan Web</p>
        <p>Vincentius Leonanda Prabowo</p>
      </div>
      <div style={{ padding: "20px" }}>
        <h1>Halaman Utama</h1>

        <Link href="/about">Ke Halaman About</Link>
      </div>
    </>
  );
}
