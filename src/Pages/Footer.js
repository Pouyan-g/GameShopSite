import React from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";

const Container = styled.div`
  display: flex;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 10%,
    rgba(31, 41, 55, 1) 35%
  );
  height: 20vw;
  margin-top: 15px;
`;

const Input = styled.div`
  justify-content: space-around;
  display: flex;
  flex: 1;
`;

const Tit = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  color: white;
  margin-top: 25px;
  //   background-color: red;
`;
function Footer() {
  return (
    <Container>
      <Input>
        <Tit>
          <p>Stay in Touch</p>
          <p>Stay up to date on PUYN product news and offers.</p>
        </Tit>
        <TextField
          id="standard-basic"
          label="Enter your email"
          variant="standard"
        />
      </Input>
    </Container>
  );
}

export default Footer;
