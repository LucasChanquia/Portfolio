"use client";
import Image from "next/image";
import { useState } from "react";
import Swal from 'sweetalert2'

const showAlert = () => {
  Swal.fire({
    title: 'Enviado con éxito',
    text: 'Te responderé a la brevedad, muchas gracias!',
    icon: 'success',
    confirmButtonColor: '#17387e',
    confirmButtonText: 'Aceptar',
    width: 400,
  })
}


const Contact = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://formsubmit.co/lucaschanquia@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams(formData)
      });

      if (response.ok) {
        showAlert()
        setIsLoading(false)
        setFormData({
          name: "",
          email: "",
          message: ""
        });
      } else {
       throw new Error(error.message)
      }
    } catch (error) {
      Swal.fire({
        title: '¡Error!',
        text: 'Por favor, intentá nuevamente',
        icon: 'error',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#17387e',
        width: 400,
      })
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <>
      <div className="bg-[#6E07F3] mx-3 rounded-2xl grid md:grid-cols-2 h-[800px] md:h-[50%] w-full">
        <div className="flex flex-col items-center justify-center p-5">
          <p className="text-white  text-center text-xl pl-4 md:pt-5">¿Tienes alguna pregunta, idea o proyecto en mente? No dudes en ponerte en contacto conmigo.
¡Espero tener la oportunidad de colaborar contigo y crear algo increíble!</p>
          <h2 className="text-white text-center text-xl font-bold pt-5">Contactame!</h2>
        </div>
        <div className="justify-center p-5">
          <form onSubmit={handleSubmit}>
            <label
              for="name"
              className="text-white text-sm font-bold leading-tight tracking-normal"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              onChange={handleChange}
              required
              className="mb-5 mt-2 text-black focus:outline-none focus:border focus:border-indigo-700 font-semibold w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
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
                id="email"
                onChange={handleChange}
                type="email"
                name="email"
                required
                className="text-black focus:outline-none focus:border focus:border-indigo-700 font-semibold w-full h-10 flex items-center pl-16 text-sm border-gray-300 rounded border"
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
                onChange={handleChange}
                name="message"
                required
                className="text-black focus:outline-none focus:border focus:border-indigo-700 font-semibold w-full h-[150px] flex items-center pl-3 pt-2 text-sm border-gray-300 rounded border"
                placeholder="Escribe tu mensaje"
              />
            </div>
            

            <div className="flex items-center justify-center w-full">
              <button className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-400 bg-indigo-700 rounded text-white font-bold px-8 py-2 text-sm ${
								isLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-indigo-600'}`}
							disabled={isLoading}>
              {isLoading ? 'Enviando...' : 'Enviar'}
              </button>
              
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

