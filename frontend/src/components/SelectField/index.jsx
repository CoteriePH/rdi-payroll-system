import { Container, Select, Wrapper, Label } from './styles.js';
import { useFormContext } from 'react-hook-form';
import { ErrorText } from 'styles/index.js';
import { theme } from 'theme.js';

const SelectField = ({
  type = 'text',
  placeholder = '',
  label,
  disabled = false,
  name,
  children,
  ...rest
}) => {
  const {
    register,
    formState: { errors }
  } = useFormContext();
  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <Container disabled={disabled}>
        <Select
          bg={errors[name] ? theme.colors.violet : 'silver'}
          placeholder={placeholder}
          type={type}
          disabled={disabled}
          {...register(name)}
          {...rest}
        >
          {children}
        </Select>
      </Container>
      {errors[name] ? <ErrorText>{errors[name].message}</ErrorText> : null}
    </Wrapper>
  );
};

export default SelectField;
