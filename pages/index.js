import {
  Button,
  Divider,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/core";

import BlogPost from "../components/BlogPost";
import Container from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import React from "react";
import Subscribe from "../components/Subscribe";
import Timeline from "../components/Timeline";
import { frontMatter as monorepo } from "./blog/monorepo-lerna-yarn-workspaces.mdx";
import { frontMatter as stripeDesign } from "./blog/how-stripe-designs-beautiful-websites.mdx";
import { frontMatter as styleGuides } from "./blog/style-guides-component-libraries-design-systems.mdx";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: "gray.700",
    dark: "gray.400",
  };
  const borderColor = {
    light: "gray.400",
    dark: "gray.600",
  };
  const name = "Luke Pierce";

  return (
    <Container>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
      >
        <div className="flex mb-4">
          <div className="w-1/2">
            <div className="text-3xl font-bold">Hi I’m {name},</div>
            <div className="text-xl text-gray-600">
              a web developer <br /> and UI/UX designer
            </div>
            <br />
            <a
              onClick={onOpen}
              className="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Grab My Resume
            </a>
            {/* <a
              className="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              href="pierce-resume-2019.pdf"
              download
            >
              Grab My Resume
            </a> */}
          </div>
          <div className="w-1/2">
            <div className="text-sm">
              I'm a Colorado based software engineer, full-stack developer and
              front-end designer and have been working in this field the past 3
              years. I'm experienced in HTML5, JS, CSS3 and modern libraries in
              React, NodeJS and Next.js.
              <br />
              <br />
              Currently working full-time as a Software Engineer & front-end dev
              at Raytheon, a well known defense contractor.
            </div>
          </div>
        </div>
        <br />
        <br />
        <Divider borderColor={borderColor[colorMode]} my={8} w="100%" />;
        {/* <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
          mt={8}
        >
          <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
            Most Popular
          </Heading>
          <BlogPost {...styleGuides} />
          <BlogPost {...stripeDesign} />
          <BlogPost {...monorepo} />
        </Flex> */}
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
            Projects
          </Heading>
          <ProjectCard
            title="SpeedyNote"
            description="A free website application for sending fast, secure & private Notes with Next.js, Tailwind, and React"
            href="https://speedynote.app/"
            icon="react2025"
          />
          <ProjectCard
            title="Milehigh Lawncare"
            description="A simple local landscaping application built by me using NodeJS and Bulma and hosted on Netlify/Cloudflare"
            href="https://www.milehighlawncare.com/"
            icon="jamstackfns"
          />
          <ProjectCard
            title="LP Photography"
            description="I am into photography, I had purchased a Nikon D3400 camera and I wanted to share my work on a website so people could easily view my work. This is my photography portfolio. "
            href="https://lpphotography.herokuapp.com/home.html"
            icon="nextjs"
          />
        </Flex>
        <Timeline />
        {/* <Subscribe /> */}
      </Stack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{name} Resume 2020</ModalHeader>
          <ModalCloseButton />
          <ModalFooter>
            <Button className="mx-2" variant="ghost">
              <a href="pierce-resume-2019.pdf" download>
                Save as PDF
              </a>
            </Button>
            <Button
              className="mx-2"
              variantColor="blue"
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Index;
