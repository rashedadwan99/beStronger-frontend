import React, { Component } from "react";
import Input from "./input";
import Button from "./button";
import TextArea from "./TextArea";
import Joi from "joi-browser";
import Uploadfiles from "./uploadfiles";
import HashtagsInput from "./hashtagsInput";
export default class CommnForm extends Component {
  validateProperty = ({ id, value }) => {
    const obj = { [id]: value };
    const subSchema = { [id]: this.schema[id] };
    const { error } = Joi.validate(obj, subSchema);

    if (!error) return null;
    return error.details[0].message;
  };
  validate = () => {
    const { data } = this.state;
    const options = { abortEarly: false };
    const { error } = Joi.validate(data, this.schema, options);
    if (!error) return null;
    const errors = {};

    error.details.map((e) => (errors[e.path[0]] = e.message));

    return errors;
  };
  handleChange = ({ currentTarget: input }) => {
    const { id, value } = input;
    const copyOfData = { ...this.state.data };

    const error = { ...this.state.error };
    const errorMessage = this.validateProperty({ id, value });
    if (errorMessage) error[id] = errorMessage;
    else delete error[id];
    this.setState({ error });

    copyOfData[id] = value;
    this.setState({ data: copyOfData });
  };
  handleFileChange = async ({ target }) => {
    const originalImage = this.state.image;
    try {
      const { data: image } = await this.uploadFile(target.files[0]);
      this.setState({ image });
    } catch (ex) {
      this.setState({ image: originalImage });
    }
  };
  clickAddTag = () => {
    let copyOfData = [...this.state.hashtags];
    if (!this.state.data.tag.length) return;
    if (this.state.hashtags.length < 5) {
      copyOfData.push(this.state.data.tag);
      copyOfData = [...new Set(copyOfData)];
      this.setState({ hashtags: copyOfData });
    }
  };
  deleteTag = (tag) => {
    const copyOfData = [...this.state.hashtags];
    copyOfData.splice(copyOfData.indexOf(tag), 1);
    this.setState({ hashtags: copyOfData });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const error = this.validate();

    error && this.setState({ error });
  };
  renderInput = (label, id, value, type = "text", min, max, style) => {
    return (
      <Input
        min={min && min}
        max={max && max}
        type={type}
        id={id}
        value={value}
        name={id}
        label={label}
        onChange={this.handleChange}
        style={style}
        errorMessage={this.state.error[id]}
      />
    );
  };
  renderButton = (label, onClick, className) => {
    return (
      <Button
        label={label}
        onClick={!onClick ? this.doSubmit : onClick}
        className={className}
        disabled={!onClick && this.validate()}
      />
    );
  };
  renderTextArea = (label, id, value, style, min, max) => {
    return (
      <TextArea
        label={label}
        onChange={this.handleChange}
        id={id}
        value={value}
        name={id}
        min={min && min}
        max={max && max}
        errorMessage={this.state.error[id]}
        style={style}
      />
    );
  };
  renderFileUpload = () => {
    return <Uploadfiles onChange={this.handleFileChange} />;
  };
  renderHashTags = (
    label,
    id,
    value,
    type = "text",
    min,
    max,
    style,
    hashtags
  ) => {
    return (
      <div className="hashtags-input">
        <HashtagsInput
          label={label}
          id={id}
          value={value}
          // ={this.handleChangeArray}
          style={{ ...style }}
          hashtags={hashtags}
          onChange={this.handleChange}
          deleteTag={this.deleteTag}
          onClick={this.clickAddTag}
        />
      </div>
    );
  };
}
