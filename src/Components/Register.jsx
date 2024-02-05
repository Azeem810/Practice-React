import React, { useState } from "react";

const Register = () => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    number: "",
  });
  const [errors, setErrors] = useState({});
  const handleInputFields = (e) => {
    const { name, value } = e.target;
    setInputData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    let isErrorValidate = validateForm(inputData);

    if (Object.keys(isErrorValidate).length === 0) {
      console.warn("Form Submitted", inputData);
      setErrors({});
    } else {
      setErrors(isErrorValidate);
    }
  };

  const validateForm = (data) => {
    let errors = {};

    // Validate required fields
    for (const key in data) {
      if (!data[key]) {
        errors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required`;
      }
    }

    // Validate email format
    if (data.email && !isValidEmail(data.email)) {
      errors.email = "Enter a valid email address";
    }

    if (data.name.length < 3) {
      errors.name = "Name should be greater than 3 character";
    }

    if (data.number.length < 10 || data.number.length > 10) {
        errors.number = "Please Enter 10 Digit Mobile Number";
      }

    return errors;
  };

  const isValidEmail = (email) => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="register">
      <form onSubmit={handleRegister}>
        <label>
          Name <span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={handleInputFields}
        />
        {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
        <label>
          Email <span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleInputFields}
        />
        {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        <label>
          Number <span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="text"
          name="number"
          placeholder="Enter Number"
          onChange={handleInputFields}
        />
        {errors.number && <span style={{ color: "red" }}>{errors.number}</span>}

        <input type="submit" value={"Submit"} />
      </form>
    </div>
  );
};

export default Register;
