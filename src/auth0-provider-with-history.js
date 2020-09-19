import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  //the domain and the clientId should be added in env files but I have added them in the files directly for testing purposes
  const domain = "dev-635toj-8.us.auth0.com";
  const clientId ="yO9c56xPIVL8Bd8m2jRjBYuNWkejc7sl";

  const history = useHistory();

  const onRedirectCallback = (appState) => {
    
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri="http://localhost:3000/genre"
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
