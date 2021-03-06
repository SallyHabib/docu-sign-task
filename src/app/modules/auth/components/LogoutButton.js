import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "semantic-ui-react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <Button
      content="Logout"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
      icon='logout'
      positive
    >

    </Button>
  );
};

export default LogoutButton;