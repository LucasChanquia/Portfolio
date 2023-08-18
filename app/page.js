"use client";
import Contact from "./components/Contact";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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

  const { scrollYProgress } = useScroll();

  const handleDownload = () => {
    const fileUrl = "/cv.pdf";

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "CV LucasChanquía.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const homeSection = document.getElementById("home");
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

  return (
    <main className="flex min-h-screen flex-col items-center ">
      <div className="relative">
        <motion.div
          className="fixed top-0 left-0 right-0 h-2 z-1 backdrop-blur-md"
          style={{
            scaleX: scrollYProgress,
            background: "#E5384F",
          }}
          id="scroll"
        />
      </div>
      <div
        id="home"
        className="h-screen w-screen flex flex-col justify-center items-center bg-[#3BC3A4]"
      >
        <nav className="w-screen fixed top-0 z-0 mt-2 h-[50px] bg-transparent bg-opacity-10 md:p-10 backdrop-blur-lg">
          <ul className="flex gap-2 md:gap-10 justify-center items-center h-full ">
            <Link href="#home" >
              <li
                className={`text-sm md:text-2xl font-semibold  ${
                  currentSection === "home" ? "text-[#E5384F]" : "text-black"
                }`}
              >
                Home
              </li>
            </Link>
            <Link
              href="#aboutMe"
            >
              <li
                className={`text-sm md:text-2xl font-semibold  ${
                  currentSection === "aboutMe" ? "text-[#E5384F]" : "text-black"
                }`}
              >
                Sobre mi{" "}
              </li>
            </Link>
            <Link
              href="#proyects"
            >
              <li
                className={`text-sm md:text-2xl font-semibold  ${
                  currentSection === "proyects" ? "text-[#E5384F]" : "text-black"
                }`}
              >
                Proyectos{" "}
              </li>
            </Link>
            <Link
              href="#contact"
            >
              <li
                className={`text-sm md:text-2xl font-semibold  ${
                  currentSection === "contact" ? "text-[#E5384F]" : "text-black"
                }`}
              >
                Contacto
              </li>
            </Link>
          </ul>
        </nav>

        <div className="flex flex-col gap-12 md:flex-row md:max-w-3xl">
          <div className="flex gap-10 items-center justify-between">
            <div className="flex flex-col gap-5 items-center text-center justify-items-center">
              <motion.h1
                className="text-xl font-bold md:text-4xl text-center w-full"
                animate={{
                  x: 50,
                  color: "#4D3C77",
                }}
              >
                Hola! Soy Lucas Chanquía
              </motion.h1>
              <motion.p
                className="font-mono text-lg md:text-xl text-center"
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
            className="max-w-3xl:w-"
          />
        </div>
      </div>

      <section id="aboutMe">
        <Section>
          <div className="bg-[#6E07F3]  md:w-screen md:h-screen grid grid-rows-2 md:gap-2">
            <div className="flex flex-col md:flex-row justify-center items-center justify-items-center md:ml-5">
              <div
                id="1"
                className="flex justify-center items-center mt-5 md:mt-0 md:w-[30%]"
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
                className="text-[#BEB9DD] md:p-5 text-center text-base  font-semibold antialiased my-5  md:my-auto w-[70%] md:mr-10 h-[650px] md:h-auto"
              >
                <p className="h-auto md:text-lg lg:text-2xl">
                  Soy un programador full stack con experiencia en desarrollo
                  web lo que me permite crear soluciones completas y
                  funcionales. Me especializo en el front-end, trabajando con
                  tecnologías como HTML, CSS y JavaScript, con el objetivo de
                  lograr aplicaciones atractivas e intuitivas para el cliente.
                  Por el lado del back-end, utilizo Node.js y bases de datos
                  posgreSQL para construir la lógica empresarial y gestionar los
                  datos de manera eficiente. También estoy familiarizado con
                  frameworks como React, Vite y NextJs. Estoy constantemente
                  aprendiendo y adaptándome a las últimas tendencias
                  tecnológicas para brindar soluciones de alta calidad.
                </p>
              </div>
            </div>

            <div className="text-center font-[inter] italic font-bold lg:h-screen bg-white rounded-t-3xl mx-[5%]">
              <h2 className="font-mono text-2xl my-5 text-black">Stack tecnológico</h2>

              <div className="grid md:grid-cols-3 justify-items-center mt-10 gap-2">
                <div className="md:border-r-2 md:border-gray-200 lg:border-transparent  lg:pr-5">
                  <Image
                    src="/images/frontend.png"
                    width={100}
                    height={100}
                    alt="ico HTML"
                    className="rounded-3x1 mx-auto"
                  />
                  <h2 className="font-sans text-lg my-5 text-[#00A887]">
                    {`Front End`}
                  </h2>
                  <p id="stack">HTML | CSS | JavaScript | React | NextJs</p>
                  <h2 className="font-sans text-lg my-5 text-[#00A887] md:mt-10">
                    Diseño UI/UX{" "}
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

                  <p id="stack">Express | NodeJs | Redux | Typescript</p>
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
                    Base de Datos
                  </h2>
                  <p id="stack">PosgreSQL | SQL</p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </section>

      <section id="proyects" className="w-full h-full">
        <Section>
          <h2 className="text-4xl font-bold text-center mt-10 lg:mb-[150px] text-black">
            Trabajos recientes
          </h2>

          <div className="grid lg:grid-cols-2 justify-items-center mt-10 gap-8 items-center w-auto h-auto">
            <div className="border-4 border-[#3BC3A4] w-screen h-auto md:w-[600px] md:h-[400px] rounded-xl bg-slate-300 relative  overflow-hidden group">
              <Image
                src="/images/livinng/livinng1.png"
                width={500}
                height={500}
                alt="Livinng"
                className=" w-full h-full transition-opacity duration-300 ease-in-out group-hover:opacity-10 object-cover"
              />
              <div className="absolute inset-0 flex md:mt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <div className="text-white text-center overflow-y-scroll h-full items-center">
                  <h2 className="text-2xl font-bold text-black mb-2">{`< Livinng />`}</h2>
                  <p
                    id="works"
                    className="text-xl font-bold text-[#6E07F3] px-3 mb-2"
                  >
                    Livinng es una página que permite la reserva de hospedajes
                    con una metodología de pago única ya que permite a sus
                    usuarios sugerir el importe a pagar por noche{" "}
                  </p>
                  <p className="font-mono text-xl font-bold text-black px-3 mb-2">
                    HTML | Taildwind CSS | JavaScript | NextJs{" "}
                  </p>
                  <Link href="https://livinng.vercel.app/" target="_blank">
                    <button className="bg-[#3BC3A4] px-4 py-2  mt-5 mb-2 rounded-lg text-white font-semibold">
                      {`Visitar página >`}
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="border-4 border-[#3BC3A4] w-screen h-auto md:w-[600px] md:h-[400px] rounded-xl bg-slate-300 relative overflow-hidden group">
              <Image
                src="/images/foccus.png"
                width={500}
                height={500}
                alt="Foccus"
                className=" w-full h-full transition-opacity duration-300 ease-in-out group-hover:opacity-10 object-cover"
              />
              <div className="absolute inset-0 flex md:mt-10 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <div className="text-white text-center overflow-y-scroll h-full">
                  <h2 className="text-2xl font-bold text-black mb-2">{`< Foccus />`}</h2>
                  <p
                    id="works"
                    className="text-xl font-bold text-[#6E07F3] px-3 mb-2"
                  >
                    Foccus es una óptica que integra un e-commerce y un gestor
                    de turnos para realizar el cambio o compra de gafas{" "}
                  </p>
                  <p className="font-mono text-xl font-bold text-black px-3 mb-2">
                    HTML | Taildwind CSS | JavaScript | NextJs{" "}
                  </p>

                  <button className="bg-[#3BC3A4] px-4 py-2  mt-5 mb-2 rounded-lg text-white font-semibold">
                    {`En proceso`}
                  </button>
                </div>
              </div>
            </div>

            <div className="border-4 border-[#3BC3A4] w-screen h-auto md:w-[600px] md:h-[400px] rounded-xl bg-slate-300 relative overflow-hidden group">
              <Image
                src="/images/codepartners.png"
                width={500}
                height={500}
                alt="codepartners"
                className=" w-full h-full transition-opacity duration-300 ease-in-out group-hover:opacity-10"
              />
              <div className="absolute inset-0 flex md:mt-10 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <div className="text-white text-center overflow-y-scroll h-full">
                  <h2 className="text-2xl font-bold text-black mb-2">{`< Code Partners />`}</h2>
                  <p
                    id="works"
                    className="text-xl font-bold text-[#6E07F3] px-3 mb-2"
                  >
                    Code Partners representa a un equipo de trabajo para
                    proyectos a escala que necesiten personas capacitadas y de
                    calidad que brinden una solución integral a los
                    requerimientos del cliente{" "}
                  </p>
                  <p className="font-mono text-xl font-bold text-black px-3 mb-2">
                    HTML | Taildwind CSS | JavaScript | NextJs{" "}
                  </p>
                  <Link href="https://codepartners.com.co/" target="_blank">
                    <button className="bg-[#3BC3A4] px-4 py-2  mt-5 mb-2 rounded-lg text-white font-semibold">
                      {`Visitar página`}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </section>

      <section id="contact" className=" py-5 w-screen md:h-[auto] ">
        <Section>
          <div className="md:h-screen md:w-[90%] lg:w-[50%] flex justify-center items-center mx-auto ">
            <Contact />
          </div>
        </Section>
      </section>

      <footer className="bg-[#00A887] w-full h-full px-10 py-5">
        <div className="text-white flex justify-between items-end gap-10">
          <div>
            <h4 className="mb-3 flex justify-center text-black font-semibold">
              Redes
            </h4>
            <div className="flex gap-2">
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
          </div>

          <button
            className="rounded-xl bg-[#BB7070] p-1 md:p-3 text-sm text-black font-semibold"
            onClick={handleDownload}
          >
            Descargar cv
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
