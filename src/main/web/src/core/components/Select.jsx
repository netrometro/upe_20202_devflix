import {Select as ChakraSelect, Text, Stack} from '@chakra-ui/react'

const Select = ({items, defaultValue, label, ...props}) => {
  const renderOptionElement = ({value, label}, index) => (
    <option value={value} key={index}>
      {label}
    </option>
  )

  const renderLabel = () => {
    return (
      label && (
        <Text fontSize="2xl" width="20%" fontWeight="bold">
          {label}
        </Text>
      )
    )
  }

  return (
    <Stack>
      {renderLabel()}
      <ChakraSelect {...props}>{items.map(renderOptionElement)}</ChakraSelect>
    </Stack>
  )
}

export default Select
