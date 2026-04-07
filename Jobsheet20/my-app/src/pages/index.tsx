import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Praktimun Next.JS Page Router</title>
      </Head>

      <section className="h-screen bg-blue-500 flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome</h1>
        <p className="text-lg">Ini adalah Hero Section</p>

        <Link href="/auth/login">
          <button className="mt-6 px-6 py-2 bg-white text-blue-500 rounded-lg shadow-md hover:bg-gray-200">
            Get Started
          </button>
        </Link>
      </section>
    </div>
  );
}