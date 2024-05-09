import React from "react";
import FacebookPage from "./FacebookPage";

const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-12 gap-6 px-4 py-8 bg-gray-200">
        <div className="col-span-3">
          <h2 className="text-2xl font-bold my-2 border-b-2">Latest Posts</h2>
          <ul>
            <li>Link #</li>
            <li>Link #</li>
            <li>Link #</li>
            <li>Link #</li>
            <li>Link #</li>
            <li>Link #</li>
          </ul>
        </div>
        <div className="col-span-3">
          <h2 className="text-2xl font-bold my-2 border-b-2">About Us</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&rsquo;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.
          </p>
        </div>
        <div className="col-span-3">
          <h2 className="text-2xl font-bold my-2 border-b-2">Services</h2>
          <p>Footer 3</p>
        </div>
        <div className="col-span-3">
          <h2 className="text-2xl font-bold my-2 border-b-2">Latest Posts</h2>
          <p>
            <FacebookPage />
          </p>
        </div>
      </div>
      <div className="bg-black text-white text-center py-4">
        Privacy Policy | Terms & Conditions | &copy; Copyright Solaxes
      </div>
    </footer>
  );
};

export default Footer;
