import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewUserSignup = () => {
  const [usersignup, setUsersignup] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [_id, setId] = useState("");

  useEffect(() => {
    axios
      .get("https://luxelane-server-zyhb.onrender.com/usersignup")
      .then((res) => {
      
          setUsersignup(res.data);
       
      })
      .catch((err) => console.log(err));
  }); 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const deleteUser = (userId) => {
    axios
      .delete(`https://luxelane-server-zyhb.onrender.com/usersignup/${userId}`)
      .then(() => {
        alert("User deleted");
        
      })
      .catch((err) => console.log(err));
  };

  const getOneUser = (userId) => {
    axios
      .get(`https://luxelane-server-zyhb.onrender.com/usersignup/${userId}`)
      .then((res) => {
        setUsername(res.data.username );
        setEmail(res.data.email);
        setPassword(res.data.password);
        setConfirmPassword(res.data.confirmPassword);
        setId(res.data._id);
      })
      .catch((err) => console.log(err));
  };

  const updateUser = (e) => {
    e.preventDefault();
    axios
      .put(`https://luxelane-server-zyhb.onrender.com/usersignup/${_id}`, {
        username,
        email,
        password,
        confirmPassword,
      })
      .then(() => {
        alert("User Updated");
     
       
       
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container p-5 viewusers">
      <h3 className="text-center mt-5 mb-3">View User Signups</h3>
      <table className="table table-bordered">
        <thead>
          <tr className="text-center">
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
            <th>Confirm Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {usersignup.map((user, index) => (
            <tr key={index}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.confirmPassword}</td>
              <td>
                <button
                  className="btn btn-primary me-3"
                  onClick={() => getOneUser(user._id)}
                  data-bs-target="#update"
                  data-bs-toggle="modal"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteUser(user._id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Update Modal */}
      <div className="modal fade" id="update" data-bs-backdrop="static">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5>Update User</h5>
              <button data-bs-dismiss="modal" className="btn-close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={updateUser}>
                <input
                  type="text"
                  value={username}
                  className="form-control mb-3"
                  placeholder="Enter Username"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  type="email"
                  value={email}
                  className="form-control mb-3"
                  placeholder="Enter Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  value={password}
                  className="form-control mb-3"
                  placeholder="Enter Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  type="text"
                  value={confirmPassword}
                  className="form-control mb-3"
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
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

export default ViewUserSignup;

