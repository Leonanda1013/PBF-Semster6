import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const EditProfil = () => {
  const [isLogin, setIsLogin] = useState(false);
  const { push } = useRouter();
  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, []);
  return <div>product page</div>;
};

export default EditProfil;
