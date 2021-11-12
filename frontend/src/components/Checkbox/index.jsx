import { Wrapper, Container, Box } from "./styles";
import Check from "@/assets/icons/Check";
import { useFormContext } from "react-hook-form";

const Checkbox = ({
  label = "Morning",
  name,
  border = false,
  disabled = false,
}) => {
  const { register } = useFormContext();
  return (
    <Wrapper disabled={disabled}>
      <Container>
        <input type="checkbox" {...register(name)} disabled={disabled} />
        <Box border disabled={disabled} />
        <Check />
      </Container>
      <span>{label}</span>
    </Wrapper>
  );
};

export default Checkbox;
