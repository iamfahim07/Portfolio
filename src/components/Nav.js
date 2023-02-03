import { useState } from "react";
import classes from "../styles/Nav.module.css";

export default function Nav() {
  const [show, setShow] = useState(false);
  const [svg, setSvg] = useState(false);

  const handleClick = () => {
    setShow((prev) => !prev);
    setSvg((prev) => !prev);
  };

  const handleSvg = () => {
    setShow(false);
    setSvg(false);
  };

  return (
    <nav className={classes.container}>
      <div className={classes.imageContainer} onClick={handleSvg}>
        <a href="#home">
          <svg
            className={classes.svg}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
          >
            <path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path>
          </svg>
        </a>
      </div>

      <div className={classes.bars}>
        <div className={classes.barContainer} onClick={handleClick}>
          {!svg ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
            </svg>
          )}
        </div>
      </div>

      <div className={`${classes.textContainer} ${show ? classes.show : ""}`}>
        <a href="#home">
          {" "}
          <p className={classes.text} onClick={handleSvg}>
            Home
          </p>
        </a>
        <a href="#about">
          {" "}
          <p className={classes.text} onClick={handleSvg}>
            About
          </p>
        </a>
        <a href="#skills">
          {" "}
          <p className={classes.text} onClick={handleSvg}>
            Skills
          </p>
        </a>
        <a href="#projects">
          <p className={classes.text} onClick={handleSvg}>
            Projects
          </p>
        </a>
        <a href="#contact">
          <p className={classes.text} onClick={handleSvg}>
            Contact
          </p>
        </a>
      </div>
    </nav>
  );
}
