import React, { useState } from "react";
import CustomButton from "../../util/custom-button/custom-button.component";
import FormInput from "../../util/form-input/form-input.component";
import { useDispatch } from "react-redux";

import "./sign-in.styles.scss";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../../redux/user/user.actions";

const SignIn = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = userCredentials;
    dispatch(emailSignInStart(email, password));
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserCredentials({...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={userCredentials.email}
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={userCredentials.password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton
            type="button"
            onClick={() => dispatch(googleSignInStart())}
            isGoogleSignIn
          >
            {" "}
            Sign in with Google{" "}
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
