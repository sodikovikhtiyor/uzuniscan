import {
  Button,
  CardBody,
  Card,
  CardFooter,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function Kard({ name, type, address, tel, regnum, email }) {
  return (
    <>
      <Card
        // direction={{ base: "column", sm: "row" }}
        // overflow="hidden"
        // variant="outline"
        textAlign="left"
        border='2px solid black'
      >
        {/* <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="Caffe Latte"
        /> */}

        <Stack>
          <CardBody>
            <Heading size="md">
              {name} <br />
              {type}
            </Heading>

            <Text py="2">Legal Address: {address}</Text>
            <Text py="2">License num.: <b>{regnum}</b></Text>
            <Text as='a' cursor='pointer' fontWeight='500' py="2">Email: {email}</Text>
            <Text py="2">{address}</Text>
          </CardBody>

          <CardFooter pt='0'>
            <Button variant="solid" bg="#319795">
              {tel}
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </>
  );
}
