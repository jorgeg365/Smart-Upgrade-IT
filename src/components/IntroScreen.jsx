import { useState } from "react";
import "../assets/styles/intro.css";
import secureBg from "../assets/images/secure-bg.jpeg";

const VIRUS_IMG =
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1920&q=90";

const SECURE_IMG = secureBg;

export default function IntroScreen({ onDone }) {
  const [stage, setStage] = useState("virus");

  const handleExterminate = () => {
    if (stage !== "virus") return;
    setStage("exterminating");
    setTimeout(() => setStage("secure"), 1700);
    setTimeout(() => setStage("exit"), 3300);
    setTimeout(() => onDone(), 4100);
  };

  const isVirus = stage === "virus" || stage === "exterminating";
  const isSecure = stage === "secure" || stage === "exit";

  return (
    <div className={`intro-screen intro-${stage}`}>
      {isVirus && (
        <>
          <div className="intro-bg" style={{ backgroundImage: `url('${VIRUS_IMG}')` }} />
          <div className="intro-overlay virus-overlay" />
          <div className="intro-content">
            <p className="intro-tag">⚠ Threat Detected</p>
            <h2 className="intro-headline">Malicious Activity Found</h2>
            <p className="intro-sub">Your system is under attack.</p>
            {stage === "virus" && (
              <button className="exterminate-btn" type="button" onClick={handleExterminate}>
                ▶ Press to Exterminate
              </button>
            )}
            {stage === "exterminating" && (
              <p className="exterminating-msg">Exterminating...</p>
            )}
          </div>
          {stage === "exterminating" && <div className="scan-line" />}
        </>
      )}

      {isSecure && (
        <>
          <div className="intro-bg" style={{ backgroundImage: `url('${SECURE_IMG}')` }} />
          <div className="intro-overlay secure-overlay" />
          <div className="intro-content">
            <p className="intro-tag secure-tag">✓ System Secured</p>
            <h2 className="intro-headline secure-headline">Threat Eliminated</h2>
            <p className="intro-sub">Smart Upgrade IT has your back.</p>
          </div>
        </>
      )}
    </div>
  );
}
