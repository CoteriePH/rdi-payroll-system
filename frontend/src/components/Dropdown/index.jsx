import { useState } from 'react';
import useComponentIsVisible from 'context/useComponentIsVisible';
import { Container, Label, List, Options, Wrapper } from './styles.js';
import { ReactComponent as DropdownIcon } from 'assets/icons/dropdown.svg';

const Dropdown = ({ label, options = [] }) => {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentIsVisible(false);
  const [labelState, setLabelState] = useState(label || options[0]);

  return (
    <Wrapper ref={ref} onClick={() => setIsComponentVisible((prev) => !prev)}>
      <Container>
        <Label>{labelState}</Label>
        <DropdownIcon />
      </Container>
      {isComponentVisible && (
        <Options>
          {options.map((item, index) => (
            <List key={index} onClick={() => setLabelState(item)}>
              {item}
            </List>
          ))}
        </Options>
      )}
    </Wrapper>
  );
};

export default Dropdown;
