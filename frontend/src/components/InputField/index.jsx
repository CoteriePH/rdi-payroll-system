import { Container, Input, Wrapper, Label } from "./styles.js";
import { useFormContext } from "react-hook-form";
import { ErrorText } from "@/styles";

const InputField = ({
  type = "text",
  placeholder = "",
  label,
  disabled = false,
  name,
  ...rest
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <Wrapper>
        {label && <Label>{label}</Label>}
        <Container disabled={disabled}>
          <Input
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
