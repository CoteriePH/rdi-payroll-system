import { Wrapper, Container, Box } from "./styles";
import Check from "@/assets/icons/Check";
import { useFormContext } from "react-hook-form";

const Checkbox = ({
  label = "Morning",
  name,
  border = false,
  disabled = false,
  withLabel = true,
}) => {
  const { register } = useFormContext();
  return (
    <Wrapper disabled={disabled}>
      <Container>
        <input type="checkbox" {...register(name)} disabled={disabled} />
        <Box border disabled={disabled} />
        <Check />
      </Container>
      {withLabel ? <span>{label}</span> : null}
    </Wrapper>
  );
};

export default Checkbox;
