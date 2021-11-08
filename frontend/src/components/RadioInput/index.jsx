import { useFormContext } from "react-hook-form";
import { ErrorText } from "@/styles";
import { Label, Input, Container, Wrapper } from "./styles.js";

const RadioInput = ({ children, label, name, ...rest }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Wrapper>
      <Container>
        <Label>
          <span className="radio__input">
            <Input {...register(name)} {...rest} type="radio" />
            <span className="radio__control"></span>
          </span>
          <span className="radio__label">{children ? children : label}</span>
        </Label>
      </Container>
      {errors[name] ? <ErrorText>{errors[name].message}</ErrorText> : null}
    </Wrapper>
  );
};

export default RadioInput;
