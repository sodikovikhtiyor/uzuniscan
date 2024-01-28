import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
function Category({ type, icon }) {
  return (
    <div>
      <Card w="250px" bg="#319795" color="white" mb="30px">
        <CardBody>
          <Stack mt="1" spacing="3">
            <Heading size="md">{type}</Heading>
            {icon}
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
}

export default Category;
