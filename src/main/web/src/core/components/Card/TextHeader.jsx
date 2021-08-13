import { Box, Text } from "@chakra-ui/react";
import { useTheme } from "core/hooks";

const CardTextHeader = ({
  children,
  fontColor,
  bold,
  textAlign = "center",
  fontSize,
  ...props
}) => {
  const { colors } = useTheme();

  return (
    <Box p={4} {...props}>
      <Text
        color={fontColor ?? colors.primary}
        textAlign={textAlign}
        style={bold && { fontWeight: "bold" }}
        fontSize={fontSize}
      >
        {children}
      </Text>
    </Box>
  );
};

export default CardTextHeader;
