import React from "react";

function FormField({
  options: { label, id, name, placeholder, type, value, onChange } = {},
  variant = "",
}) {
  return (
    <div>
      {variant === "submitButton" ? (
        <button type="submit">Szukaj</button>
      ) : (
        <>
          {label && <label htmlFor={id}>{label}</label>}
          <input
            id={id}
            name={name}
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        </>
      )}
    </div>
  );
}

export default FormField;
