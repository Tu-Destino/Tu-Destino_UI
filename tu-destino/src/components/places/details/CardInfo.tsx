import React from 'react'
import AutorenewIcon from '@mui/icons-material/Autorenew';
const CardInfo :React.FC = () =>{
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-12'>
            <div className="bg-white h-[30rem] shadow-lg rounded-md flex flex-col item-center w-full justify-center">
                <div className='flex flex-col justify-center items-center w-full p-4'>
                <h2 className='text-[1.4rem]'>Descripción:</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptatem expedita voluptate harum magni cumque corrupti debitis ex, ullam maxime consequatur quod sint sunt cum adipisci ipsam veniam enim provident sed? Eum dignissimos libero at et qui ducimus iure ab enim, fugiat delectus, sint tempora quae consequatur voluptas perferendis quisquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique possimus nostrum ea amet, veritatis in autem minus hic. Rerum, corporis doloribus similique reprehenderit rem id perferendis voluptates repellendus, asperiores commodi quod, dignissimos aliquid dolore? Soluta aspernatur beatae, eos voluptatibus perspiciatis expedita repellendus, modi officia minima harum nam temporibus dolores rerum?</p>
                </div>
                <h3 className='text-center'>Contactos</h3>
                <div className='grid grid-cols-2 grid-rows-2 gap-1 justify-center px-8'> 
                        <h2 className="flex items-center justify-center "><AutorenewIcon/> Telefono</h2>
                        <h2 className="flex items-center justify-center "><AutorenewIcon/>Correo</h2>
                        <h2 className="flex items-center justify-center "><AutorenewIcon/>Web</h2>
                        <h2 className="flex items-center justify-center "><AutorenewIcon/>Dirreción</h2>
                </div>
                 <div className="w-full px-8 flex items-center justify-center gap-8">
                    <h2 className="flex item-center justify-center"><AutorenewIcon/> Horario</h2>
                    <h2 className="flex item-center justify-center"><AutorenewIcon/> Precio </h2>
                 </div>
            </div>
            <div className="bg-white h-[30rem] shadow-lg rounded-md flex item-center justify-center">
                
            </div>
            <div className="bg-white h-[30rem] shadow-lg rounded-md flex item-center justify-center lg:col-span-1 md:col-span-2">
            {/*<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5560560487725!2d-75.57203252417655!3d6.190109026946063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e46828be7a83807%3A0x73d813d34659dfd4!2sMuseo%20El%20Castillo!5e0!3m2!1ses!2sco!4v1729783782463!5m2!1ses!2sco" width="597.333" height="480" loading="lazy" ></iframe>*/ }
            </div>
        </section>
    )
}

export default CardInfo;