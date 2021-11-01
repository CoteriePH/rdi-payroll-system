import { Switch, Track, Thumb, Wrapper } from './styles.js';

const Toggle = ({ label, ...props }) => {
  return (
    <Wrapper>
      <Switch>
        <input type="checkbox" name="switch" {...props} />
        <Track>
          <Thumb />
        </Track>
      </Switch>
      <label>{label}</label>
    </Wrapper>
  );
};

export default Toggle;
