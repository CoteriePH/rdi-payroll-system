import { Flex, Text } from "@/styles";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Hr } from "./styles";

const ListItem = ({
  col1 = "1111-1111",
  col2 = "John Doe",
  col3 = "Accounting & Finance",
  href = "/",
}) => {
  const router = useRouter();

  return (
    <>
      <Flex direction="row" align="center" justify="center" gap="5">
        <Flex
          basis="80%"
          cursor="pointer"
          onClick={() => router.push(href)}
          direction="row"
          align="center"
          justify="center"
          gap="5"
        >
          <Image
            src="/icons/folder.svg"
            alt="folder"
            width="50px"
            height="50px"
          />

          <Flex direction="row" align="center" justify="flex-start" gap="5">
            <Flex basis="60%">
              <Text>{col1}</Text>
            </Flex>
            <Flex basis="20%">
              <Text fontWeight="bold">{col2}</Text>
            </Flex>
            <Flex basis="30%">
              <Text>{col3}</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          basis="10%"
          direction="row"
          align="center"
          justify="flex-end"
          gap="1"
        >
          <Image src="/icons/edit.svg" alt="edit" width="20px" height="20px" />
          <Image
            src="/icons/delete.svg"
            alt="delete"
            width="20px"
            height="20px"
          />
        </Flex>
      </Flex>
      <Hr />
    </>
  );
};

export default ListItem;
