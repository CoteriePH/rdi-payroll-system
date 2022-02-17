import { useState, useEffect } from "react";

import { Container, Input, Wrapper, Label } from "./styles.js";
import { useFormContext } from "react-hook-form";
import Image from "next/image";

const InputField = ({
  uname = false,
  pwd = false,
  menu = false,
  placeholder = "",
  label,
  disabled = false,
  name,
  required,
  type,
}) => {
  const [placeholderName, setPlaceholderName] = useState(placeholder);
  const { register } = useFormContext();

  useEffect(() => {
    if (uname) {
      setPlaceholderName("Enter your username");
    }
    if (pwd) {
      setPlaceholderName("Enter your password");
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
            <Image src="@/assets/icons/person.svg" alt="lock" />
          </span>
        )}
        {pwd && (
          <span>
            <Image src="@/assets/icons/lock.svg" alt="lock" />
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
