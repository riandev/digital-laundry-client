import React from "react";
import { Link } from "react-router-dom";
import { useTrail, animated } from "react-spring";
import headerside from "../../../images/mainhead.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 200, friction: 50 };
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

const BookingMain = ({handleDateChange}) => {
  const [trail, set] = useTrail(3, () => ({
    xy: [0, 0],
    config: (i) => (i === 0 ? fast : slow),
  }));
  return (
    <main>
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
          <feColorMatrix
            in="blur"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"
          />
        </filter>
      </svg>
      <div
        className="hooks-main"
        onMouseMove={(e) => set({ xy: [e.clientX, e.clientY] })}
      >
        {trail.map((props, index) => (
          <animated.div
            key={index}
            style={{ transform: props.xy.interpolate(trans) }}
          />
        ))}
      </div>
      <main
        style={{ height: "600px" }}
        className="row d-flex align-items-center"
      >
        <div className="col-md-4 offset-md-1">
          <Calendar onChange={handleDateChange} value={new Date()} />
        </div>
        <div className="col-md-6">
          <img src={headerside} alt="" className="img-fluid w-75" />
        </div>
      </main>
    </main>
  );
};

export default BookingMain;
