import { useDispatch, useSelector } from "react-redux";
import { authOperations, authSelectors } from "../../redux/auth";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Container } from "./UserMenu.styles";
import { Username } from "./UserMenu.styles";
import { LogOutBtn } from "./UserMenu.styles";

const UserMenu = () => {
  const username = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();

  return (
    <Container>
      <Username>{username}</Username>
      <LogOutBtn
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        <ExitToAppIcon />
      </LogOutBtn>
    </Container>
  );
};

export default UserMenu;