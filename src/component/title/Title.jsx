import React from "react";


const Title = ({ title, name, desc, year , color , center }) => {
  return (
    <section className=" ">
      <div className={` ${center ? "text-center" : "text-left"} p-4   `}>
        <h1 className="text-primary font-semibold text-xl">
          <span className="text-3xl font-extrabold ">&#8901;</span>
          {title}
          <span className="text-3xl font-extrabold">&#8901;</span>
        </h1>
        <h2 className={` ${color ? "text-slate-200" : "text-gray-900"} text-[28px] my-4 font-semibold`}>
          {name} <span className="text-primary">{year}</span>
        </h2>
        <h3 className={`text-lg ${color ? "text-slate-200" : "text-gray-400"}`}>{desc}</h3>
      </div>
    </section>
  );
};

export default Title;
