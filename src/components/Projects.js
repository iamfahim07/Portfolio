import Project from "./Project";
import artGallery from "../assets/Projects/art gallery.png";
import quiz from "../assets/Projects/quiz.png";
import ticTacToe from "../assets/Projects/tic tac toe.png";
import calculator from "../assets/Projects/calculator.png";
import classes from "../styles/Projects.module.css";

export default function Projects() {
  return (
    <div className={classes.main} id="projects">
      <h1 data-aos="fade-right" data-aos-duration="1000">
        Projects
      </h1>
      <div
        className={classes.container}
        data-aos="zoom-in-right"
        data-aos-duration="1000"
      >
        <Project
          img={artGallery}
          alt={"Art Gallery"}
          title={"Art Gallery with Firebase Database"}
          live={"https://project-art-gallery07.netlify.app/"}
          git={"https://github.com/iamfahim07/ReactArtGallery"}
        />

        <Project
          img={quiz}
          alt={"Quiz"}
          title={"Multiple Quiz with Firebase Database"}
          live={"https://project-quiz07.netlify.app/"}
          git={"https://github.com/iamfahim07/React-Quiz"}
        />

        <Project
          img={ticTacToe}
          alt={"Tic Tac Toe"}
          title={"Tic Tac Toe Game"}
          live={"https://project-tic-tac-toe11.netlify.app/"}
          git={"https://github.com/iamfahim07/VanillaJsTic-tac-toe"}
        />

        <Project
          img={calculator}
          alt={"Calculator"}
          title={"Calculator with multiple functionality"}
          live={"https://project-calculator11.netlify.app/"}
          git={"https://github.com/iamfahim07/vanillaJsCalculator"}
        />
      </div>
    </div>
  );
}
