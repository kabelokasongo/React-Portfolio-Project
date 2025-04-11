import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Kabelo!";
const bio1 = "A frontend developer from Botswana";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading, Text, and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4}>
      {/* Avatar */}
      <Avatar size="2xl" src="https://i.pravatar.cc/150?img=7" />

      {/* Greeting */}
      <Heading as="h1" size="xl" color="white">
        {greeting}
      </Heading>

      {/* Bio */}
      <Text fontSize="lg" color="white">
        {bio1}
      </Text>
      <Text fontSize="lg" color="white">
        {bio2}
      </Text>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;