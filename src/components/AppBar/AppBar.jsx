import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth";
import { StylesProvider } from "@material-ui/core/styles";

import AuthNav from "../AuthNav/AuthNav";
import SiteNav from "../SiteNav/SiteNav";
import UserMenu from "../UserMenu/UserMenu";

import { StyledAppBar } from "./AppBar.styles";
import { StyledToolbar } from "./AppBar.styles";

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <StylesProvider injectFirst>
      <StyledAppBar>
        <StyledToolbar>
          <SiteNav />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </StyledToolbar>
      </StyledAppBar>
    </StylesProvider>
  );
};

export default AppBar;