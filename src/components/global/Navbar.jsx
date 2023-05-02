import { Menu } from "@mui/icons-material";
import { Collapse } from "@mui/material";
import { useState } from "react";
import { useFlex } from "./FlexContext";
import NavLinks from "./NavLinks";

export default function NavBar() {
  const flex = useFlex();
  const [menuVis, setMenuVis] = useState(false);

  return (
    <nav className="body-block row-between gray-block" id="nav-bar">
      <a className="title" href="/">
        FreeSolarZA
      </a>
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
