import React from "react";

const FormField = (props) => {
  return (
    <div>
      <div className="flex items-center mb-2 gap-2">
        <label
          htmlFor={props.name}
          className="block text-sm font-medium text-gray-900"
        >
          {props.labelName}
        </label>
        {props.isSurpriseMe && (
          <button
            type="button"
            className="font-semibold text-xs bg-[#EcECF1] py-1 px-2 rounded-[5px] text-black"
            onClick={props.handleSurpriseMe}
          >
            Surprise Me
          </button>
        )}
      </div>
      <input
        type={props.type}
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        required={true}
        onChange={props.handleChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md outline-none w-full p-3 block focus:ring-[#6469ff] focus:border-[#6469ff]"
      />
    </div>
  );
};

export default FormField;
FormField;
