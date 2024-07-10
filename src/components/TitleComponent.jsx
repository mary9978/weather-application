import React from "react";

function TitleComponent({ icon, text }) {
  return (
    <div className="flex items-center gap-x-2 my-2 px-4">
      <img className="w-5 h-5" src={icon} alt="" />
      <h2 className="font-iranSans font-medium text-dark ">
        {text}
      </h2>
    </div>
  );
}

export default TitleComponent;
