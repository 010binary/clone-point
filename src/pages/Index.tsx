import { useState } from "react";
import SignIn from "./onboarding/sign-in/SiginIn";
import SignUp from "./onboarding/sign-up/SignUp";

const Index = () => {
  const [activePage, setActivePage] = useState("log-in");

  return (
    <>
      {activePage === "log-in" ? (
        <SignIn setActivePage={setActivePage} />
      ) : activePage === "sign-up" && (
        <SignUp setActivePage={setActivePage} />
      )}
    </>
  );
};

export default Index;
