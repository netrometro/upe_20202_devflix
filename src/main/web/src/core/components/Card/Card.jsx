import React from "react";
import { Box, Stack } from "@chakra-ui/react";

import { useTheme } from "core/hooks";

import CardTextBody from "./TextBody";
import CardTextHeader from "./TextHeader";

const Card = ({
  children,
  footer = () => <div />,
  header = () => <div />,
  bg,
  ...props
}) => {
  const { colors } = useTheme();

  return (
    <Stack>
      <Box bg={bg ?? colors.white} boxShadow="lg" rounded="md" {...props}>
        <Box height="20%">{header()}</Box>
        <Box minHeight="32" my="4" p={4}>
          {children}
        </Box>
        <Box height="20%">{footer()}</Box>
      </Box>
    </Stack>
  );
};

Card.TextBody = CardTextBody;
Card.TextHeader = CardTextHeader;

export default Card;
