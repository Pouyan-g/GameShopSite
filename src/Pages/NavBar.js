import React from "react";
import styled from "styled-components";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const Container = styled.div`
  display: flex;
  background-color: rgb(31, 41, 55);
  justify-content: space-between;
  align-items: center;
`;
const ListBtn = styled.div`
  margin: 5px;
  padding: 5px;
  display: flex;
  color: white;
  justify-content: space-evenly;
  flex: 1;
  align-items: center;
`;
const IconList = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  color: white;
  margin-right: 15px;
  justify-content: flex-end;
`;

function NavBar() {
  return (
    <Container>
      <h1 className="text-white font-bold m-2 ml-4">PUYN</h1>

      <ListBtn>
        <p>Home</p>
        <p>Games</p>
        <p>News</p>
        <p>Reviews</p>
      </ListBtn>

      <IconList>
        <Badge badgeContent={1} color="primary">
          <ShoppingCartIcon className="mr-4" />
        </Badge>
        <SearchIcon className="mr-4" />
        <PersonIcon className="mr-4" />
        <FormGroup>
          <FormControlLabel control={<Switch defaultChecked />} />
        </FormGroup>
      </IconList>
    </Container>
  );
}

export default NavBar;
