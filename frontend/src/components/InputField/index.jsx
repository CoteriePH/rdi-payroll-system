import { Container, Input, Wrapper, Label } from "./styles.js";
import { useFormContext } from "react-hook-form";
import { ErrorText } from "@/styles";

const InputField = ({
  type = "text",
  placeholder = "",
  label,
  disabled = false,
  name,
  fontSize = "xs",
  border = false,
  ...rest
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <Wrapper>
        {label && <Label fontSize={fontSize}>{label}</Label>}
        <Container disabled={disabled}>
          <Input
            border={border}
            // bg={errors[name] ? theme.colors.violet : 'silver'}
            placeholder={placeholder}
            type={type}
            disabled={disabled}
            {...register(name)}
            {...rest}
          />
        </Container>
        {/* TODO ERROR STYLE */}
        {errors[name] ? <ErrorText>{errors[name].message}</ErrorText> : null}
      </Wrapper>
    </>
  );
};

export default InputField;
