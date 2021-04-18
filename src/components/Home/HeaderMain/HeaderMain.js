import React from "react";
import headerside from "../../../images/mainhead.jpg";
import { useTrail, animated } from "react-spring";
import "./HeaderMain.css";
import HeaderButtom from "../HeaderButtom/HeaderButtom";
import { Link } from "react-router-dom";

const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 200, friction: 50 };
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

const HeaderMain = () => {
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
          <h1 className="text-pink">Dry Cleaing & Lundry at Your Door Step</h1>
          <p className="text-secondary text-pink">
            We Will Take Care About Cleaing
          </p>
          <Link to="/bookings"><button className="btn btn-primary">Get Booking</button></Link>
        </div>
        <div className="col-md-6">
          <img src={headerside} alt="" className="img-fluid w-75" />
        </div>
      </main>
      <HeaderButtom></HeaderButtom>
    </main>
  );
};

export default HeaderMain;
