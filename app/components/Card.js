"use client";
import Image from "next/image";

const Contact = () => {


  return (
    <>
      <div className="bg-[#6E07F3] mx-3 rounded-2xl grid md:grid-cols-2 h-[800px] md:h-[50%] w-full">
        <div className="flex flex-col items-center justify-center p-5">
          <p className="text-white  text-center text-xl pl-4 md:pt-5">¿Tienes alguna pregunta, idea o proyecto en mente? No dudes en ponerte en contacto conmigo.
¡Espero tener la oportunidad de colaborar contigo y crear algo increíble!</p>
          <h2 className="text-white text-center text-xl font-bold pt-5">Contactame!</h2>
        </div>
        <div className="justify-center p-5">
          <form>
            <label
              for="name"
              className="text-white text-sm font-bold leading-tight tracking-normal"
            >
              Nombre
            </label>
            <input
              id="name"
              className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="Escribí tu nombre"
            />
            <label
              for="email2"
              className="text-white text-sm font-bold leading-tight tracking-normal"
            >
              Email
            </label>
            <div className="relative mb-5 mt-2">
              <div className="absolute text-gray-600 flex items-center px-4 border-r h-full">
                <Image
                  src="/images/correo.png"
                  width={20}
                  height={10}
                  alt="correo ico"
                />
              </div>
              <input
                id="email2"
                type="email"
                className="text-white focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-16 text-sm border-gray-300 rounded border"
                placeholder="ejemplo@dominio.com"
              />
            </div>
            <label
              for="expiry"
              className="text-white text-sm font-bold leading-tight tracking-normal"
            >
              Mensaje
            </label>
            <div className="relative mb-5 mt-2">
              <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer"></div>
              <textarea
                id="expiry"
                className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-[150px] flex items-center pl-3 pt-2 text-sm border-gray-300 rounded border"
                placeholder="Escribe tu mensaje"
              />
            </div>

            <div className="flex items-center justify-center w-full">
              <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white font-bold px-8 py-2 text-sm">
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

