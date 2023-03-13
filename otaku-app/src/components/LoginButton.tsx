import { useAuth0 } from "@auth0/auth0-react";
import { useTranslation } from "react-i18next";


const LoginButton = () => {
  const { loginWithPopup, logout, isAuthenticated } = useAuth0();
  const { t, i18n } = useTranslation()

  if (isAuthenticated) {
    return (
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
           className="text-black hover:bg-[#ffc8dd] hover:text-white px-3 py-2 rounded-md font-medium">{t('logout')}</button>
     
    );
  } else {
    return (
        <button onClick={() => loginWithPopup()}
         className="text-black hover:bg-[#ffc8dd] hover:text-white px-3 py-2 rounded-md font-medium">{t('login')}</button>
    )
  }
}

export default LoginButton;