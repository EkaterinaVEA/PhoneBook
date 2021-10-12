import { Nav } from "./AuthNav.styles";
import { AuthLink } from "./AuthNav.styles";

const AuthNav = () => {
  return (
    <Nav>
      <AuthLink to={"/register"}>Sign up</AuthLink>
      <AuthLink to={"/login"}>Log in</AuthLink>
    </Nav>
  );
};

export default AuthNav;