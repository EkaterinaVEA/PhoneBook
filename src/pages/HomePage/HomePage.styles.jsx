import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";

export const Container = styled.div`
  padding: 0 15px;
  background-color: var(--color-bg);
`;

export const Title = styled.h1`
  max-width: 300px;
  display: block;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  font-size: 40px;
  text-align: center;
  color: var(--color-dark);
  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
    font-size: 30px;
  }
`;

export const Text = styled.p`
  font-size: 22px;
  line-height: 1.8;
  color: var(--color-dark);
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const StyledLink = styled(Link)`
box-shadow: -10px -10px 30px 0 #ffffff, 10px 10px 30px 0 #aeaec080;
border-radius: 20px;
padding: 10px;
color: var(--dark);
  &:hover {
    border: 1px solid var(--color-accent);
    color: var(--color-accent);
  }
&:not(:last-child) {
margin-right: 30px;
}
`;

export const Main = styled.div`
display:block;
margin: 0 auto;
`;
