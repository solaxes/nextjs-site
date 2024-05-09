import React from "react";

export const metadata = {
  title: "About Page",
  description: "This is about page of the application",
};

const AboutPage = () => {
  return (
    <>
      <h1 className="mx-auto my-4 text-4xl font-bold text-center">About Us</h1>
      <div className="bg-gray-200 p-16">
        <div className="grid grid-cols-12 gap-8 mx-6">
          <div className="col-span-7">
            <p className="text-xl md:px-48 text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&rsquo;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="col-span-5 ">
            <img
              src="/images/ai.jpg"
              alt="AI "
              className="shadow-2xl rounded-xl"
            />
          </div>
        </div>
      </div>
      <div className="bg-slate-900 p-16 text-white">
        <div className="grid grid-cols-12 gap-8 mx-6">
          <div className="col-span-12 text-center">
            <h1 className="text-2xl md:text-6xl">Reach Out to Us </h1>
            <button className="bg-white text-black border-3 px-16 py-4 text-2xl rounded-lg mt-4">
              Call At : +9876543210
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
