import React from "react";
import styled from "styled-components";
import ShopElement from "./Component/ShopElement";

const Container = styled.div`
  justify-content: center;
  margin-top: 20px;
`;
const ShopTitle = styled.p`
  text-align: center;
  font-size: 40px;
  font-family: "Bebas Neue";
`;
const ShopWrapper = styled.div`
  display: flex;
  justify-content: center;

  background-color: rgb(249, 250, 251);
  margin-top: 25px;
`;
function Shop() {
  return (
    <Container>
      <ShopTitle>🎮December Drops🎮</ShopTitle>
      <p className="text-opacity-40 text-center text-gray-900">
        Don’t miss these savings before they’re gone
      </p>
      <ShopWrapper>
        <ShopElement />
      </ShopWrapper>
    </Container>
  );
}

export default Shop;
