import React from "react";
import styled from "styled-components";

let items = [
  {
    name: "How Identity Emerges in Crypto Networks",
    text: "Lorem ipsum is simply dummy text of the prnting and typesetting industry. ",
  },
  {
    name: "Measuring the Success of Mirror Crowdfunding",
    text: "Lorem ipsum is simply dummy text of the prnting and typesetting industry. ",
  },
  {
    name: "Just a Warmup for L2",
    text: "Lorem ipsum is simply dummy text of the prnting and typesetting industry. ",
  },
];

const Announcements = () => {
  return (
    <Card>
      <Header>
        <Title>Announcements</Title>
      </Header>

      {items.map((item) => (
        <Item>
          <Name>{item.name}</Name>
          <Members>{item.text}</Members>
        </Item>
      ))}

      <Bottom>Show More</Bottom>
    </Card>
  );
};

// Card

const Card = styled.div`
  background: #15181c;
  border-radius: 14px;
  margin-bottom: 16px;
  width: 350px;
`;

// Header

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
`;
const Title = styled.div`
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -1.5%;
`;

// Item
const Item = styled.div`
  align-items: center;
  border-top: 1px solid #2f3336;
  cursor: pointer;
  padding: 12px 32px 12px 16px;
  transition: all 0.2s linear;

  &:hover {
    background: rgba(255, 255, 255, 0.03);
  }
`;

const Name = styled.div`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -1.5%;
  line-height: 138.3%;
  margin-bottom: 4px;
`;
const Members = styled.div`
  color: rgb(110, 118, 125);
  font-size: 13px;
  line-height: 138.3%;
`;

// Bottom
const Bottom = styled.div`
  border-top: 1px solid #2f3336;
  color: #4ba0ec;
  cursor: pointer;
  font-size: 14px;
  padding: 16px;
  transition: all 0.2s linear;

  &:hover {
    background: rgba(255, 255, 255, 0.03);
  }
`;

export default Announcements;
