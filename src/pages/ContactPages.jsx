import { useEffect } from "react";
import contactData from "../data/contactData";
import { BsEnvelopeAt } from "react-icons/bs";
import { IoMdCall } from "react-icons/io";
import AOS from "aos";

const ContactPages = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div>
      <h1 className="text-center text-4xl font-semibold p-3">
        Our Offices Around The World
      </h1>
      <div className="grid grid-cols-1 gap-5 place-items-center  md:grid-cols-2  p-4  lg:grid-cols-3 my-7">
        {contactData.map((data) => {
          return (
            <div
              className="border border-t-4 border-primary  flex flex-col gap-2 p-4 text-lg rounded "
              key={data.id}
              data-aos="zoom-in"

            >
              <h1 className="font-semibold text-xl ">{data.country}</h1>
              <hr className="w-[80px] h-1 bg-primary" />
              <h1 className="text-gray-500">{data.address}</h1>
              <div className="flex items-center gap-4 p-3">
                <h1 className="bg-[#daf3fd] p-4 rounded text-primary hover:bg-primary hover:text-white transition-all duration-300">
                  <BsEnvelopeAt />
                </h1>
                <div className="text-gray-600">
                  <h2>Email</h2>
                  <h2>info@gmail.com</h2>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3">
                <h1 className="bg-[#daf3fd] p-4 rounded text-primary hover:bg-primary hover:text-white transition-all duration-300">
                  <IoMdCall />
                </h1>
                <div className="text-gray-600">
                  <h2>Phone</h2>
                  <h2>{data.phone}</h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <h1 className="text-center text-4xl font-semibold p-3 lg:mt-7">
          Find us on google maps
        </h1>
        <div>
        <div  className="p-4 lg:p-32"><iframe width="100%" height="500" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population calculator map</a></iframe></div>
        </div>
      </div>
    </div>
  );
};

export default ContactPages;
