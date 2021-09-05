import {Select as ChakraSelect, Text, Stack} from '@chakra-ui/react'
import { useTheme } from 'core/hooks';

const Select = ({items, defaultValue, label, ...props}) => {
  const {colors} = useTheme();
  const renderOptionElement = ({value, label}, index) => (
    <option value={value} key={index} style={{backgroundColor: colors.background}} >
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
