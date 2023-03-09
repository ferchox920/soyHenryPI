import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaServer,
} from "react-icons/fa";
import { SiRedux, SiExpress } from "react-icons/si";

import img from "../../img/earth.png";
import img2 from "../../img/programming.png";
import style from "./About.module.css";

const About = () => {
  return (
    <div data-testid="test" className={style.container}>
      <div className={style.titleContainer}>
        <h3 className={style.title}>About this page</h3>
      </div>

      <div className={style.infoContainer}>
        <div className={style.content}>
          <div className={style.containerImg}>
            <img
              className={`${style.img} ${style.floatRight}`}
              src={img}
              alt="Earth img"
            />
          </div>
          <p>This page is an Individual Project for SoyHenry's bootcamp.</p>
          <p>
            {" "}
            Here you can find information about all countries in the world, such
            as the population, touristic activities you can do there, and a
            simple trivia game about capitals of all countries in the world.
          </p>
          <p>To create this page, I had to follow a readme with those rules:</p>
          <ul>
            <li className={style.list}>
              <p>
                Use the{" "}
                <a
                  className={style.link}
                  href="https://restcountries.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  API Restcountries.
                </a>
              </p>
            </li>
            <li className={style.list}>
              <p>Save the information in a database.</p>
            </li>
            <li className={style.list}>
              <p>Display some information about countries in the home page.</p>
            </li>
            <li className={style.list}>
              <p>
                Add filters such as search by name, order alphabetically, etc.
              </p>
            </li>
            <li className={style.list}>
              <p>
                Create touristic activities you can do in one or more countries
                through a form and store the information in a database
              </p>
            </li>
            <li className={style.list}>
              <p>Show details about each country.</p>
            </li>
            <li className={style.list}>
              <p>Use vanilla CSS.</p>
            </li>
          </ul>
          <div className={style.containerTechs}>
            <h4 className={style.title}>Technologies</h4>
            <div className={style.containerAllIcons}>
              <div className={style.iconContainer}>
                <FaHtml5 size={55} />
                <p>HTML5</p>
              </div>
              <div className={style.iconContainer}>
                <FaCss3Alt size={55} />
                <p>CSS</p>
              </div>
              <div className={style.iconContainer}>
                <FaReact size={55} />
                <p>React</p>
              </div>
              <div className={style.iconContainer}>
                <SiRedux size={55} />
                <p>Redux</p>
              </div>
              <div className={style.iconContainer}>
                <FaNodeJs size={55} />
                <p>NodeJS</p>
              </div>
              <div className={style.iconContainer}>
                <SiExpress size={55} />
                <p>ExpressJS</p>
              </div>
              <div className={style.iconContainer}>
                <FaDatabase size={55} />
                <p>PostgreSQL</p>
              </div>
            </div>
          </div>
          <div className={style.aboutMeContainer}>
            <h4 className={style.title}>About me</h4>
            <div className={style.containerImg}>
              <img
                className={`${style.img} ${style.floatLeft}`}
                src={img2}
                alt=""
              />
            </div>
            <p>Hello World!</p>
            <p>
              I'm Fernando Ramones an apassionate about coding and technologies,
              with one goal: become a FullStack Developer.
            </p>
            <p>To any feedback about this page, feel free to contact me :)</p>
            <p>
              <a
                className={style.link}
                href="https://www.linkedin.com/in/fernando-andres-ramones-ramones/"
                target="_blank"
                rel="noreferrer"
              >
                My Linkedin
              </a>
            </p>
            <p>
              <a
                className={style.link}
                href="https://github.com/ferchox920"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Repositore
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
