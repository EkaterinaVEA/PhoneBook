import styled from "@emotion/styled/macro";
import { Avatar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export const Form = styled.form`
  margin: 0 auto;
  padding: 40px;
  max-width: 400px;
  background-color: transparent;
 box-shadow: -10px -10px 30px 0 #ffffff, 10px 10px 30px 0 #aeaec080;
  border-radius: 20px;
`;

export const Label = styled.label``;
export const Input = styled.input`
border: none;
width: 100%;
height: 40px;
padding-left: 10px;
outline: none;
border-radius: 0 20px 20px 20px;
font-weight: 400;
font-size: 20px;
  line-height: 1.14;
  color: var(--dark);
  box-shadow: -5px -5px 5px 0 #ffffff70, 5px 5px 5px 0 #aeaec050;
  background-color: transparent;
  transition: border-color 250ms ease-in-out;
  &::placeholder {
    font-size: 16px;
    font-weight: 500;
    color: var(--color-accent);
    opacity: 0;
  }
  &:focus {
    box-shadow: inset -5px -5px 5px 0 #ffffff70, inset 5px 5px 5px 0 #aeaec050;
    &::placeholder {
      opacity: 1;
      transition-delay: 250ms;
      color: #2c2c2caa;
    }
  }
`;

export const StyledButton = styled(Button)`
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 16px;
  color: var(--color-accent);
  background-color: transparent;
  transition: all 250ms ease-in-out;
   box-shadow: -10px -10px 30px 0 #ffffff, 10px 10px 30px 0 #aeaec080;
  &:hover {
    background-color: transparent;
    transform: scale(1.2);
  }
`;

export const Btn = styled.button`
border: none;
background-color: transparent;
font-size: 30px;
position: relative;
bottom: 0;
right: 0;
margin-left: 330px;
margin-top: -40px;
display: flex;
align-items: center;
padding: 5px 10px 5px 10px;
opacity: 1;
pointer-events: none;
border: none;
font-size: 30px;
font-weight: 500;
color: var(--dark);
background-color: transparent;
&:hover {
 color: var(--color-accent);
}
   Input:focus ~ & {
     opacity: 0;
     pointer-events: all;
     transform: translateX(0);
   }
   & svg {
     margin-left: 10px;
     color: var(--color-accent);
   }
`;

export const StyledAvatar = styled(Avatar)`
  margin-bottom: 20px;
  background-color: transparent;
  color: var(--dark);
`;

export const StyledLink = styled(Link)`
  color: var(--color-accent);
  text-decoration: underline;
`;