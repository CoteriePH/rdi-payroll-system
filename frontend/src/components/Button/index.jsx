import { Container } from "./styles.js";
import { useSelector } from "react-redux";
import { authSelector } from "@/features/auth/authSlice";
import Loader from "@/components/Loader/index.jsx";

const Button = ({ children, color, bg, bgHover, outline = false, ...rest }) => {
  const { isFetching } = useSelector(authSelector);
  return (
    <Container
      bg={bg}
      {...rest}
      color={color}
      bgHover={bgHover}
      outline={outline}
    >
      {isFetching ? <Loader /> : children}
    </Container>
  );
};

export default Button;
