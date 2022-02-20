import { Flex, Text } from "@/styles";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const FolderItem = ({ name, href = "/" }) => {
  const router = useRouter();

  return (
    <Flex
      cursor="pointer"
      onClick={() => router.push(href)}
      direction="column"
      h="max-content"
      gap="0.3"
    >
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
