import { Button, CardBody, Card, CardFooter, Heading, Image, Stack, Text } from "@chakra-ui/react";

export default function Kard({ name, type, address, tel }) {
  return (
    <>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Heading size="md">
              {name}
              {type}
            </Heading>

            <Text py="2">{address}</Text>
          </CardBody>

          <CardFooter>
            <Button variant="solid" colorScheme="blue">
              {tel}
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </>
  );
}
