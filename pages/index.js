import Head from "next/head";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import deved from "../public/FT.jpg";
//fotos carrusel
import HTML5 from "../public/images/HTML5.png";
import CSS3 from "../public/images/CSS3.png";
import BS from "../public/images/BOOTSTRAP.png";
import JAVAS from "../public/images/JAVASC.png";
import RJS from "../public/images/REACTJS.png";

import PHP from "../public/images/PHP.png";
import LARAVEL from "../public/images/LARAVEL.png";
import JAVA from "../public/images/JAVA.png";
import PYTHON from "../public/images/PYTHON.png";
import NODEJS from "../public/images/NODEJS.png";

import MYSQL from "../public/images/MYSQL.png";
import SQLS from "../public/images/SQLS.png";
import FIREB from "../public/images/FIREBASE.png";
import MONGO from "../public/images/MONGO.png";

import LOGO from "../public/icons/LOGO1.png";

//Fotos proyectos
import p1 from "../public/proyectos/p1.png";
import p2 from "../public/proyectos/p2.png";
import p3 from "../public/proyectos/p3.jpeg";
import p4 from "../public/proyectos/p4.jpg";

import Image from "next/image";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; 
import { Autoplay, FreeMode, EffectCoverflow, Navigation, Pagination } from 'swiper/modules'; 

