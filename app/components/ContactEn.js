"use client";
import Image from "next/image";


const ContactEn = () => {
  return (
    <>
      <div className="bg-[#6E07F3] mx-3 rounded-2xl grid md:grid-cols-2 h-[800px] md:h-[500px] w-full border border-1-indigo-600">
        <div className="flex flex-col items-center justify-center p-5">
          <p className="text-white  text-center text-xl pl-4 md:pt-5">
          {`Do you have any questions, ideas, or projects in mind? Don't hesitate to get in touch with me. I look forward to having the opportunity to collaborate with you and create something amazing!`}
          </p>
          <h2 className="text-white text-center text-xl font-bold pt-5">
          Contact me!
          </h2>
        </div>
        <div className="justify-center p-5">
          <form
            action="https://formsubmit.co/lucaschanquia@gmail.com"
            method="POST"
          >
            <label
              htmlFor="name"
              className="text-white text-sm font-bold leading-tight tracking-normal"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="mb-5 mt-2 text-black focus:outline-none focus:border focus:border-indigo-700 font-semibold w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="I wrote your name"
            />

            <label
              htmlFor="email"
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
                placeholder="example@domains.com"
                required
              />
            </div>
            <label
              htmlFor="textarea"
              className="text-white text-sm font-bold leading-tight tracking-normal"
            >
              Mesagge
            </label>
            <div className="relative mb-5 mt-2">
              <textarea
                name="message"
                className="text-black focus:outline-none focus:border focus:border-indigo-700 font-semibold w-full h-[150px] flex items-center pl-3 pt-2 text-sm border-gray-300 rounded border"
                placeholder="I wrote your mesagge"
                required
              />
            </div>
            <input type="hidden" name="_captcha" value="false"></input>
            <div className="flex items-center justify-center w-full">
              <button
                type="submit"
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-400 bg-indigo-700 rounded text-white font-bold px-8 py-2 text-sm "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactEn;