import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import SideMenu from "../sideMenu/sideMenu";

const Layout = styled.div`
  display: flex;
  background: #0a0518;
  height: 64px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
`;

function HeaderM(props) {
  const [isSideMenu, setIsSideMenu] = useState(false);

  const history = useHistory();

  return (
    <Layout>
      {isSideMenu ? <SideMenu {...props} close={setIsSideMenu} /> : null}

      <img
        style={{
          width: 66,
          height: 31.73,
        }}
        src="./assets/icons/logo01.png"
        alt="logo01"
      />

      <img
        onClick={() => {
          setIsSideMenu(true);
        }}
        style={{
          cursor: "pointer",
          width: 24,
          height: 24,
        }}
        src="./assets/icons/menu.png"
        alt="menu"
      />
    </Layout>
  );
}

export default HeaderM;
