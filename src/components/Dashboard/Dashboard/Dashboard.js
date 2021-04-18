import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faSignOutAlt,
  faCalendar,
  faGripHorizontal,
  faUsers,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import AddService from "../AddService/AddService";
import AddBooking from "../AddBooking/AddBooking";
import BookingList from "../BookingList/BookingList";
import OrderList from "../OrderList/OrderList";
import ManageService from "../ManageService/ManageService";
import AddReview from "../AddReview/AddReview";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import { userContext } from "../../../App";

const routes = [
  {
    path: "/dashboard/booking",
    exact: true,
    sidebar: () => <div></div>,
    main: () => (
      <div>
        {" "}
        <AddBooking></AddBooking>{" "}
      </div>
    ),
  },
  {
    path: "/dashboard/bookinglist",
    sidebar: () => <div></div>,
    main: () => (
      <div>
        {" "}
        <BookingList></BookingList>{" "}
      </div>
    ),
  },
  {
    path: "/dashboard/review",
    sidebar: () => <div></div>,
    main: () => (
      <div>
        {" "}
        <AddReview></AddReview>{" "}
      </div>
    ),
  },
  {
    path: "/dashboard/orderlist",
    sidebar: () => <div></div>,
    main: () => (
      <div>
        {" "}
        <OrderList></OrderList>{" "}
      </div>
    ),
  },
  {
    path: "/dashboard/addservice",
    sidebar: () => <div></div>,
    main: () => (
      <div>
        {" "}
        <AddService></AddService>{" "}
      </div>
    ),
  },
  {
    path: "/dashboard/makeadmin",
    sidebar: () => <div></div>,
    main: () => (
      <div>
        {" "}
        <MakeAdmin></MakeAdmin>{" "}
      </div>
    ),
  },
  {
    path: "/dashboard/manageservice",
    sidebar: () => <div></div>,
    main: () => (
      <div>
        {" "}
        <ManageService></ManageService>{" "}
      </div>
    ),
  },
];

const Dashboard = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [isAdmin, setIsAdmin] = useState(false);
  console.log(loggedInUser);
  useEffect(() => {
    fetch("https://tranquil-thicket-49653.herokuapp.com/adminEmail",{
      method: "POST",
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({email: loggedInUser.email})
    })
    .then(res => res.json())
    .then(data => {setIsAdmin(data);})

  }, []);
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div
          className="sidebar d-flex flex-column justify-content-between py-5 px-4"
          style={{ height: "100vh" }}
        >
          <ul className="list-unstyled">
            {/* //User Part */}
            <div style={{display: isAdmin ? 'none': 'block'}}>
              <li>
                <Link to="/dashboard/booking" className="text-white">
                  <FontAwesomeIcon icon={faCalendar} /> <span>Book</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/bookinglist" className="text-white">
                  <FontAwesomeIcon icon={faUsers} /> <span>Booking List</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/review" className="text-white">
                  <FontAwesomeIcon icon={faUsers} /> <span>Review</span>
                </Link>
              </li>
            </div>
            {/* //Admin Part */}
            {isAdmin && <div>
              <li>
                <Link to="/dashboard/orderlist" className="text-white">
                  <FontAwesomeIcon icon={faUsers} /> <span>Order List</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/addservice" className="text-white">
                  <FontAwesomeIcon icon={faUsers} /> <span>Add Service</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/makeadmin" className="text-white">
                  <FontAwesomeIcon icon={faUsers} /> <span>Make Admin</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/manageservice" className="text-white">
                  <FontAwesomeIcon icon={faUsers} /> <span>Manage Service</span>
                </Link>
              </li>
            </div>}
           
          </ul>
          {/* //Logout */}
          <div>
            <Link to="/" className="text-white">
              <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
            </Link>
          </div>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
          </Switch>
        </div>

        <div style={{ flex: 1, padding: "10px" }}>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Dashboard;
