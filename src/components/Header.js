import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto:kkasongojunior@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/kabelokasongo",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/kabelo-kasongo/",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY.current) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
  position="fixed"
  top={0}
  left={0}
  right={0}
  transform={scrollDirection === "up" ? "translateY(0)" : "translateY(-200px)"}
  transition="transform 0.5s cubic-bezier(0.4, 0.0, 0.2, 1)" // Smoother transition
  backgroundColor="#18181b"
  zIndex={1000}
>
  <Box color="white" maxWidth="1280px" margin="0 auto">
    <HStack
      px={16}
      py={4}
      justifyContent="space-between"
      alignItems="center"
    >
      {/* Social Media Links */}
      <nav>
        <HStack spacing={4}>
          {socials.map((social, index) => (
            <Link
              key={index}
              href={social.url}
              isExternal
              aria-label={social.icon.iconName}
            >
              <FontAwesomeIcon icon={social.icon} size="2x" />
            </Link>
          ))}
        </HStack>
      </nav>

      {/* Navigation Links */}
      <nav>
        <HStack spacing={8}>
          <Link onClick={handleClick("projects")} cursor="pointer">
            Projects
          </Link>
          <Link onClick={handleClick("contactme")} cursor="pointer">
            Contact Me
          </Link>
        </HStack>
      </nav>
    </HStack>
  </Box>
</Box>
  );
};

export default Header;