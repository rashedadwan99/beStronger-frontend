import React, { useRef } from "react";
import Input from "./input";
import Delete from "../icons/delete";
import Button from "./button";
import "./hashtags.css";
function HashtagsInput({ hashtags, deleteTag, onClick, ...rest }) {
  const ref = useRef();
  // console.log(ref.addEventListener("click", () => {}));
  // const hashtagsList = document.getElementById("hashtagsList");

  // console.log(ref.current);
  return (
    <>
      <div className="hashtags">
        <Input {...rest} autoComplete="off" />
        <Button label="add" onClick={onClick} />
      </div>
      <div className="hashtags-list" ref={ref} id="hashtagsList">
        {hashtags.length ? (
          hashtags.map((tag, index) => (
            <div key={tag._id ? tag._id : tag + index}>
              <span>#{tag.name ? tag.name : tag}</span>
              <Delete onClick={(tag) => deleteTag(tag)} />
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default HashtagsInput;
