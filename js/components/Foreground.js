import React from "react";
import "./override.scss";

// Styled Components
import styled, { ThemeProvider } from "styled-components";
// import { useDarkMode } from "../utils/useDarkmode";

// Cards
import Group from "./Cards/Groups";
import Announcements from "./Cards/Announcements";
import MirrorEntries from "./Cards/MirrorEntries";

function Foreground() {
  // const [theme, mountedComponent] = useDarkMode();

  // Theme

  // if (!mountedComponent) return <div />;
  let bIsProfilePage = false;
  let bIsFeedPage = false;

  if(location.href && /^.*\/profile.*/.test(location.href)){
    bIsProfilePage = true;
    console.log("it is a profile page.");
  } else if (location.href && /^.*\/home.*/.test(location.href)) {
    bIsFeedPage = true;
    console.log("it is home page.");
  }

  return (
    <RightColumn>
      {bIsProfilePage
        ? <Announcements />
        : <Group />
      }
      

        <Spacer />
    </RightColumn>
  );
}

const RightColumn = styled.div`
  background: #000;
  height: 50vh;
  right: 0px;
  padding: 24px 0px;
  position: relative;
  overflow-y: scroll;
  top: 0px;
  width: 447px;
  z-index: 100;
`;

const Spacer = styled.div`
  height: 120px;
  width: 100%;
`;

export default Foreground;
