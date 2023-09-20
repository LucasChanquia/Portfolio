"use client";
import Contact from "./components/ContactEs";
import ContactEn from "./components/ContactEn";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Proyects from "./components/Proyects";

// IMPORT MOTION FUNCTION
import { useRef } from "react";
import { motion, useScroll, useInView } from "framer-motion";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

export default function Home() {
  const [currentSection, setCurrentSection] = useState("home");
  const [language, setLanguage] = useState(false);

  const { scrollYProgress } = useScroll();

  const handleDownload = () => {
    const fileName =
      language !== true ? "CV-LucasChanquía.pdf" : "Resume-LucasChanquia.pdf";
    const fileUrl = `/${fileName}`;

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
    const aboutMeSection = document.getElementById("aboutMe");
    const proyectsSection = document.getElementById("proyects");
    const contactSection = document.getElementById("contact");

    const handleScroll = () => {
      if (homeSection && window.scrollY < aboutMeSection.offsetTop) {
        setCurrentSection("home");
      } else if (aboutMeSection && window.scrollY < proyectsSection.offsetTop) {
        setCurrentSection("aboutMe");
      } else if (proyectsSection && window.scrollY < contactSection.offsetTop) {
        setCurrentSection("proyects");
      } else {
        setCurrentSection("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlerClickSpanish = () => {
    setLanguage(false);
  };

  const handlerClickEnglish = () => {
    setLanguage(true);
  };

  return (
    <main
      id="main"
      className="flex min-h-screen w-screen flex-col items-center"
    >
      <section>
        <div
          id="home"
          className="h-screen w-screen flex flex-col justify-center items-center bg-[#3BC3A4]"
        >
          <motion.div
            className="fixed top-0 left-0 right-0 h-2 z-1 backdrop-blur-md w-full"
            style={{
              scaleX: scrollYProgress,
              background: "#E5384F",
            }}
            id="scroll"
          />

          <nav
            id="nav"
            className="w-full fixed top-0 z-0 mt-2  h-[50px] bg-transparent bg-opacity-10 md:p-10 backdrop-blur-lg"
          >
            <div className="flex justify-center">
              <ul className="flex gap-2 md:gap-10 justify-center items-center ">
                <Link href="#home">
                  <li
                    className={`text-sm md:text-2xl font-semibold  ${
                      currentSection === "home"
                        ? "text-[#E5384F]"
                        : "text-black"
                    }`}
                  >
                    Home
                  </li>
                </Link>
                <Link href="#aboutMe">
                  <li
                    className={`text-sm md:text-2xl font-semibold  ${
                      currentSection === "aboutMe"
                        ? "text-[#E5384F]"
                        : "text-black"
                    }`}
                  >
                    {` ${language !== true ? "Sobre mi" : "About me"}`}
                  </li>
                </Link>
                <Link href="#proyects">
                  <li
                    className={`text-sm md:text-2xl font-semibold  ${
                      currentSection === "proyects"
                        ? "text-[#E5384F]"
                        : "text-black"
                    }`}
                  >
                    {` ${language !== true ? "Proyectos" : "Projects"}`}
                  </li>
                </Link>
                <Link href="#contact">
                  <li
                    className={`text-sm md:text-2xl font-semibold  ${
                      currentSection === "contact"
                        ? "text-[#E5384F]"
                        : "text-black"
                    }`}
                  >
                    {` ${language !== true ? "Contacto" : "Contact"}`}
                  </li>
                </Link>
              </ul>
            </div>
          </nav>

          <div>
            <ul
              id="lang"
              className="relative w-screen left-4 md:left-5 pb-10 text-sm md:text-2xl"
            >
              <li className="flex gap-2 mb-2">
                <button onClick={handlerClickSpanish}>
                  <Image
                    src="/images/es.png"
                    width={30}
                    height={10}
                    alt="ico"
                  />
                </button>
              </li>
              <li className="flex gap-1">
                <button onClick={handlerClickEnglish}>
                  <Image
                    src="/images/uk.png"
                    width={30}
                    height={10}
                    alt="ico"
                  />
                </button>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2 md:gap-12 md:flex-row md:w-screen justify-center">
            <div className="flex gap-10 items-center justify-between">
              <div className="flex flex-col gap-5 items-center text-center justify-items-center">
                <motion.h1
                  className="text-xl font-bold md:text-4xl text-center w-full"
                  animate={{
                    x: 50,
                    color: "#4D3C77",
                  }}
                >
                  {` ${
                    language !== true
                      ? "Hola! Soy Lucas Chanquía"
                      : "HI! I'm Lucas Chanquía"
                  }`}
                </motion.h1>
                <motion.p
                  className="font-mono text-lg md:text-xl text-center mb-5"
                  animate={{
                    x: 50,
                    color: "#000000",
                  }}
                >
                  Full Stack Developer
                </motion.p>
              </div>
            </div>

            <Image
              src="/images/image1.png"
              width={300}
              height={100}
              alt="ico avatar"
              className="w-auto h-auto"
            />
          </div>
        </div>
      </section>

      <section id="aboutMe">
        <Section>
          <div className="bg-[#6E07F3] md:w-screen md:max-h-[800px] lg:max-h-[850px]   grid grid-rows-2">
            <div className="flex flex-col md:flex-row justify-center items-center justify-items-center md:ml-5">
              <div
                id="1"
                className="flex justify-center items-center md:w-[30%]"
              >
                <Image
                  src="/images/sobremi.png"
                  width={300}
                  height={200}
                  alt="ico about me"
                />
              </div>
              <div
                id="2"
                className="text-[#BEB9DD] md:p-5 text-center text-base font-semibold antialiased mt-5 md:my-auto w-[70%] md:mr-10 h-[500px] md:h-auto"
              >
                <p className="h-auto md:text-lg lg:text-2xl">
                  {`${
                    language !== true
                      ? "Soy un programador full stack con experiencia en desarrollo web, lo que me permite crear soluciones completas y funcionales. Me especializo en el front-end, trabajando con tecnologías como HTML, CSS y JavaScript. Por el lado del back-end, utilizo Node.js, PHP y Express. En bases de datos utilizo posgreSQL. También estoy familiarizado con frameworks como React, Vite y NextJs. Estoy constantemente aprendiendo y adaptándome a las últimas tendencias tecnológicas para brindar soluciones de alta calidad."
                      : "I am a full stack programmer with experience in web development, which enables me to create comprehensive and functional solutions. My specialization lies in the front-end, working with technologies such as HTML, CSS, and JavaScript. On the back-end, I utilize Node.js and Express. For databases, I work with PostgreSQL. I am also familiar with frameworks like React, Vite, and Next.js. I am constantly learning and adapting to the latest technological trends to provide high-quality solutions."
                  }`}
                </p>
              </div>
            </div>

            <div className="text-center font-[inter] font-bold h-auto pb-5 md:pb-0 md:h-screen bg-white rounded-t-3xl mx-[5%]">
              <h2 className="font-mono text-lg  md:text-2xl my-5 text-black">{`${
                language !== true ? "Stack tecnológico" : "Technological stack"
              }`}</h2>

              <div className="grid md:grid-cols-4 justify-items-center mt-10 gap-2">
                <div className="md:border-r-2 md:border-gray-200 lg:border-transparent  lg:pr-5">
                  <Image
                    src="/images/frontend.png"
                    width={100}
                    height={100}
                    alt="ico HTML"
                    className="rounded-3x1 mx-auto"
                  />
                  <h2 className="font-sans text-lg my-5 text-[#00A887]">
                    Front End
                  </h2>
                  <p id="stack" className="mb-10 md:mb-0">
                    HTML | CSS | JavaScript | React | NextJs
                  </p>
                </div>

                <div className="md:border-r-2 md:border-gray-200 lg:border-transparent  lg:pr-5">
                  <Image
                    src="/images/UXUI.png"
                    width={100}
                    height={100}
                    alt="ico HTML"
                    className="rounded-3x1 mx-auto"
                  />
                  <h2 className="font-sans text-lg my-5 text-[#00A887] md:mt-10">
                    {`${language !== true ? "Diseño UI/UX" : "Design UI/UX"}`}
                  </h2>
                  <p id="stack" className="mb-10 md:mb-0">
                    Figma | Font Awesome | Bootstrap
                  </p>
                </div>

                <div className="md:border-r-2 md:border-gray-200 lg:border-transparent lg:pr-5">
                  <Image
                    src="/images/backend.png"
                    width={100}
                    height={100}
                    alt="ico Typescript"
                    className="rounded-3x1 mx-auto"
                  />
                  <h2 className="font-sans text-lg my-5 text-[#00A887]">
                    Back End
                  </h2>

                  <p id="stack">Express | NodeJs | Redux | PHP | Typescript</p>
                </div>
                <div className="lg:pr-5">
                  <Image
                    src="/images/database.png"
                    width={100}
                    height={100}
                    alt="ico Typescript"
                    className="rounded-3x1 mx-auto"
                  />
                  <h2 className="font-sans text-lg my-5 text-[#00A887]">
                    {`${language !== true ? "Base de Datos" : "Database"}`}
                  </h2>
                  <p id="stack">PosgreSQL | SQL</p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </section>

      <section id="proyects" className="w-full h-full mt-10">
        <Section>
          <h2 className="text-4xl font-bold text-center lg:mb-[150px] text-black">
            {`${language !== true ? "Trabajos recientes" : "Recent works"}`}
          </h2>

          <Proyects language={language} />
        </Section>
      </section>

      <section
        id="contact"
        className=" flex  md:bg-[#6E07F3] py-5 w-full lg:h-screen mt-5 justify-center items-center"
      >
        <Section>
          <div className="md:h-auto md:w-[90%] lg:w-[50%] flex justify-center items-center mx-auto ">
            {language !== true ? <Contact /> : <ContactEn />}
          </div>
        </Section>
      </section>

      <footer className="bg-[#00A887] w-full h-full px-10 py-5">
        <div className="text-white flex  md:flex-col items-center justify-center gap-5">
          <div className="flex gap-1 items-center md:gap-12">
            <Link href="https://github.com/LucasChanquia/" target="_blank">
              <Image
                src="/images/github.png"
                width={50}
                height={50}
                alt="ico github"
                className="rounded-[50%] hover:scale-110"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/lucas-chanquia/"
              target="_blank"
            >
              <Image
                src="/images/linkedin.png"
                width={50}
                height={50}
                alt="ico linkedin"
                className="rounded-[50%] hover:scale-110"
              />
            </Link>
            <Link href="https://www.t.me/lucasChanquia" target="_blank">
              <Image
                src="/images/telegram.png"
                width={50}
                height={50}
                alt="ico telegram"
                className="rounded-[50%] hover:scale-110"
              />
            </Link>
            <Link href="https://w.app/lucasChanquia" target="_blank">
              <Image
                src="/images/whatsapp.png"
                width={50}
                height={50}
                alt="ico whatsapp"
                className="rounded-[50%] hover:scale-110"
              />
            </Link>
            <Link href="mailto:lucaschanquia@gmail.com" target="_blank">
              <Image
                src="/images/correo.png"
                width={50}
                height={50}
                alt="ico correo"
                className="rounded-[50%] hover:scale-110"
              />
            </Link>
          </div>

          <button
            className="rounded-xl bg-[#BB7070] p-1 md:p-3 text-sm text-black font-semibold"
            onClick={handleDownload}
          >
            {`${language !== true ? "Descargar cv" : "Download cv"}`}
          </button>
        </div>
        <div className="my-4 text-center text-black font-semibold">
          <p>
            © 2023 Copyright <span>Lucas Chanquía</span>
          </p>
        </div>
      </footer>
    </main>
  );
}
