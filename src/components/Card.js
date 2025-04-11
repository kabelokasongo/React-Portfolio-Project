import { Heading, VStack, Image, Text, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      spacing={4}
      backgroundColor="white"
      borderRadius="md"
      boxShadow="md"
      overflow="hidden" // Ensures the image respects the card's border radius
      alignItems="flex-start"
      width="100%"
    >
      {/* Top: Image */}
      <Image
        src={imageSrc}
        alt={title}
        objectFit="cover"
        width="100%"
        height="300px" // Adjust height as needed
      />

      {/* Content */}
      <VStack spacing={4} padding={4} alignItems="flex-start" width="100%">
        {/* Title */}
        <Heading as="h3" size="md" color="black">
          {title}
        </Heading>

        {/* Description */}
        <Text color="gray.600">{description}</Text>

        {/* Bottom: See More and Arrow */}
        <HStack spacing={2} alignSelf="flex-start">
          <Text color="black" fontWeight="medium">
            See more
          </Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" style={{ color: "black" }} />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;