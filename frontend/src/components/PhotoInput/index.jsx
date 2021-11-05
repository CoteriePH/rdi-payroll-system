import { useFormContext } from 'react-hook-form';
import { Wrapper, Label, Box, SubWrapper, Input } from './styles.js';

const PhotoInput = ({ placeholder = '', label, disabled = false, name, ...rest }) => {
  const { register } = useFormContext();
  return (
    <Wrapper>
      <SubWrapper>
        <Box>
          <Label size="xs">+ {label}</Label>
          <Input
            placeholder={placeholder}
            type="file"
            {...register(name)}
            disabled={disabled}
            {...rest}
          />
        </Box>
      </SubWrapper>
    </Wrapper>
  );
};

export default PhotoInput;
