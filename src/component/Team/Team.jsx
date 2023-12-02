import React from "react";
import Title from "../title/Title";
import Button from "../button/Button";
import teamData from "../../data/teamData";

const Team = () => {
  return (
    <main>
      <div>
        <div className="p-4">
          <Title name="Our Experts Team Members" title="TEAM" />
          <div className="pl-4">
            <Button name="See more" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 p-4">
          {teamData.map((data) => {
            return (
              <div
                key={data.id}
                className="w-full h-full shadow-2xl flex flex-col justify-center items-center rounded-md "
              >
                <img
                  src={data.img}
                  alt="personImg"
                  className="w-full h-full  rounded-t-md"
                />
                <div className="p-4  text-center">
                  <h1 className="text-2xl font-medium text-gray-900">
                    {data.name}
                  </h1>
                  <h2 className="text-base font-medium text-gray-600">
                    {data.role}
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Team;
