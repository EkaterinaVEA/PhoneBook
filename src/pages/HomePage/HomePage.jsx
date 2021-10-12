import Section from "../../components/Section/Section";
import { StyledLink } from "./HomePage.styles";
import { Text } from "./HomePage.styles";
import Container from "../../components/Container/Container";
import { Title } from "./HomePage.styles";
import { Main } from "./HomePage.styles"

const HomePage = () => {
  return (
    <Section>
      <Container>
        <Main>
          <Title>Hello!</Title>
          <Title>Welcome to the Phone Book!</Title>
          <Text>
            {"\u00A0"}
            <StyledLink to="/register">create your account</StyledLink>
            
            <StyledLink to="/login">log in</StyledLink>
            {"\u00A0"}
          </Text>
        </Main>
      </Container>
    </Section>
  );
};

export default HomePage;