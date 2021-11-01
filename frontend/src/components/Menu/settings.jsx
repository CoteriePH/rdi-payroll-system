import { SettingsButton } from './styles';

import { useDispatch, useSelector } from 'react-redux';
import { setIsOpen, settingsSelector } from 'features/settings/settingsSlice';

import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';
import { ReactComponent as SettingsIcon } from 'assets/icons/settings.svg';

const Settings = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector(settingsSelector);
  return (
    <SettingsButton onClick={() => dispatch(setIsOpen())}>
      <span> {isOpen ? <CloseIcon /> : <SettingsIcon />}</span>
    </SettingsButton>
  );
};

export default Settings;
