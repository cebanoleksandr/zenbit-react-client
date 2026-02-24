import type { FC, ReactNode } from "react";
import Header from "./Header";

interface IProps {
  children: ReactNode;
}

const MainLayout: FC<IProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header isAuthenticated={true} />

      <main className="pt-20">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;