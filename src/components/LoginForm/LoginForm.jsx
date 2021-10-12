import { Form } from "./LoginForm.styles";
import { Label } from "./LoginForm.styles";
import { Input } from "./LoginForm.styles";
import { Btn } from "./LoginForm.styles";
import { BiKey, BiMailSend } from "react-icons/bi";
import { nanoid } from "nanoid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";
import {
  Grid,
  StylesProvider,
  Typography
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { StyledAvatar } from "./LoginForm.styles";
import { StyledButton } from "./LoginForm.styles";
import { StyledLink } from "./LoginForm.styles";
import Section from "../Section/Section";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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

    dispatch(authOperations.logIn({ email, password }));
  };

  return (
    <StylesProvider injectFirst>
      <Section>
        <Form onSubmit={handleSubmit}>
          <Grid container spacing={3} direction="column">
            <Grid item align="center">
              <StyledAvatar>
                <LockOutlinedIcon />
              </StyledAvatar>
              <Typography component="h1" variant="h6">
                Log in
              </Typography>
            </Grid>
            <Grid item>
              <Label htmlFor={emailInputId}>
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
                >
                </Input>
                <Btn>
                  <BiMailSend/>
                </Btn>
              </Label>
            </Grid>
            <Grid item>
              <Label htmlFor={passwordInputId}>
                  <Input
                  id={passwordInputId}
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                />
                <Btn>
                  <BiKey/>
                </Btn>
              </Label>
            </Grid>
            <Grid item align="center">
              <StyledButton
                type="submit"
                color="secondary"
                disabled={!email || !password}
              >
                Log in
              </StyledButton>
            </Grid>
            <Grid item align="center">
              <Typography>
                Don't have an account?{"\u00A0"}
                <StyledLink to="/register">Sign up</StyledLink>
              </Typography>
            </Grid>
          </Grid>
        </Form>
      </Section>
    </StylesProvider>
  );
};

export default LoginForm;
