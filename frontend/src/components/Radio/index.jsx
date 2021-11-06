import { Label, Input, Container } from './styles.js';
import { useFormContext } from 'react-hook-form';

const Radio = ({ children, name, ...rest }) => {
  const { register } = useFormContext();
  return (
    <Container>
      <Label>
        <span className="radio__input">
          <Input {...register(name)} {...rest} type="radio" />
          <span className="radio__control"></span>
        </span>
        <span className="radio__label">{children}</span>
      </Label>
    </Container>
  );
};

export default Radio;
