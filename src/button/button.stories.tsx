import React from "react"
import { Container, HStack, Stack } from "@chakra-ui/react"
import { Button } from "./Button"


export default {
  title: "Button",
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
}

export const basic = () => (
  <>
    <Button colorScheme="gray">Button</Button>
    <Button colorScheme="red">Button</Button>
    <Button colorScheme="green">Button</Button>
    <Button colorScheme="blue">Button</Button>
    <Button colorScheme="teal">Button</Button>
    <Button colorScheme="pink">Button</Button>
    <Button colorScheme="purple">Button</Button>
    <Button colorScheme="cyan">Button</Button>
    <Button colorScheme="orange">Button</Button>
    <Button colorScheme="yellow">Button</Button>
  </>
)