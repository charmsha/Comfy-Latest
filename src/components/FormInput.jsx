import React from "react";

const FormInput = ({ label, name, type, defaultValue,size }) => {
  return (
    <div>
      <label className="form-control">
        <div className="label">
          <span className="label-text">{label}</span>
        </div>
        <input
          type={type}
          placeholder={defaultValue}
          name={name}
          className={`input input-bordered ${size}`}
        />
      </label>
    </div>
  );
};

export default FormInput;
