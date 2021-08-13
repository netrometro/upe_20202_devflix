import { Text } from "@chakra-ui/react";

const CardTextBody = ({
  children,
  bold = true,
  fontSize = 50,
  textAlign = "center",
  ...props
}) => {
  return (
    <Text
      textAlign={textAlign}
      fontSize={fontSize}
      style={bold && { fontWeight: "bold" }}
      {...props}
    >
      {children}
    </Text>
  );
};

export default CardTextBody;
