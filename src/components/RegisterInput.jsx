import React from "react";
import useInput from "../hooks/useInput";
import PropTypes from "prop-types";

const RegisterInput = ({ register }) => {
  const [name, onnameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [confirmPassword, onConfirmPasswordChange] = useInput("");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    register({
      name: name,
      email: email,
      password: password,
    });
  };

  return (
    <div className="input-register">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" value={name} onChange={onnameChange} />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" value={email} onChange={onEmailChange} />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={onPasswordChange}
      />
      <label htmlFor="confirmPassword">Confirm password</label>
      <input
        type="password"
        id="confirmPassword"
        value={confirmPassword}
        onChange={onConfirmPasswordChange}
      />
      <button type="button" onClick={onSubmitHandler}>
        Register
      </button>
    </div>
  );
};

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};
export default RegisterInput;
