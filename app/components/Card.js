'use client'
import Image from 'next/image'

const Card = () => {

  const proyects = [
    {
        name: 'Livinng',
        url: 'https://livinng.vercel.app/',
        description: 'Livinng es un buscador de alojamientos que le da al cliente la posibilidad de proponer el importe a abonar por estadía',
        tecnologías: {
          
        }
    },
    {
      name: 'Foccus',
      url: 'https://foccus.vercel.app/',
      description: 'Foccus es un e-commerce de óptica.',
      tecnologías: ''
  }
]
  return (
    <div>
      {proyects?.map((items, index) => {
        return (
          <div key={index}>
            <h2>{items.name}</h2>
            <p>{items.description}</p>
            <h3>{items.url}</h3>
            
          </div>
        );
      })}
    </div>
  );
};

export default Card;
