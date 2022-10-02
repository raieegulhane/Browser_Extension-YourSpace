import "./onboarding-msg.css";

export const OnboardingMsg = ({ img, onClick }) => {
    return(
        <div className="ob-msg-wr fx-c fx-al-c">
            <img 
                className="ob-msg-logo"
                src={img}
                alt="yourspace-logo"
            />
            <p className="ob-msg-heading">
                Welcome to YourSpace
            </p>
            <p className="ob-msg-txt">
                This is your dedicated space find focus, calm and inspiration, so that you are in your best mind space to create what you love.
                YourSpace provides you simple tools to rule out distractions to help consistently achieve your goals!!
            </p>
            <button 
                className="btn btn-outline btn-cr btn-wt-i"
                onClick={onClick}
            >
                Continue
                <i className="fa-solid fa-angles-right"></i>
            </button>
        </div>
    );
}