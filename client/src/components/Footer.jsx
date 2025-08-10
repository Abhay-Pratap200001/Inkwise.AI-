import React from "react";
import { footer_data } from "../assets/assets";

function Footer() {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-gray-50">
      <div className="flex flex-col md:flex-row item-start justify-between gap-10 py-10 border-b border-gray-500/300 text-gray-500">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSazG5R-v6NEMBde7o7v9X52g9xrEoHFyb8w2U_2FGwTilytOewkD3z40Zqk1I3HlWwco4&usqp=CAU"
            alt="log"
            className="mb-7 w-10 sm:w-20 inline-block bg-primary/3" />
          <span className="font-bold text-3xl ">Inkwise.AI</span>
          <p className="max-w-[410px] mt-6">
            cumque molestiae est reiciendis iste optio minima commodi odio iure
            quibusdam qui ullam libero! Architecto Non dolor, fuga
          </p>
        </div>

        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
          {footer_data.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base text-gray-800 md:mb-5 mb-2">
                {section.title}
              </h3>
              <ul>
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="hover:underline transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="py-4 text-center text-sm md:text-base text-gray-500">
        Copywrite {new Date().getFullYear()} Inkwise.AI - All Right Reserve{" "}
      </p>
    </div>
  );
}

export default Footer;
