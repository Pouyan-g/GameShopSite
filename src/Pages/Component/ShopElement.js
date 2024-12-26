import React from "react";
import styled from "styled-components";
import Rating from "@mui/material/Rating";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import ComputerIcon from "@mui/icons-material/Computer";
import { GamesData } from "../../Data";
import { useState } from "react";

const Container = styled.div`
  border-width: 2px;
  border-style: solid;
  border-color: #000000;
  width: 256px;
  border-radius: 0.375rem;
  margin: 5px;
  padding: 3px;
  position: relative;
`;

const Image = styled.img`
  width: 256px;
  height: 196px;
  z-index: 1;
`;
const BHover = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 256px;
  height: 100%;
  z-index: 3;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.375rem;
  flex-direction: column;
`;
const BHoverText = styled.p`
  color: white;
  z-index: 4;
  cursor: pointer;
`;
function ShopElement() {
  const [Lick, setLick] = useState();
  return (
    <div className="flex ">
      {GamesData.map((data) => [
        <Container
          className="hover:-translate-y-3 transition-transform bg-white"
          key={data.id}
          onMouseEnter={() => setLick(data.id)}
          onMouseLeave={() => setLick(null)}
        >
          <Image className="rounded-md" src={data.imge} />
          <span>
            <ComputerIcon />
            <SportsEsportsIcon />
          </span>
          <p>{data.nmae}</p>
          <Rating name="read-only" value={data.score} readOnly />
          <hr className="border-1  border-black" />
          <p className="font-bold">Minimum System Requirements:</p>
          <p>{data.MSR1}</p>
          <p>{data.MSR2}</p>
          <p>{data.MSR3}</p>

          <p className="text-green-900">{data.price}$</p>
          {Lick === data.id ? (
            <BHover>
              <BHoverText className="hover:underline">More Detail</BHoverText>
              <button className="content-end w-60 bg-blue-900 rounded-md mt-4 mb-1 hover:bg-blue-600 text-white ">
                Shop
              </button>
            </BHover>
          ) : null}
        </Container>,
      ])}
    </div>
  );
}

export default ShopElement;
