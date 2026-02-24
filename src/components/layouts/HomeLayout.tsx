import type { FC, ReactNode } from "react";
import Header from "./Header";

interface IProps {
  children: ReactNode;
  isAuthenticated: boolean;
}

const HomeLayout: FC<IProps> = ({ children, isAuthenticated }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header isAuthenticated={isAuthenticated} />

      <main className="pt-20">
        {children}
      </main>
    </div>
  );
};

export default HomeLayout;
