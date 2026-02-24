import { useState, type FC } from "react";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";
import LogoutPopup from "../popups/LogoutPopup";

interface IProps {
  isAuthenticated?: boolean;
}

const Header: FC<IProps> = ({ isAuthenticated }) => {
  const [isLogoutPopupOpen, setIsLogoutPopupOpen] = useState(false);

  const navigate = useNavigate();

  const onLogin = () => {
    navigate("/login");
  };

  const onRegister = () => {
    navigate("/register");
  };
  
  const onLogout = () => {
    localStorage.removeItem("zenbit-token");
    setIsLogoutPopupOpen(false);
    navigate("/login");
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#172234] py-4.5 px-5 md:px-10 lg:px-15 xl:px-20 z-10 flex items-center justify-end gap-2.5 h-20">
      {isAuthenticated ? (
        <>
          <Button mode="secondary" onClick={() => setIsLogoutPopupOpen(true)}>Logout</Button>
        </>
      ) : (
        <>
          <Button onClick={onLogin}>Login</Button>
          <Button mode="secondary" onClick={onRegister}>Register</Button>
        </>
      )}

      <LogoutPopup
        isVisible={isLogoutPopupOpen}
        onClose={() => setIsLogoutPopupOpen(false)}
        onLogout={onLogout}
      />
    </header>
  );
};

export default Header;
