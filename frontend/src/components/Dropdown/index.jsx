import { useState, useEffect } from "react";
import useComponentIsVisible from "@/context/useComponentIsVisible";
import { Container, Label, List, Options, Wrapper } from "./styles.js";
import Image from "next/image";

const Dropdown = ({
  label,
  isReset,
  options = [],
  setValue = () => {},
  withBorder = false,
  bg = "white",
}) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentIsVisible(false);
  const [labelState, setLabelState] = useState(label || options[0]);

  useEffect(() => {
    if (isReset) {
      setLabelState(label || options[0]);
    }
  }, [isReset]);

  return (
    <Wrapper ref={ref} onClick={() => setIsComponentVisible((prev) => !prev)}>
      <Container withBorder={withBorder} bg={bg}>
        <Label>{labelState}</Label>
        <Image
          src="/icons/dropdown.svg"
          alt="dropdown"
          width="20px"
          height="20px"
        />
      </Container>
      {isComponentVisible && (
        <Options>
          {options.map((item) => (
            <List
              key={item.id}
              onClick={() => {
                setValue(item.id);
                setLabelState(item.name);
              }}
            >
              {item.name}
            </List>
          ))}
        </Options>
      )}
    </Wrapper>
  );
};

export default Dropdown;
