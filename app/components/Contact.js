"use client";
import Image from "next/image";
import { useState } from "react";
import Swal from "sweetalert2";

const showAlert = () => {
  Swal.fire({
    title: "Enviado con éxito",
    text: "Te responderé a la brevedad, muchas gracias!",
    icon: "success",
    confirmButtonColor: "#17387e",
    confirmButtonText: "Aceptar",
    width: 400,
  });
};

const Contact = () => {
  return (
    <>
      <div className="bg-[#6E07F3] mx-3 rounded-2xl grid md:grid-cols-2 h-[800px] md:h-[500px] w-full">
        <div className="flex flex-col items-center justify-center p-5">
          <p className="text-white  text-center text-xl pl-4 md:pt-5">
            ¿Tienes alguna pregunta, idea o proyecto en mente? No dudes en
            ponerte en contacto conmigo. ¡Espero tener la oportunidad de
            colaborar contigo y crear algo increíble!
          </p>
          <h2 className="text-white text-center text-xl font-bold pt-5">
            Contactame!
          </h2>
        </div>
        <div className="justify-center p-5">
          <form
            action="https://formsubmit.co/lucaschanquia@gmail.com"
            method="POST"
          >
            <label
              for="name"
              className="text-white text-sm font-bold leading-tight tracking-normal"
            >
              Nombre
            </label>
            <input
              type="text"
              name="name"
              required
              className="mb-5 mt-2 text-black focus:outline-none focus:border focus:border-indigo-700 font-semibold w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="Escribí tu nombre"
            />

            <label
              for="email"
              className="text-white text-sm font-bold leading-tight tracking-normal"
            >
              Email
            </label>
            <div className="relative mb-5 mt-2">
              <div className="absolute text-gray-600 flex items-center px-4 border-r h-full">
                <Image
                  src="/images/correo2.png"
                  width={20}
                  height={10}
                  alt="correo ico"
                />
              </div>
              <input
                type="email"
                name="email"
                className="text-black focus:outline-none focus:border focus:border-indigo-700 font-semibold w-full h-10 flex items-center pl-16 text-sm border-gray-300 rounded border"
                placeholder="ejemplo@dominio.com"
                required
              />
            </div>
            <label
              for="textarea"
              className="text-white text-sm font-bold leading-tight tracking-normal"
            >
              Mensaje
            </label>
            <div className="relative mb-5 mt-2">
              <textarea
                name="message"
                className="text-black focus:outline-none focus:border focus:border-indigo-700 font-semibold w-full h-[150px] flex items-center pl-3 pt-2 text-sm border-gray-300 rounded border"
                placeholder="Escribe tu mensaje"
                required
              />
            </div>
            <input type="hidden" name="_captcha" value="false"></input>
            <div className="flex items-center justify-center w-full">
              <button
                type="submit"
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-400 bg-indigo-700 rounded text-white font-bold px-8 py-2 text-sm "
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
