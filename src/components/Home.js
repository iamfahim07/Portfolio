import classes from "../styles/Home.module.css";
import Button from "./Button";

export default function Home() {
  return (
    <section className={classes.main}>
      <div className={classes.container}>
        <div className={classes.first}>
          <h6>Hi! there, I'm Faijur Rahman Fahim</h6>
        </div>
        <div className={classes.second}>
          <h1>Front-End Web Developer</h1>
        </div>
        <div className={classes.third}>
          <p>
            I have thorough understanding of front-end web development and take
            pleasure in merging logical thinking and artistic design to craft
            websites that are both pleasing to the eye and easy to use, while
            ensuring accessibility for all users.
          </p>
        </div>
        <div className={classes.buttonContainer}>
          <Button>More Aboute Me</Button>
          <svg
            className={classes.svg}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
