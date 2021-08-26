import React from "react";
import styled from "styled-components";

let items = [
  {
    name: "Crypto Punks",
    verified: true,
    members: 4500,
  },
  {
    name: "Friends With Benefits ($FWB)",
    verified: true,
    members: 4500,
  },
  {
    name: "KERNEL",
    verified: true,
    members: 4500,
  },
  {
    name: "SyndicateDAO",
    verified: true,
    members: 4500,
  },
];

const Group = () => {
  return (
    <Card id="groupcard">
      <Header>
        <Title>Your Groups</Title>
        <Option>View all (6)</Option>
      </Header>

      {items.map((item) => (
        <Item>
          <Image />
          <Info>
            <Name>
              {item.name} {item.verified}
            </Name>
            <Members>{item.members} members</Members>
          </Info>
        </Item>
      ))}
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
const Option = styled.div`
  color: #4ba0ec;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

// Item
const Item = styled.div`
  align-items: center;
  border-top: 1px solid #2f3336;
  cursor: pointer;
  display: flex;
  padding: 12px 16px;

  transition: all 0.2s linear;

  &:hover {
    background: rgba(255, 255, 255, 0.03);
  }
`;
const Image = styled.div`
  background: #2f3336;
  border-radius: 100%;
  height: 48px;
  margin-right: 8px;
  width: 48px;
`;
const Info = styled.div``;
const Name = styled.div`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -1.5%;
  margin-bottom: 4px;
`;
const Members = styled.div`
  color: rgb(110, 118, 125);
  font-size: 13px;
`;

export default Group;
