import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Appshell from "@/components/layouts/Appshell";
import Navbar from "@/components/layouts/navbar";
import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/components/navigation";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }: AppProps) {
  const [isLogin, setIsLogin] = useState(true);
  const { push } = useRouter();
  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, []);

  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Appshell>
          <Component {...pageProps} />
        </Appshell>
      </SessionProvider>
    </>
  );
}
