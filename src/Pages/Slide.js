import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 15px;
  height: 100%;
  position: relative;
`;
const TextEditor = styled.p`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 3.75rem;
  color: white;
  z-index: 1;
  font-family: "Bebas Neue";
`;

const DecEditor = styled.p`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 15px;
  color: white;
  z-index: 1;
  justify-self: center;
  transition;
`;

function Slide() {
  return (
    <Container>
      <TextEditor className="hover:text-black transition-colors ">
        You're invited..!!
      </TextEditor>
      <DecEditor>
        Join us for the ultimate gaming event of the year, where you’ll immerse
        yourself in the latest innovations, explore new games, and connect with
        fellow gamers from all around the world.
      </DecEditor>
      <img
        className="object-cover w-screen blur-sm backdrop-sepia brightness-75"
        src="https://www.stuttgarter-nachrichten.de/media.media.15e0557e-d2a4-4dda-898b-e92e48443984.16x9_1024.jpg"
      />
    </Container>
  );
}

export default Slide;
