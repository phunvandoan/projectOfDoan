import { init } from "ityped";
import { useEffect, useRef } from "react";
import "./intro.scss";

function Intro() {
  const textRef = useRef();

  // useEffect(() => {
  //   return () =>
  //     init(textRef.current, {
  //       showCursor: true,
  //       backDelay: 1500,
  //       backSpeed: 60,
  //       strings: ["Developer", "Designer", "Content Creator"],
  //     });
  // }, []);

  return (
    <div id="intro" className="intro">
      <div className="left">
        <div className="imgContainer">
          <img
            src="https://i.pinimg.com/736x/1e/95/5d/1e955db131fe1df6719a9445b94096d2.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>CodeCuaDoan</h1>
          <h3>
            Freelance_
            <span ref={textRef} style={{ color: "crimson" }}>
              Developer
            </span>
          </h3>
        </div>
        <a href="#portfolio">{/* <img src="assets/down.png" alt="" /> */}</a>
      </div>
    </div>
  );
}

export default Intro;
