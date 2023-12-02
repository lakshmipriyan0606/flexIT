import React from "react";
import footerBg from "../../assets/img/footer.jpg";
import Logo from "../../assets/img/logo.png";
import { BsEnvelope } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { MdPhoneIphone } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import AOS from "aos";
import { useEffect  , useRef} from "react";
import emailjs from '@emailjs/browser';

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm(
        "service_5raun9k",
        "template_sb2nlnx",
        form.current,
        "UzJvmwoRUqMLPZ_s3"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("successfully Send")
        },
        (error) => {
          console.log(error.text);
        }
      );

      e.target.reset()
  };

  return (
    <section>
      <div
        style={{ backgroundImage: `url(${footerBg})` }}
        className="bg-cover relative bg-no-repeat h-[800px] sm:h-[650px] lg:h-[500px] bg-center "
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>

        <main className="flex flex-col lg:flex-row lg:p-6 items-center ">
          <section
            className="z-20 lg:w-[60%]"
            data-aos="zoom-in"
            data-aos-duration="4000"
          >
            <div className="  p-4 grid ">
              <img src={Logo} className="ml-4" alt="logo" />
              <h2 className="text-white mt-2 pl-4 ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatibus facere modi possimus dignissimos, aliquam nobis
                eaque? Voluptatem magnam quisquam rem.
              </h2>
              <section className="z-10 ">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                  <h1 className="text-white p-1 py-3 text-center">
                    Subscribe To Our News Letter
                  </h1>
                  <div className="mx-auto max-w-screen-md sm:text-center">
                    <form action="#" ref={form} onSubmit={sendEmail}>
                      <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                        <div className="relative w-full">
                          <label
                            htmlFor="email"
                            className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Email address
                          </label>
                          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg
                              className="w-5 h-5 text-gray-500 dark:text-gray-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                          </div>
                          <input
                            className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Enter your email"
                            type="email"
                            id="email"
                            required=""
                          />
                        </div>
                        <div>
                          <button
                            type="submit"
                            className="py-3 px-5   w-full text-sm font-medium text-center bg-primary  text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                          >
                            Subscribe
                          </button>
                        </div>
                      </div>
                      <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-400 newsletter-form-footer">
                        *We Will Not Share Your Personal Info
                        <a
                          href="#"
                          className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
                        >
                          Read our Privacy Policy
                        </a>
                        .
                      </div>
                    </form>
                  </div>
                </div>
              </section>
            </div>
          </section>
          <section
            className="z-20"
            data-aos="fade-up"
            data-aos-duration="4000"
          >
            <div className=" p-4 top-[410px] sm:top-[300px] sm:pl-7  py-5 flex flex-col gap-4  z-10 text-white">
              <h3 className="text-2xl "> Contact Information</h3>
              <h3 className="flex items-center gap-3 ">
                <MdPhoneIphone className="text-2xl" /> example@support.com
              </h3>
              <h2 className="flex items-center gap-3 ">
                <CiLocationOn className="text-2xl" /> 5 xyz st., abc,
                alexandria, egypt.
              </h2>
              <h1 className="flex items-center gap-3 ">
                <BsEnvelope className="text-2xl" /> +20123456789
              </h1>
              <div className="flex gap-4 cursor-pointer">
                <FaFacebookF className=" text-4xl bg-primary text-white p-2 rounded pb-1  hover:pb-2 transition-all duration-500 hover:bg-white hover:text-primary " />
                <FaInstagram className=" text-4xl bg-primary text-white p-2 rounded pb-1  hover:pb-2 transition-all duration-500 hover:bg-white hover:text-primary " />
                <FaTwitter className=" text-4xl bg-primary text-white p-2 rounded pb-1  hover:pb-2 transition-all duration-500 hover:bg-white hover:text-primary " />
                <FaYoutube className=" text-4xl bg-primary text-white p-2 rounded pb-1  hover:pb-2 transition-all duration-500 hover:bg-white hover:text-primary " />
              </div>
            </div>
          </section>
        </main>
        <h1 className="text-lg text-white text-center my-1 absolute bottom-5 md:left-[25%] left-[10%] lg:left-[35% ] z-20">
          @ 2023 Copyrights Created by{" "}
          <span className="text-primary">Lakshmi Priyan </span>{" "}
        </h1>
      </div>
    </section>
  );
};

export default Footer;
