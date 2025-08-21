import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/pic3.png";


const Home = ({ ratio }) => {
  const clientCount = useRef(null);
  const projectCount = useRef(null);

  const animationClientsCount = () => {
    animate(0, 0, {
      duration: 0.6,
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    });
  };
  const animationProjectsCount = () => {
    animate(0, 10, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Sajid Hossen Khan
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Full Stack Developer", "A Designer"],

              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a target="_blank" href="https://drive.google.com/file/d/1TxmsLoyUWJgpzWMouU5PKUMkxBlTpvWT/view?usp=sharing">Resume</a>
            {/* <a target="_blank" href="https://drive.google.com/file/d/16SCVYo7m2h-5fQn4b0DDlNzfsOCYschN/view?usp=sharing">Resume</a> */}
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>

          {/* <article>
            <p>
              +
              {ratio < 2 && (
                <motion.span
                  whileInView={animationClientsCount}
                  ref={clientCount}
                ></motion.span>
              )}
            </p>
            <span>Clients Worldwide</span>
          </article> */}

          <aside>
            <article>
              <p>
                +
                {/* {ratio < 2 && ( */}
                <motion.span
                  whileInView={animationProjectsCount}
                  ref={projectCount}
                >
                  000
                </motion.span>
                {/* )} */}
              </p>
              <span>Projects Done</span>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>sajid305070@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Image" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
