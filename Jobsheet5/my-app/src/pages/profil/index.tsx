import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Profil = () => {
  const [isLogin, setIsLogin] = useState(false);
  const { push } = useRouter();
  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, []);
  return <div>profil page</div>;
};

export default Profil;
