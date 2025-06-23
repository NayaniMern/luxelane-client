import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Admin.css"

const ViewEnquiries = () => {
  const [enquiries, setEnq] = useState([]);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [_id, setId] = useState("");
  useEffect(() => {
    axios
      .get(`https://luxelane-server-zyhb.onrender.com/enquiries`)
      .then((res) => setEnq(res.data))
      .catch((err) => console.log(err));
  });
  const deleteEnq = (enqId) => {
    axios
      .delete(`https://luxelane-server-zyhb.onrender.com/enquiries/${enqId}`)
      .then(() => alert("Your Selected Enquiry was Deleted"))
      .catch((err) => console.log(err));
  };
  const getOneRecord = (enqId) => {
    axios
      .get(`https://luxelane-server-zyhb.onrender.com/enquiries/${enqId}`)
      .then((res) => {
        setName(res.data.name);
        setMobile(res.data.mobile);
        setEmail(res.data.email);
        setMessage(res.data.message);
        setId(res.data._id);
      })
      .catch((err) => console.log(err));
  };
  const updateEnq = (e) => {
    e.preventDefault();
    axios
      .put(`https://luxelane-server-zyhb.onrender.com/enquiries/${_id}`, {
        name,
        mobile,
        email,
        message,
        _id,
      })
      .then((res) => alert("Enquiry Updated"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="container p-5 view-enquiry">
      <h1 className="text-center mb-4">View Enquiries</h1>
      <table className="table table-bordered">
        <thead>
          <tr className="text-center">
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {enquiries.map((enq, index) => {
            return (
              <tr key={index}>
                <td>{enq.name}</td>
                <td>{enq.mobile}</td>
                <td>{enq.email}</td>
                <td>{enq.message}</td>
                <td>
                  <button
                    className="btn btn-primary me-3 mb-2"
                    onClick={() => getOneRecord(enq._id)}
                    data-bs-target="#update"
                    data-bs-toggle="modal"
                  >
                    <i className="bi bi-pencil-square"></i>
                  </button>
                  <button
                    onClick={() => deleteEnq(enq._id)}
                    className="btn btn-danger"
                  >
                   <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="modal fade" id="update" data-bs-backdrop="static">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5>Update Enquiry</h5>
              <button data-bs-dismiss="modal" className="btn-close"></button>
            </div>

            <div className="modal-body">
              <form onSubmit={updateEnq}>
                <input
                  type="name"
                  value={name}
                  className="form-control mb-2"
                  placeholder="Enter Your Name"
                  onChange={(e)=> setName(e.target.value)}
                />
                <input
                  type="mobile"
                  value={mobile}
                  className="form-control mb-2"
                  placeholder="Enter Your Mobile No "
                  onChange={(e)=> setMobile(e.target.value)}
                />
                <input
                  type="email"
                  value={email}
                  className="form-control mb-2"
                  placeholder="Enter Your Mail Id"
                  onChange={(e)=> setEmail(e.target.value)}
                />
                <input
                  type="message"
                  value={message}
                  className="form-control mb-2"
                  placeholder="Enter Your Message"
                  onChange={(e)=> setMessage(e.target.value)}
                />
                <button type="submit" className="btn btn-primary form-control">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEnquiries;
