import "./onboarding.css";
import { useEffect, useState } from "react";
import { OnboardingMsg, NamePrompt } from "../../components";
import YourSpaceLogo from "../../assets/yourspace-logo.svg";

export const Onboarding = () => {
    const [onboardingStep2, setOnboardingStep2] = useState(false);

    const goToStep2Handler = () => {
        localStorage.setItem("init-step-2", true);
        window.location.reload(true);
    }

    useEffect(() => {
        const initStep2 = localStorage.getItem("init-step-2")
        setOnboardingStep2(initStep2)
    }, [onboardingStep2])

    return(
        <div className="ob-wr fx-c fx-js-c fx-al-c">
            {
                onboardingStep2 ?
                <NamePrompt 
                    img={YourSpaceLogo}
                /> :
                <OnboardingMsg 
                    img={YourSpaceLogo}
                    onClick={goToStep2Handler}
                />
            }
        </div>
    );
}