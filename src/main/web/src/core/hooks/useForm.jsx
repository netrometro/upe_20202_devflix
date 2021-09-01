import {useCallback, useState} from 'react'

/**
 *
 * @param {{}} initialValues
 * @returns {[{}, {updateField: (field: string, value: string) => void, getFieldProperties: (field: string) => {value: string, onChange: () => void}, cleanUp: () => void}]}
 */
const useForm = (initialValues) => {
  const [fields, setFields] = useState(initialValues)

  const updateField = useCallback(
    (field, value) => {
      if (!Object.keys(fields).find((e) => e === field)) {
        throw new Error('Please use a valid field value')
      }

      return setFields({...fields, [field]: value})
    },
    [fields],
  )

  const getFieldProperties = useCallback(
    (field) => {
      return {
        value: fields[field],
        onChange: (event) => updateField(field, event.target.value),
      }
    },
    [fields, updateField],
  )

  const cleanUp = useCallback(() => setFields(initialValues), [initialValues])

  return [{fields}, {updateField, getFieldProperties, cleanUp}]
}

export default useForm
