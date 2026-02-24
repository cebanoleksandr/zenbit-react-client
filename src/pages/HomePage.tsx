import { useLayoutEffect, useState } from "react";
import homeImage from "../assets/images/home.jpg";
import Button from "../components/UI/Button";
import HomeLayout from "../components/layouts/HomeLayout";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const token = localStorage.getItem("zenbit-token");
    setIsAuthenticated(!!token);
  }, []);

  const onGetStarted = () => {
    if (isAuthenticated) {
      navigate("/deals");
    } else {
      navigate("/login");
    }
  };

  return (
    <HomeLayout isAuthenticated={isAuthenticated}>
      <div
        className="w-full h-[calc(100vh-80px)] bg-center bg-cover bg-no-repeat text-white flex items-center justify-center flex-col"
        style={{ backgroundImage: `url(${homeImage})` }}
      >
        <h1 className="text-6xl font-bold mb-2.5">The chemical  negatively charged</h1>
        <p className="max-w-150 text-center text-2xl mb-7.5">
          Numerous calculations predict, and experiments confirm, that the force field reflects the beam, 
          while the mass defect is not formed. The chemical compound is negatively charged. 
          While the mass defect is not formed.
        </p>
        <Button mode="prosparity" onClick={onGetStarted}>Get Started</Button>
      </div>
    </HomeLayout>
  );
};

export default HomePage;
