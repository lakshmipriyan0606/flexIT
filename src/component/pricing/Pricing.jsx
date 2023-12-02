import { useEffect } from "react";
import Title from "../title/Title";
import Button from "../button/Button";
import pricing from "../../data/pricing";
import AOS from "aos";

const Pricing = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="p-4">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <Title
          title="PRICING PLANS"
          name="Affordable Pricing Plans"
          desc="Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Omnis
        Id Atque Dignissimos Repellat Quae Ullam."
        />
        <div className="">
          <Button name="See All Plans" />
        </div>
      </div>
      <section className="grid grid-cols-1 w-full gap-6 my-5 sm:grid-cols-2 lg:grid-cols-3 lg:my-8 xl:grid-cols-4">
        {pricing.map((data) => {
          return (
            <section
              className="group group-hover:transition-all group-hover:duration-500"
              key={data.id}
              data-aos="zoom-in"
            >
              <div className="border border-primary shadow-xl -z-10 p-4 flex flex-col gap-2 rounded-md justify-center items-center relative overflow-hidden  group-hover:bg-primary group-hover:text-white  group-hover:transition-all group-hover:duration-500 ">
                <img
                  src={data.img}
                  alt="icon"
                  className="w-[50px] h-[50px] group-hover:hidden flex"
                />
                <img
                  src={data.img2}
                  alt=""
                  className="w-[50px] h-[50px] group-hover:flex hidden"
                />
                <h1 className="text-2xl font-semibold">{data.plan}</h1>
                <h1 className="text-4xl font-bold">
                  <span className="text-primary text-xl group-hover:text-white">
                    $
                  </span>
                  {data.price}
                </h1>
                <h2 className="text-gray-600 text-lg group-hover:text-white ">
                  Per Project
                </h2>
                <h1 className=" w-full  h-[3px] bg-primary mx-auto group-hover:bg-white "></h1>
                {data.popular ? (
                  <div className="rotate-45 absolute left-20 -z-30  top-4 text-center pl-24 text-xl w-full h-7 bg-primary text-white group-hover:bg-white group-hover:text-primary">
                    Popular
                  </div>
                ) : (
                  ""
                )}
                <div className="flex flex-col gap-3">
                  {data.detail.map((data, i) => {
                    return (
                      <h5
                        key={i}
                        className="text-gray-600 group-hover:text-white "
                      >
                        {data}
                      </h5>
                    );
                  })}
                </div>
                <Button name="Select Plan" />
              </div>
            </section>
          );
        })}
      </section>
    </div>
  );
};

export default Pricing;
