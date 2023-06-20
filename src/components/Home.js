import classes from "../styles/Home.module.css";
import img from "../assets/Side Images/vector.png";

export default function Home() {
  return (
    <section className={classes.main} id="home">
      <div className={classes.container}>
        <div
          className={classes.first}
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h6>Hi! there, I'm Faijur Rahman Fahim</h6>
        </div>
        <div
          className={classes.second}
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <h1>Front-End Web Developer</h1>
        </div>
        <div
          className={classes.third}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <p>
            I have sufficient understanding of front-end web development and
            take pleasure in merging logical thinking and artistic design to
            craft websites that are both pleasing to the eye and easy to use,
            while ensuring accessibility for all users.
          </p>
        </div>
        <div
          className={classes.buttonContainer}
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <a href="#about">
            <button>
              {" "}
              <span>More Aboute Me</span>
              <svg
                className={classes.svg}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
              </svg>
            </button>
          </a>
        </div>
      </div>

      <div className={classes.vectorContainer}>
        <img src={img} alt="Vector" />
      </div>
    </section>
  );
}
