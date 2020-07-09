import React from "react";
import styled from "styled-components/native";
import dates from "../../data/dates";

const DateList = () => {
  return dates.map((item, index) => (
    <RowContainer key={index.toString()}>
      <DateTextLeft>{item.format("D")}</DateTextLeft>
      <GridLine />
      <DateTextRight>{item.format("D")}</DateTextRight>
    </RowContainer>
  ));
};

const GridTemplate = () => {
  return (
    <Container>
      <DateList />
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  position: absolute;
  flex-direction: column;
  z-index: -1;
  top: 100px;
`;

const RowContainer = styled.View`
  width: 100%;
  height: ${props => props.theme.cellSize + "px"};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const DateText = styled.Text`
    width: 10%;
    font-size: 16px;
    background: white;
`

const DateTextLeft = styled(DateText)`
  padding-right: 20px;
`;

const DateTextRight = styled(DateText)`
  padding-left: 20px;
`;

const GridLine = styled.View`
  width: 80%;
  height: 1px;
  background: #000;
`;

export default GridTemplate;
