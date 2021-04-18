import React, { useEffect, useState } from "react";
import { Dropdown, DropdownButton, Form } from "react-bootstrap";

const OrderList = () => {
  const [orderList, setOrderList] = useState([]);
  const [status,setStatus]=useState(null);
  const [statusId,setStatusId]=useState(null);
  console.log(orderList);
  useEffect(() => {
    fetch("https://tranquil-thicket-49653.herokuapp.com/orderList")
      .then((res) => res.json())
      .then((data) => setOrderList(data))
      .catch((err) => console.log(err));
  }, []);
  
  const handleStatusId = (id) => {
    setStatusId(id);
  }
  const handleStatus =(e) => {
   setStatus(e.target.value);
  }

  const handleSubmit = () => {
    const bookingStatus={
      id: statusId,
      status: status
    };
    console.log(bookingStatus);
    fetch('https://tranquil-thicket-49653.herokuapp.com/bookingStatus',{
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(bookingStatus)
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  return (
    <div>
      <table className="table table-borderless">
        <thead>
          <tr className='text-secondary'>
            <th>SL</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orderList.map((order, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{order.name}</td>
              <td>{order.email}</td>
              <td>{order.address}</td>
              <td>
                <Form.Group>
                  <Form.Control onBlur={handleStatus} onChange={() => handleStatusId(order._id)} as="select" defaultValue="Choose...">
                    <option>Choose...</option>
                    <option value="Done">Done</option>
                    <option value='Pending'>Pending</option>
                    <option value="On Going">On Going</option>
                  </Form.Control>
                  <button onClick={handleSubmit}>Update</button>
                </Form.Group>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
