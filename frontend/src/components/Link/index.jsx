import NextLink from "next/link";
import { Container, StyledLink } from "./styles";

function Link({ children, href, ...rest }) {
  return (
    <>
      <NextLink href={href} passHref>
        <Container>
          <StyledLink {...rest}>{children}</StyledLink>
        </Container>
      </NextLink>
    </>
  );
}

export default Link;
