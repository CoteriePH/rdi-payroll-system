import NextLink from "next/link";
import { Container, StyledLink } from "./styles";
import {useState} from 'react';

function Link({ children, href, ...rest }) {
  const [active, setActive] = useState() 
  // "#4C00AA"
  const changeStyle = () => {    
    setActive("#fff")   

  }
  return (
    <>
      <NextLink href={href} passHref>
        <Container>   
          <StyledLink bgColor = {active} onClick={changeStyle} {...rest}>{children}</StyledLink>                               
        </Container>
      </NextLink>
    </>
  );
}

export default Link;
