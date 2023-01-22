import React from "react";

import { download } from "../assets";
import { downloadImage } from "../utils";
import { A1 } from "../assets";
import { B1 } from "../assets";

const Card = (props) => {
  return (
    <div className="rounded-xl group relative card showdow-card hover:shadow-cardhover">
      <img
        src={props.photo}
        className="w-full h-auto object-cover rounded-xl"
        alt={props.prompt}
      />
      <div className="bg-[#10131f] rounded-md absolute max-h-[94.5%] group-hover:flex flex-col bottom-0 left-0 right-0 m-2 p-4 hidden">
        <p className="text-white text-md overflow-y-auto prompt">
          {props.prompt}
        </p>
        <div className="flex mt-5 justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="rounded-full cursor-pointer bg-green-700 flex w-7 h-7 text-white items-center justify-center object-cover text-xs font-bold">
              {props.name[0]}
            </div>
            <p className="text-white text-xs">{props.name}</p>
          </div>
          <button
            type="button"
            className="outline-none border-none bg-transparent"
            onClick={() => downloadImage(props._id, props.photo)}
          >
            <img
              src={download}
              alt="download"
              className="w-6 h-6 object-contain invert"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
