import React from "react";
import Select from "react-select";

const SelectDropdown = ({ options, onChange }) => {
  const customStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "#0a0a0a",
      borderColor: "rgba(255, 255, 255, 0.1)", // Static border color
      color: "#f3f4f6",
      padding: "6px",
      boxShadow: "none",
      "&:hover": {
        borderColor: "rgba(255, 255, 255, 0.1)", // Keeps border unchanged on hover
      },
    }),
    menu: (styles) => ({
      ...styles,
      backgroundColor: "#0a0a0a",
      border: "1px solid rgba(255, 255, 255, 0.1)",
    }),
    option: (styles, { isSelected, isFocused }) => ({
      ...styles,
      backgroundColor: isSelected
        ? "#1e1e1e" // Dark gray for selected
        : isFocused
        ? "rgba(255, 255, 255, 0.1)" // Lighter gray for hover
        : "#0a0a0a",
      color: "#f3f4f6",
      cursor: "pointer",
    }),
    singleValue: (styles) => ({
      ...styles,
      color: "#f3f4f6", // Matches input text color
      fontSize: "16px",
    }),
    placeholder: (styles) => ({
      ...styles,
      color: "rgba(243, 244, 246, 0.5)", // Matches input placeholder color
      fontSize: "16px",
    }),
    dropdownIndicator: (styles) => ({
      ...styles,
      color: "#f3f4f6",
    }),
  };

  return (
    <Select
      options={options.map((option) => ({ value: option, label: option }))}
      styles={customStyles}
      onChange={(selected) => onChange({ target: { value: selected.value } })}
      placeholder="Select Service"
    />
  );
};

export default SelectDropdown;
