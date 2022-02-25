import NextLink from "next/link";
import { Container, StyledLink } from "./styles";
import { useState, useEffect } from "react";

function Link({ children, href, ...rest }) {
  // const [bg, setBg] = useState(bgColor)
  const [active, setActive] = useState(false);

  useEffect(() => {
    var PathName = window.location.pathname;
    if (PathName.includes(href)) {
      setActive(true);
    } else {
      // default style here
      setActive(false);
    }
  }, [window.location.pathname]);

  return (
    <>
      <NextLink href={href} passHref>
        <Container>
          <StyledLink className={active ? "link" : "link-inactive"} {...rest}>
            {children}
          </StyledLink>
        </Container>
      </NextLink>
    </>
  );
}

export default Link;
