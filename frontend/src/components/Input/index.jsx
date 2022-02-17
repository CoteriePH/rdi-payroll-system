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
  withBorder = false,
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
      <Container withBorder={withBorder} disabled={disabled} menu={menu}>
        {uname && (
          <span>
            <Image src="/icons/person.svg" width={20} height={20} alt="lock" />
          </span>
        )}
        {pwd && (
          <span>
            <Image src="/icons/lock.svg" width={20} height={20} alt="lock" />
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
