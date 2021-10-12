import styled from "@emotion/styled/macro";
import { IconButton } from "@material-ui/core";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const Username = styled.p`
  color: var(--color-accent);
  font-size: 20px;
  margin-right: 10px;
`;

export const LogOutBtn = styled(IconButton)`
  color: var(--color-accent);
`;