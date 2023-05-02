import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { useState } from "react";
import { useFlex } from "../global/FlexContext";
import CardTrack from "./CardTrack";

export default function CardCollection(props) {
  //Buttons

  const flex = useFlex();

  const [nextActive, setNextActive] = useState(false);
  const [prevActive, setPrevActive] = useState(false);

  function checkWidth() {
    const track = document.getElementById(props.name);
    if (track.scrollWidth > track.clientWidth) {
      setNextActive(true);
    } else {
      setNextActive(false);
    }
  }

  function handleScroll(e) {
    const position = e.target.scrollLeft;
    const viewWidth = e.target.clientWidth;
    const max = e.target.scrollWidth;
    if (position + viewWidth === max) {
      setNextActive(false);
    } else {
      setNextActive(true);
    }
    if (position === 0) {
      setPrevActive(false);
    } else {
      setPrevActive(true);
    }
  }

  function nextCard() {
    const track = document.getElementById(props.name);
    track.scrollLeft += 270;
  }

  function prevCard() {
    const track = document.getElementById(props.name);
    track.scrollLeft -= 270;
  }

  //Scroll

  const [grab, setGrab] = useState(false);
  const [start, setStart] = useState(0);
  const [scroll, setScroll] = useState(0);

  function handleMouseDown(e) {
    const track = document.getElementById(props.name);
    setGrab(true);
    setStart(e.pageX - track.offsetLeft);
    setScroll(track.scrollLeft);
  }

  function handleMouseUp() {
    setGrab(false);
  }

  function handleMovement(e) {
    const target = document.getElementById(props.name);
    e.preventDefault();
    if (grab) {
      const x = e.pageX - target.offsetLeft;
      const walk = (x - start) * 3;
      target.scrollLeft = scroll - walk;
    }
  }

  return (
    <div
      className="body-block product-collection"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMovement}
      onMouseUp={handleMouseUp}
    >
      <h1 className="title">{props.title}</h1>
      <CardTrack
        products={props.products}
        name={props.name}
        handleScroll={handleScroll}
        checkWidth={checkWidth}
      />
      <div className="small-fade-L" />
      <div className="small-fade-R" />
      {!flex && (
        <button
          className="round-button prev-button"
          onClick={prevCard}
          disabled={!prevActive}
        >
          <ArrowLeft fontSize="large" />
        </button>
      )}
      {!flex && (
        <button
          className="round-button next-button"
          onClick={nextCard}
          disabled={!nextActive}
        >
          <ArrowRight fontSize="large" />
        </button>
      )}
    </div>
  );
}