export default function Home() {

  //cv
  const CV = "/cv/CV1.pdf";

  const [darkMode, setDarkMode] = useState(true); // Establecer el tema oscuro como predeterminado

  // Usar useEffect para recordar la preferencia del tema usando localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", JSON.stringify(!darkMode)); // Guardar la preferencia en localStorage
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <title>Home | Ronaldo's Portafolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/ARTC-T.png" />
      </Head>
      <main className="px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <Image src={LOGO} width={100} height={100} objectFit="contain" alt="Descripción de la imagen"/>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href={CV}
                  target="_blank"
                >
                  CV
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Ronaldo Trejo
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Web Developer Backend.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            Soy un programador apasionado por la tecnología, con conocimientos en PHP, JavaScript, Python y Java, 
            y experiencia en desarrollo web usando HTML5, CSS3 y frameworks como Laravel, Angular y React. 
            Mi objetivo es crear soluciones eficientes y seguir aprendiendo.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <a href="https://www.linkedin.com/in/ronaldo-trejo-78308b2aa/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/ronaldotrejo" target="_blank" rel="noopener noreferrer">
              <AiOutlineGithub />
            </a>
            <a href="https://www.instagram.com/ronxldo_trejo/" target="_blank" rel="noopener noreferrer">
              <AiFillInstagram />
            </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-64 h-64 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" alt="Descripción de la imagen"/>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Servicios</h3>
            <p className="text-justify text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Ofrezco desarrollo web eficiente y personalizado, utilizando tecnologías modernas y frameworks como 
              <span className="text-teal-500"> Laravel, Angular y React. </span>
              Mi objetivo es crear soluciones adaptadas a las necesidades del cliente, con un enfoque en la calidad y el aprendizaje continuo.
            </p>
          </div>

          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800 max-w-sm">
              <div className="flex justify-center items-center">
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  freeMode={true}
                  centeredSlides={true}
                  autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  modules={[Autoplay, FreeMode, EffectCoverflow, Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide><Image src={HTML5} width={90} height={90} objectFit="contain" alt="Descripción de la imagen"/></SwiperSlide>
                  <SwiperSlide><Image src={CSS3} width={90} height={90} objectFit="contain" alt="Descripción de la imagen"/></SwiperSlide>
                  <SwiperSlide><Image src={BS} width={90} height={90} objectFit="contain" alt="Descripción de la imagen"/></SwiperSlide>
                  <SwiperSlide><Image src={JAVAS} width={90} height={90} objectFit="contain" alt="Descripción de la imagen"/></SwiperSlide>
                  <SwiperSlide><Image src={RJS} width={90} height={90} objectFit="contain" alt="Descripción de la imagen"/></SwiperSlide>
                </Swiper>
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Frontend
              </h3>
              <p className="py-2 dark:text-white">
                Creo interfaces web responsivas y optimizadas, enfocadas en la usabilidad, 
                el rendimiento y una experiencia de usuario fluida.
              </p>
              <h4 className="py-4 text-teal-600">HTML5</h4>
              <p className="text-gray-800 py-1 dark:text-white">CSS3</p>
              <p className="text-gray-800 py-1 dark:text-white">Bootstrap</p>
              <p className="text-gray-800 py-1 dark:text-white">JavaScript</p>
              <p className="text-gray-800 py-1 dark:text-white">ReactJS</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800 max-w-sm">
              <div className="flex justify-center items-center">
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  freeMode={true}
                  centeredSlides={true}
                  autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  modules={[Autoplay, FreeMode, EffectCoverflow, Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide><Image src={PHP} width={90} height={90} objectFit="contain" alt="Descripción de la imagen"/></SwiperSlide>
                  <SwiperSlide><Image src={LARAVEL} width={90} height={90} objectFit="contain" alt="Descripción de la imagen"/></SwiperSlide>
                  <SwiperSlide><Image src={JAVA} width={90} height={90} objectFit="contain" alt="Descripción de la imagen"/></SwiperSlide>
                  <SwiperSlide><Image src={PYTHON} width={90} height={90} objectFit="contain" alt="Descripción de la imagen"/></SwiperSlide>
                  <SwiperSlide><Image src={NODEJS} width={90} height={90} objectFit="contain" alt="Descripción de la imagen"/></SwiperSlide>
                </Swiper>
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Backend
              </h3>
              <p className="py-2 dark:text-white">
              Me enfoco en construir aplicaciones seguras, escalables y eficientes. Trabajo 
              con la lógica de negocio para garantizar el buen rendimiento y la integridad.
              </p>
              <h4 className="py-4 text-teal-600">PHP</h4>
              <p className="text-gray-800 py-1 dark:text-white">Laravel</p>
              <p className="text-gray-800 py-1 dark:text-white">Java</p>
              <p className="text-gray-800 py-1 dark:text-white">Python</p>
              <p className="text-gray-800 py-1 dark:text-white">NodeJS</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800 max-w-sm">
              <div className="flex justify-center items-center">
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  freeMode={true}
                  centeredSlides={true}
                  autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  modules={[Autoplay, FreeMode, EffectCoverflow, Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide><Image src={MYSQL} width={90} height={90} objectFit="contain" alt="Descripción de la imagen"/></SwiperSlide>
                  <SwiperSlide><Image src={SQLS} width={90} height={90} objectFit="contain" alt="Descripción de la imagen"/></SwiperSlide>
                  <SwiperSlide><Image src={FIREB} width={90} height={90} objectFit="contain" alt="Descripción de la imagen"/></SwiperSlide>
                  <SwiperSlide><Image src={MONGO} width={90} height={90} objectFit="contain" alt="Descripción de la imagen"/></SwiperSlide>
                </Swiper>
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">Base de datos</h3>
              <p className="py-2 dark:text-white">
              Diseño y optimización de bases de datos, enfocándome en la eficiencia, seguridad y 
              escalabilidad para gestionar grandes volúmenes de información.
              </p>
              <h4 className="py-4 text-teal-600">MySQL</h4>
              <p className="text-gray-800 py-1 dark:text-white">SQL SERVER</p>
              <p className="text-gray-800 py-1 dark:text-white">Firebase</p>
              <p className="text-gray-800 py-1 dark:text-white">MongoDB</p>
              <p className="text-gray-800 py-1 dark:text-white"></p>
            </div>
          </div>

        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-justify text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              En esta sección encontrarás una selección de los proyectos en los que he trabajado, enfocados en el 
              <span className="text-teal-500"> desarrollo de soluciones web, aplicaciones y sistemas personalizados. </span> 
              Cada proyecto refleja mi pasión por la tecnología, el aprendizaje constante y mi compromiso 
              con la creación de productos eficientes y funcionales que resuelvan necesidades reales.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <a href="https://aronaldoct.github.io/Despliegue-PWA/" target="_blank" rel="noopener noreferrer">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={p1}
                  alt="Descripción de la imagen"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1 ">
              <a href="https://github.com/aronaldoct/sga-uaq" target="_blank" rel="noopener noreferrer">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={p2}
                  alt="Descripción de la imagen"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1 ">
              <a href="https://github.com/aronaldoct/AUTO-DRIP" target="_blank" rel="noopener noreferrer">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={p3}
                  alt="Descripción de la imagen"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1 ">
              <a href="https://netclick03.com/ayb5/" target="_blank" rel="noopener noreferrer">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={p4}
                  alt="Descripción de la imagen"
                />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
