import { Menu } from "@mui/icons-material";
import { Collapse } from "@mui/material";
import { useState } from "react";
import SocialLinks from "../home/SocialLinks";
import { useFlex } from "./FlexContext";
import NavLinks from "./NavLinks";

export default function NavBar(props) {
  const flex = useFlex();
  const [menuVis, setMenuVis] = useState(false);

  return (
    <nav className="body-block row-between gray-block" id="nav-bar">
      <div className="row-start nav-media">
        <img
          className="logo-nav"
          src={`${window.location.origin}/images/color-logo.png`}
          alt="FreeSolarZA Logo"
          title="FreeSolarZA Logo"
        />
        <a className="title" href="/">
          FreeSolarZA
        </a>
        <SocialLinks data={props.contact} />
      </div>
      {flex && (
        <button
          className="invisibutton"
          onClick={() => {
            setMenuVis((preval) => {
              return !preval;
            });
          }}
        >
          <Menu fontSize="large" />
        </button>
      )}
      {!flex ? (
        <NavLinks />
      ) : (
        <div className="flexed-nav">
          <Collapse in={menuVis}>
            <NavLinks />
          </Collapse>
        </div>
      )}
    </nav>
  );
}
