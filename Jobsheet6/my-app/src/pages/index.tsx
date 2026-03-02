import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Navbar from "@/components/layouts/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <head>
        <title>Praktimun Next.JS Page Router</title>
      </head>
      {/* Hero Section */}
      <section className="h-screen bg-blue-500 flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome</h1>
        <p className="text-lg">Ini adalah Hero Section</p>
        <button onClick={() => (window.location.href = "/auth/login")} className="mt-6 px-6 py-2 bg-white text-blue-500 rounded-lg shadow-md hover:bg-gray-200">
          Get Started
        </button>
      </section>

      {/* Main Section */}
      <main className="p-10 bg-gray-100">
        <h2 className="text-2xl font-semibold mb-4">Main Content</h2>
        <p className="text-gray-700 leading-relaxed">Ini adalah isi utama dari website kamu. Bisa berisi artikel, fitur, atau informasi lainnya.</p>
      </main>
    </div>
  );
}
