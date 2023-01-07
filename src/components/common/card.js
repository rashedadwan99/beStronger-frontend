import React from "react";
import { imageUrl } from "../utils/image";
import { Card as Box, Button } from "react-bootstrap";
function Card({ title, text, buttonLabel, onClick, image, variant }) {
  return (
    <Box>
      {image && <Box.Img variant="top" src={imageUrl(image)} />}
      <Box.Body>
        <Box.Title>{title}</Box.Title>
        <Box.Text>{text.slice(0, 50)}...</Box.Text>
        <Button variant={variant} onClick={onClick}>
          {buttonLabel}
        </Button>
      </Box.Body>
    </Box>
  );
}

export default Card;
