import React from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import RegisterInput from "../components/RegisterInput";
import { register } from "../utils/api";
import { LocaleConsumer } from "../contexts/LocaleContext";

const RegisterPage = () => {
  const navigate = useNavigate();

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate("/");
    }
  }

  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <section className="register-page">
            <h2>
              {locale === "id"
                ? "Isi form untuk mendaftar akun."
                : "Fill the form to register account."}
            </h2>
            <RegisterInput register={onRegisterHandler} />
            <p>
              {locale === "id"
                ? "Sudah punya akun?"
                : "Already have an account?"}
              <Link to="/">
                {locale === "id" ? " Login di sini" : " Login here"}
              </Link>
            </p>
          </section>
        );
      }}
    </LocaleConsumer>
  );
};

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterPage;
