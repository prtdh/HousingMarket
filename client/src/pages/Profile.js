import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/layouts/Layout";

const Profile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  return (
    <Layout>
      <h1>signin</h1>
    </Layout>
  );
};

export default Profile;
