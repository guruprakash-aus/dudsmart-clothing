import React, { Component } from "react";
import { auth, signInWithGoogle } from "../../../firebase/utils";
import CustomButton from "../../CustomButton/CustomButton";
import FormInput from "../../FormInput/FormInput";
import {
  ButtonsBarContainer,
  SignInContainer,
  SignInTitle,
} from "./SignIn.styles";
export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            value={this.state.email}
            handleChange={this.handleChange}
            label='Email'
            required
          />

          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='Password'
            required
          />
          <ButtonsBarContainer>
            <CustomButton type='submit'>Submit Form</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              SIGNIN WITH GOOGLE
            </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;
