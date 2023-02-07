import React, { useEffect, useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { GoMarkGithub } from "react-icons/go";
import { getSocialMediaService } from "../services/socialMediaService";
import "./contactus.css";
function ContactUs() {
  const [socialMedia, setSocialMedia] = useState([]);
  let socialMediaIcons = [
    {
      icon: <BsFacebook />,
    },

    {
      icon: <AiFillLinkedin />,
    },
    {
      icon: <GoMarkGithub />,
    },
  ];
  useEffect(() => {
    async function getSocialMedia() {
      let { data: socialMedia } = await getSocialMediaService();

      setSocialMedia(socialMedia);
    }
    getSocialMedia();
  }, []);
  return (
    <div className="contact-us-info">
      {socialMedia.map((s, i) => {
        return (
          <a
            className="contact-us-item"
            key={s._id}
            target="_blank"
            href={s.link}
          >
            <span>{socialMediaIcons[i].icon}</span>
          </a>
        );
      })}
    </div>
  );
}

export default ContactUs;
