import {
  Button,
  CardBody,
  Card,
  CardFooter,
  Heading,
  Stack,
  Text,
  Textarea,
  Flex,
  Box,
} from "@chakra-ui/react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useState } from "react";

export default function Kard({ name, type, address, tel, regnum, email }) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <Card textAlign="left" border="2px solid black">
        <Flex textAlign="center" justifyContent="space-between">
          <Stack textAlign='left'>
            <CardBody>
              <Heading size="md">
                {name} <br />
                {type}
              </Heading>

              <Text py="2">Legal Address: {address}</Text>
              <Text py="2">
                License num.: <b>{regnum}</b>
              </Text>
              <Text as="a" cursor="pointer" fontWeight="500" py="2">
                Email: {email}
              </Text>
              <Text py="2">{address}</Text>
            </CardBody>

            <CardFooter pt="0">
              <Button variant="solid" bg="#319795">
                {tel}
              </Button>
            </CardFooter>
          </Stack>
          <Box>
            <Textarea
              placeholder="Leave your comment and feedback..."
              size="sm"
              m='20px'
              w='200px'
              border='1px solid black'
              h='200px'
            />
            {isClicked ? (
              <StarIcon onClick={() => setIsClicked(false)} />
            ) : (
              <StarBorderIcon onClick={() => setIsClicked(true)} />
            )}
            {isClicked ? (
              <StarIcon onClick={() => setIsClicked(false)} />
            ) : (
              <StarBorderIcon onClick={() => setIsClicked(true)} />
            )}
            {isClicked ? (
              <StarIcon onClick={() => setIsClicked(false)} />
            ) : (
              <StarBorderIcon onClick={() => setIsClicked(true)} />
            )}
          </Box>
        </Flex>
      </Card>
    </>
  );
}
