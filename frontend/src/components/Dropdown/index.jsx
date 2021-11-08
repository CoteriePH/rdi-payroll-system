import { useState, useEffect } from "react";
import useComponentIsVisible from "@/context/useComponentIsVisible";
import { Container, Label, List, Options, Wrapper } from "./styles.js";
import { ReactComponent as DropdownIcon } from "@/assets/icons/dropdown.svg";

const Dropdown = ({
  label,
  isReset,
  options = [],
  setValue = () => {},
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
      <Container bg={bg}>
        <Label>{labelState}</Label>
        <DropdownIcon />
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
