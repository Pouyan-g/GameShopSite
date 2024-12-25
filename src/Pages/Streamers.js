import { StreamerData } from "../Data";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  //   justify-content: center;
  justify-content: space-evenly;
`;
const Label = styled.div`
  margin-top: 15px;
`;
const ImgLabel = styled.div`
  width: 100px;
`;

const StreamerName = styled.div`
  margin-top: 5px;
  justify-self: center;
`;

function Streamers() {
  return (
    <Container>
      {StreamerData.map((data) => [
        <Label key={data.id}>
          <ImgLabel>
            <img
              src={data.img}
              className="rounded-full border-4 border-green-700"
            />
            <StreamerName>{data.name}</StreamerName>
          </ImgLabel>
        </Label>,
      ])}
    </Container>
  );
}

export default Streamers;
