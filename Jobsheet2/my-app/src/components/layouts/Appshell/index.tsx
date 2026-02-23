import Navbar from "@/components/layouts/navbar";

type AppshellProps = {
  children: React.ReactNode;
};

const Appshell = (props: AppshellProps) => {
  const { children } = props;
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default Appshell;
