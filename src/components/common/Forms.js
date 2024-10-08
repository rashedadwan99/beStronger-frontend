import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import IsRequired from "../IsRequired";
import EyeFormIcon from "../EyeFormIcon";
import bcrypt from "bcryptjs-react";

import "./forms.css";
import { Toast } from "./Toast";
const RenderInputField = ({
  data,
  setData,
  name,
  label,
  isRequired,
  type,
  element,
  value,
  postPicture,
  accept,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [eyeIcon, setEyeIcon] = useState(false);
  const [inputType, setInputType] = useState(type);
  useEffect(() => {
    if (type === "password") {
      setEyeIcon(true);
    }
  }, []);

  const handleChange = async (e) => {
    if (type === "file") {
      const file = e.target.files[0];
      if (file === undefined) {
        setData("");
        return;
      }
      if (file.size <= 1028) {
        Toast("error", "the image is too small, please select another image");
        return;
      }
      setData(file);

      return;
    }
    let { name, value } = e.target;
    if (typeof data === "string") {
      setData(value.trimLeft());
      return;
    }
    setData({ ...data, [name]: value.trimLeft() });
  };
  const handleClickIcon = () => {
    setShowPassword(!showPassword);
    !showPassword ? setInputType("text") : setInputType("password");
  };
  return (
    <div className={`input-container ${!label && "edit-eye-icon"}`}>
      {label && (
        <label htmlFor={name}>
          {label}
          <IsRequired isRequired={isRequired} />
        </label>
      )}
      {element !== "textarea" ? (
        <input
          {...rest}
          autoComplete="off"
          onChange={handleChange}
          className="common-input"
          name={name}
          type={inputType}
          value={value}
          accept={accept && accept}
        />
      ) : (
        <textarea
          onChange={handleChange}
          className="common-textarea"
          value={value}
          autoComplete="off"
        ></textarea>
      )}
      <EyeFormIcon
        showPassword={showPassword}
        eyeIcon={eyeIcon}
        handleClickIcon={handleClickIcon}
      />
    </div>
  );
};
export default RenderInputField;

RenderInputField.propTypes = {
  setData: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.string,
  isRequired: PropTypes.bool,
};
