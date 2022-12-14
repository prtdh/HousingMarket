import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import { BsFillEyeFill } from "react-icons/bs";
const Profile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  //destructuring the formData
  const { name, email, password } = formData;
  const navigate = useNavigate();
  //creating a on change functon. it will help DOM manipulation
  // like it will updated password field as we add password.
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  return (
    <Layout>
      <div className=" p-3 d-flex  align-items-center justify-content-center w-100 mt-4">
        <form className="bg-light p-4">
          <h3 className="bg-dark p-2 text-light">Sign Up</h3>

          <div className="form-group p-2">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input
              type="name"
              value={name}
              class="form-control"
              id="name"
              onChange={onChange}
              aria-describedby="nameHelp"
              placeHolder="Enter name"
            ></input>
          </div>
          <div className="form-group p-2">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              value={email}
              class="form-control"
              id="email"
              onChange={onChange}
              aria-describedby="emailHelp"
              placeHolder="Enter email"
            ></input>
          </div>

          <div className="form-group p-2">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={onChange}
              class="form-control"
              id="password"
              placeHolder="Password"
            ></input>
            <span>
              show password{" "}
              <BsFillEyeFill
                className="text-danger"
                style={{ cursor: "pointer" }}
                //added onclick function to show password. checking previous state of showPassword and reverse it.
                onClick={() => {
                  setShowPassword((prevState) => !prevState);
                }}
              />
            </span>
          </div>
          <button type="submit" className="btn btn-primary mt-2 w-100">
            Submit
          </button>
          <div>
            <h6> Login with Google</h6>
            <Link to="/signin">
              <span>Already User? </span>
              Login
            </Link>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Profile;
