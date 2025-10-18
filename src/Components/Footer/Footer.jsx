import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import logo from "../../assets/bookie.png";

const FooterData = [
    { title: "Home", link: "/#home" },
    { title: "Books", link: "/#books" },
    { title: "Best Books", link: "/#bestbooks" },
];

const Footer = () => {
  return (
    <div className="dark:bg-slate-900 bg-gray-300 text-center">
      <div className="container">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-10 place-items-center">
          <div className="py-8 md:py-0 px-4">
            <a href="#" className="font-semibold tracking-widest text-2xl">
              <img src={logo} alt="Velox Rentals" className="max-w-[150px] mx-auto" />
            </a>
            <p className="pt-3 dark:text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
              voluptas eos reprehenderit maiores.
            </p>
            <p className="mt-4 dark:text-white">
              Made by Daniel Fernandes Araujo👻
            </p>
            <a
              href="https://www.linkedin.com/in/daniel-fernandes-6b19b2299/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full hover:scale-105 duration-300"
            >
              Visit My Linkedin
            </a>
          </div>

          <div className="py-8 md:py-0 px-4 w-full flex flex-col items-center">
            <h1 className="text-xl font-bold mb-3 dark:text-primary">
              Important Links
            </h1>
            <ul className="space-y-2">
              {FooterData.map((data, index) => (
                <li key={index} className="text-center">
                  <a
                    href={data.link}
                    className="dark:text-white hover:text-black dark:hover:text-gray-400 duration-300"
                  >
                    {data.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="py-8 md:py-0 px-4 w-full flex flex-col items-center">
            <h1 className="text-xl font-bold mb-3 dark:text-primary">
              Address
            </h1>
            <div className="dark:text-white space-y-3">
              <div className="flex items-center gap-3">
                <FaLocationArrow />
                <p>Nova Friburgo, Rio de Janeiro</p>
              </div>
              <div className="flex items-center gap-3">
                <FaMobileAlt />
                <p>+21 123456789</p>
              </div>
            </div>
   
            <div className="flex items-center gap-4 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl hover:text-primary duration-300 dark:text-white dark:hover:text-primary" />
              </a>
              <a href="#">
                <FaYoutube className="text-3xl hover:text-primary duration-300 dark:text-white dark:hover:text-primary" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl hover:text-primary duration-300 dark:text-white dark:hover:text-primary" />
              </a>
              <a href="#">
                <FaTwitter className="text-3xl hover:text-primary duration-300 dark:text-white dark:hover:text-primary" />
              </a>
            </div>
          </div>

        </div>
      </div>
      <div className='border-t border-gray-700 py-4 text-center text-gray-500'>
        Copyright 2025 &#169;. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;