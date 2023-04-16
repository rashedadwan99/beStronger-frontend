import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import IsRequired from "../IsRequired";
import EyeFormIcon from "../EyeFormIcon";
import bcrypt from "bcryptjs-react";

import "./forms.css";
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

  const handleChange = (e) => {
    if (type === "file") {
      if (e.target.files[0] === undefined) {
        setData("");
        return;
      }
      setData(e.target.files[0]);
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

export const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};
