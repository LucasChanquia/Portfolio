"use client";
import Link from "next/link";
import Image from "next/image";
import projects from "../utils/proyects";


export default function proyects({language}) {
    
  return (
    <div className="grid lg:grid-cols-2 justify-items-center mt-10 gap-8 items-center w-full h-auto p-5">
      {projects?.map((data, index) => {
        return (
          <div
            key={index}
            className="border-4 border-[#3BC3A4] rounded-xl bg-slate-300 relative overflow-hidden group w-auto h-full"
          >
            <Image
              src={data.image}
              width={500}
              height={500}
              alt="Image projects"
              className="  w-auto h-auto transition-opacity duration-300 ease-in-out group-hover:opacity-10 object-cover"
            />
            <div className="absolute inset-0 flex md:mt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <div className="text-white text-center overflow-y-scroll h-full items-center">
                <h2 className="text-2xl font-bold text-black mb-2">
                  {data.name}
                </h2>
                <p
                  id="works"
                  className="text-xl font-bold text-[#6E07F3] px-3 mb-2"
                >  {`${
                    language !== true ? data.description : data.descriptionEn
                  }`} 
                </p>
                <p className="font-mono text-xl font-bold text-black px-3 mb-2">
                  {data.technologies}
                </p>
                <Link href={data.link} target="_blank">
                  <button className="bg-[#3BC3A4] px-4 py-2  mt-5 mb-2 rounded-lg text-white font-semibold">
                    {`${
                      language !== true ? `Visitar página >` : `Visit page >`
                    }`}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
