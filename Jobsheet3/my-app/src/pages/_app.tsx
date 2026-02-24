import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Appshell from "@/components/layouts/Appshell";
import Navbar from "@/components/layouts/navbar";
import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/components/navigation";

export default function App({ Component, pageProps }: AppProps) {
  const [isLogin, setIsLogin] = useState(false);
  const { push } = useRouter();
  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, []);

  return (
    <>
      <Appshell>
        <Component {...pageProps} />
      </Appshell>
    </>
  );
}
