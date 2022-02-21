import React from "react";
import SignIn from "../../components/Authentication/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import { AuthenticationContainer } from "./Authenticationn.styles";

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignIn />
      <SignUp />
    </AuthenticationContainer>
  );
};

export default Authentication;
