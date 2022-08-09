import { ShellBar } from "@ui5/webcomponents-react";
import React from "react";

// import { Container } from './styles';

function Header() {
  return (
    <ShellBar
      logo={
        <img
          alt="SAP Logo"
          mdxType="img"
          originalType="img"
          src="https://sap.github.io/ui5-webcomponents/assets/images/sap-logo-svg.svg"
        />
      }
      onLogoClick={function noRefCheck() {}}
      onMenuItemClick={function noRefCheck() {}}
      onNotificationsClick={function noRefCheck() {}}
      onProductSwitchClick={function noRefCheck() {}}
      onProfileClick={function noRefCheck() {}}
      primaryTitle="App Finance"
    />
  );
}

export default Header;
