import { Flex, Text } from "@/styles";
import Image from "next/image";

const File = ({ name = "File", onOpen, ...rest }) => {
  return (
    <>
      <Flex
        {...rest}
        cursor="pointer"
        onClick={onOpen}
        direction="column"
        h="max-content"
        gap="0.3"
        justify="center"
        align="center"
      >
        <Image src="/icons/file.svg" alt="file" width="100px" height="100px" />
        <Text>{name}</Text>
      </Flex>
    </>
  );
};

export default File;
