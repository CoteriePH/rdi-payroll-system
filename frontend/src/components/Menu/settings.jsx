import { SettingsButton } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpen, settingsSelector } from "@/features/settings/settingsSlice";
import Image from "next/image";

const Settings = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector(settingsSelector);
  return (
    <SettingsButton onClick={() => dispatch(setIsOpen())}>
      <span>
        {" "}
        {isOpen ? (
          <Image
            width="14px"
            height="14px"
            src="/icons/close.svg"
            alt="close"
          />
        ) : (
          <Image
            src="/icons/settings.svg"
            alt="settings"
            width="14px"
            height="14px"
          />
        )}
      </span>
    </SettingsButton>
  );
};

export default Settings;
