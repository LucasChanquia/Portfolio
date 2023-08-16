"use client";
import Card from "./components/Card";
import Image from "next/image";
import Link from "next/link";

// IMPORT MOTION FUNCTION
import { useRef, useEffect } from "react";
import { motion, useCycle, useInView } from "framer-motion";
import { useDimensions } from "./components/Use-dimension";
import { MenuToggle } from "./components/MenuToggle";
import { Navigation } from "./components/Navigation";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function Home() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const handleDownload = () => {
    const fileUrl = "/cv.pdf";

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "CV LucasChanquía.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="flex min-h-screen flex-col items-center ">
      <div className="h-screen w-screen flex flex-col justify-center items-center bg-[#3BC3A4]">
        <div className="flex absolute top-3 right-3">
          <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
            className="flex justify-start gap-5 w-full h-full"
          >
            <motion.div className="background" variants={sidebar} />
            <Navigation />
            <MenuToggle toggle={() => toggleOpen()} className="w-5" />
          </motion.nav>
        </div>
        <div className="flex gap-12">
          <div className="flex gap-10 items-center justify-between">
            <div className="flex flex-col gap-5 items-center">
              <motion.h1
                className="text-4xl"
                animate={{
                  x: 50,
                  color: "#4D3C77",
                }}
              >
                Hola! Soy Lucas Chanquía
              </motion.h1>
              <p className="font-mono text-xl">Full Stack Developer</p>
            </div>
          </div>

          <Image
            src="/images/image1.png"
            width={300}
            height={100}
            alt="ico avatar"
          />
        </div>
      </div>

      <section id="aboutMe">
        <div className="bg-[#6E07F3] w-screen h-screen grid grid-rows-2 gap-2">
          <div className="flex">
            <div id="1" className="flex justify-center items-center w-[30%]">
              <Link href="/about">
                <Image
                  src="/images/sobremi.png"
                  width={300}
                  height={200}
                  alt="ico about me"
                />
              </Link>
            </div>
            <div
              id="2"
              className="text-[#BEB9DD] p-5 text-center text-base  font-semibold antialiased my-auto mr-10 w-[70%]"
            >
              <p>
                Soy un programador full stack con experiencia en desarrollo web
                y aplicaciones. Tengo conocimientos tanto en la parte del
                front-end como en el back-end, lo que me permite crear
                soluciones completas y funcionales. Mis últimos trabajos fueron
                enfocados en el front-end, trabajando con tecnologías como HTML,
                CSS y JavaScript, con el objetivo de lograr aplicaciones
                atractivas e intuitivas para el cliente. Por el lado del
                back-end, utilizo Node.js y bases de datos posgreSQL para
                construir la lógica empresarial y gestionar los datos de manera
                eficiente. También estoy familiarizado con frameworks y
                herramientas como React, Vite y NextJs. Estoy constantemente
                aprendiendo y adaptándome a las últimas tendencias tecnológicas
                para seguir entregando soluciones de alta calidad.
              </p>
            </div>
          </div>

          <div className="text-center font-[inter] italic font-bold bg-white rounded-t-3xl mx-[5%] ">
            <h2 className="font-mono text-2xl my-5">Stack tecnológico</h2>
            <div className="grid grid-cols-3 justify-items-center mt-10 gap-5 ">
              <div className="border-r-2 border-gray-200 pr-5">
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
                <p id="stack">HTML | CSS | JavaScript | React | NextJs</p>
                <h2 className="font-sans text-lg my-5 text-[#00A887] mt-10">
                  Diseño UI/UX{" "}
                </h2>
                <p id="stack">Figma | Font Awesome | Bootstrap</p>
              </div>

              <div className="border-r-2 border-gray-200 pr-5">
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
              <div className="pr-5">
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
      </section>

      <section id="proyects" className="w-screen h-screen">
        <h2 className="text-4xl font-bold text-center mt-10">
          Trabajos recientes
        </h2>

        <div className="grid grid-cols-2 justify-items-center mt-10 gap-5 items-center  max-w-screen-lg mx-auto">
          <div className="border-4 border-[#3BC3A4] w-full h-full rounded-xl bg-slate-300 relative overflow-hidden group">
            <Image
              src="/images/livinng/livinng1.png"
              width={1000}
              height={500}
              alt="Livinng"
              className=" w-full h-full transition-opacity duration-300 ease-in-out group-hover:opacity-30"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <div className="text-white text-center">
                <h2 className="text-2xl font-bold text-black mb-2">Livinng</h2>
                <p
                  id="works"
                  className="text-xl font-bold text-[#6E07F3] px-3 mb-2"
                >
                  Livinng es una página que permite la reserva de hospedajes con
                  una metodología de pago única ya que permite a sus usuarios
                  sugerir el importe a pagar por noche{" "}
                </p>
                <p className="font-mono text-xl font-bold text-black px-3 mb-2">
                  HTML | Taildwind CSS | JavaScript | NextJs{" "}
                </p>
                <Link href="https://livinng.vercel.app/" target="_blank">
                  <button className="bg-[#3BC3A4] px-4 py-2  mt-5 rounded-lg text-white font-semibold">
                    {`Visitar página >`}
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="border-4 border-[#3BC3A4] w-full h-full rounded-xl bg-slate-300 relative overflow-hidden group">
            <Image
              src="/images/foccus.png"
              width={1000}
              height={500}
              alt="Foccus"
              className=" w-full h-full transition-opacity duration-300 ease-in-out group-hover:opacity-30"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <div className="text-white text-center">
                <h2 className="text-2xl font-bold text-black mb-2">Foccus</h2>
                <p
                  id="works"
                  className="text-xl font-bold text-[#6E07F3] px-3 mb-2"
                >
                  Foccus es una óptica que integra un e-commerce y un gestor de turnos para realizar el cambio o compra de gafas{" "}
                </p>
                <p className="font-mono text-xl font-bold text-black px-3 mb-2">
                HTML | Taildwind CSS | JavaScript | NextJs{" "}
                </p>
                
                  <button className="bg-[#3BC3A4] px-4 py-2  mt-5 rounded-lg text-white font-semibold">
                    {`En proceso`}
                  </button>
              </div>
            </div>
          </div>

          <div className="border-4 border-[#3BC3A4] w-full h-full rounded-xl bg-slate-300 relative overflow-hidden group">
            <Image
              src="/images/codepartners.png"
              width={1000}
              height={500}
              alt="Code Partners"
              className=" w-full h-full transition-opacity duration-300 ease-in-out group-hover:opacity-30"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <div className="text-white text-center">
                <h2 className="text-2xl font-bold text-black mb-2">Code Partners</h2>
                <p
                  id="works"
                  className="text-xl font-bold text-[#6E07F3] px-3 mb-2"
                >
                  Code Partners es la pagina que reúne a mi grupo de trabajo para aquellos proyectos que necesiten personas capacitadas y de calidad que brinden una solución integral a los requerimientos del cliente{" "}
                </p>
                <p className="font-mono text-xl font-bold text-black px-3 mb-2">
                  HTML | Taildwind CSS | JavaScript | NextJs{" "}
                </p>
                <Link href="https://codepartners.com.co/" target="_blank">
                  <button className="bg-[#3BC3A4] px-4 py-2  mt-5 rounded-lg text-white font-semibold">
                    {`Visitar página >`}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>Contacto</h2>
        <form></form>
      </section>
      <footer className="bg-black w-full h-full px-10 py-5">
        <div className="text-white flex justify-between items-center">
          <div>
            <h4 className="mb-3 flex justify-center">Sigueme</h4>
            <div className="flex gap-5">
              <Link href="https://github.com/LucasChanquia/" target="_blank">
                <Image
                  src="/images/github.png"
                  width={50}
                  height={50}
                  alt="ico github"
                  className="rounded-[50%]"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/lucas-chanqu%C3%ADa-889103213"
                target="_blank"
              >
                <Image
                  src="/images/linkedin.png"
                  width={50}
                  height={50}
                  alt="ico linkedin"
                  className="rounded-[50%]"
                />
              </Link>
            </div>
          </div>
          <div className="p-4 text-center">
            <p>
              © 2023 Copyright <span>Lucas Chanquía</span>
            </p>
          </div>
          <button
            className="rounded-xl bg-[#BB7070] p-3"
            onClick={handleDownload}
          >
            Descargar cv
          </button>
        </div>
      </footer>
    </main>
  );
}
