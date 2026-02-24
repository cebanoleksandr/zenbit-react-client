import type { FC, ReactNode } from "react";
import Header from "./Header";
import authImg from "../../assets/images/auth.png";

interface IProps {
  children: ReactNode;
}

const AuthLayout: FC<IProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header isAuthenticated={false} />

      <main className="pt-20 flex h-screen">
        <div
          className="hidden lg:block flex-1 bg-cover bg-center"
          style={{
            backgroundImage: `url(${authImg})`,
          }}
        />

        <div className="w-full lg:w-137.5 bg-white flex items-center justify-center">
          <div className="px-25">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AuthLayout;
