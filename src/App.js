import "./stylesheets/styles.css";
import { useEffect, useState } from "react";
import { Onboarding, Home } from "./pages";

function App() {
  const [onboardedUser, setOnboardedUser] = useState("");
  useEffect(() => {
    const user = localStorage.getItem("username");
    setOnboardedUser(user);
  }, [onboardedUser])

  return (
    <div className="App">
      {
        onboardedUser ? 
        <Home /> :
        <Onboarding />
      }
    </div>
  );
}

export default App;
