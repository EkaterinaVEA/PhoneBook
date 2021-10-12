import { Form } from "./RegisterForm.styles";
import { nanoid } from "nanoid";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Label } from "./RegisterForm.styles";
import { Input } from "./RegisterForm.styles";
import { Btn } from "./RegisterForm.styles";
import { BiKey, BiMailSend, BiUserCircle } from "react-icons/bi";
import { authOperations } from "../../redux/auth";
import {
  Grid,
  StylesProvider,
  Typography
} from "@material-ui/core";
import Section from "../Section/Section";
import { StyledAvatar } from "./RegisterForm.styles";
import { StyledButton } from "./RegisterForm.styles";
import { StyledLink } from "./RegisterForm.styles";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const dispatch = useDispatch();

  const nameInputId = nanoid();
  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);

      case "email":
        return setEmail(value);

      case "password":
        return setPassword(value);

      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(authOperations.register({ name, email, password }));
  };

  return (
    <StylesProvider injectFirst>
      <Section>
        <Form onSubmit={handleSubmit}>
          <Grid container spacing={3} direction="column">
            <Grid item align="center">
              <StyledAvatar />
              <Typography component="h1" variant="h6">
                Sign up
              </Typography>
            </Grid>
            <Grid item>
              <Label>
                <Input
                  id={nameInputId}
                  name="name"
                  type="text"
                  label="Name"
                  placeholder="Name"
                  autoComplete="off"
                  onChange={handleChange}
                  required
                  fullWidth
                />
                <Btn>
                  <BiUserCircle/>
                </Btn>
              </Label>
            </Grid>
            <Grid item>
              <Label>
                <Input
                  id={emailInputId}
                  name="email"
                  type="email"
                  label="Email"
                  autoComplete="off"
                  placeholder="example@mail.com"
                  onChange={handleChange}
                  required
                  fullWidth
                />
              <Btn>
                <BiMailSend/>
              </Btn>                
              </Label>
            </Grid>
            <Grid item>
              <Label>
                <Input
                  id={passwordInputId}
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="password"
                  onChange={handleChange}
                  required
                  fullWidth
                />
              <Btn>
                <BiKey/>
              </Btn>
              </Label>
            </Grid>
            <Grid item align="center">
              <StyledButton
                type="submit"
                color="primary"
                disabled={!name || !email || !password}
              >
                Sign up
              </StyledButton>
            </Grid>
            <Grid item align="center">
              <Typography>
                Already have an account?{"\u00A0"}
                <StyledLink to="/login">Log in</StyledLink>
              </Typography>
            </Grid>
          </Grid>
        </Form>
      </Section>
    </StylesProvider>
  );
};

export default RegisterForm;