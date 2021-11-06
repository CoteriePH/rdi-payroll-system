import { useState, useEffect } from 'react';

import { ReactComponent as Lock } from 'assets/icons/lock.svg';
import { ReactComponent as Person } from 'assets/icons/person.svg';

import { Container, Input, Wrapper, Label } from './styles.js';
import { useFormContext } from 'react-hook-form';

const InputField = ({
  uname = false,
  pwd = false,
  menu = false,
  placeholder = '',
  label,
  disabled = false,
  name,
  required,
  type
}) => {
  const [placeholderName, setPlaceholderName] = useState(placeholder);
  const { register } = useFormContext();

  useEffect(() => {
    if (uname) {
      setPlaceholderName('Enter your username');
    }
    if (pwd) {
      setPlaceholderName('Enter your password');
    }
    if (placeholder) {
      setPlaceholderName(placeholder);
    }
  }, [placeholderName, placeholder, uname, pwd]);

  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <Container disabled={disabled} menu={menu}>
        {uname && (
          <span>
            <Person />
          </span>
        )}
        {pwd && (
          <span>
            <Lock />
          </span>
        )}
        <Input
          placeholder={`${placeholderName}`}
          type={type}
          disabled={disabled}
          menu={menu}
          {...register(name, { required })}
        />
      </Container>
    </Wrapper>
  );
};

export default InputField;
