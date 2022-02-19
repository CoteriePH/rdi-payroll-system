import { Flex, Text } from "@/styles";
import Image from "next/image";
import React from "react";

const FolderItem = ({ name }) => {
  return (
    <Flex direction="column" h="max-content" gap="0.3">
      <Image
        src="/icons/folder.svg"
        alt="folder"
        width="100px"
        height="100px"
      />
      <Text>{name}</Text>
    </Flex>
  );
};

export default FolderItem;
