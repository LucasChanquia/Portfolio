"use client";
import Card from "./components/Card";
import Image from "next/image";
import Link from "next/link";

// IMPORT MOTION FUNCTION
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
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
      <div className="h-screen w-screen flex flex-col justify-center items-center bg-[#85E6C5]">
        <div className="flex fixed top-3 right-3">
          <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
            className="flex justify-start gap-5 w-full h-full"
          >
            <motion.div className="background" variants={sidebar} />
            <Navigation />
            <MenuToggle toggle={() => toggleOpen()} className='w-5'/>
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
        <Link href="/about">
          <Image
            src="/images/Frame2.png"
            width={200}
            height={200}
            alt="ico about me"
          />
        </Link>

        <p>
          Soy un programador full stack con experiencia en desarrollo web y
          aplicaciones. Tengo conocimientos tanto en la parte del front-end como
          en el back-end, lo que me permite crear soluciones completas y
          funcionales. Mis últimos trabajos fueron enfocados en el front-end,
          trabajando con tecnologías como HTML, CSS y JavaScript, con el
          objetivo de lograr aplicaciones atractivas e intuitivas para el
          cliente. Por el lado del back-end, utilizo Node.js y bases de datos
          posgreSQL para construir la lógica empresarial y gestionar los datos
          de manera eficiente. También estoy familiarizado con frameworks y
          herramientas como React, Vite y NextJs. Estoy constantemente
          aprendiendo y adaptándome a las últimas tendencias tecnológicas para
          seguir entregando soluciones de alta calidad.{" "}
        </p>
      </section>
      <section id="proyects">
        <Link href="/proyects">
          <Image
            src="/images/Frame1.png"
            width={200}
            height={200}
            alt="ico proyects"
            className="relative left-0"
          />
        </Link>

        <h2>Proyectos</h2>
        <Card />
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



