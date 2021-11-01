import { Wrapper, Container, Box } from './styles';
import Check from 'assets/icons/Check';

const Checkbox = ({ label = 'Morning', disabled = false }) => {
  return (
    <Wrapper disabled={disabled}>
      <Container>
        <input type="checkbox" name="checkbox" disabled={disabled} />
        <Box disabled={disabled} />
        <Check />
      </Container>
      <span>{label}</span>
    </Wrapper>
  );
};

export default Checkbox;
