import { useState } from "react";

function useInput({
    defaultValue,
    validationFn,
}) {
    const [value, setValue] = useState(defaultValue)
    const [isEdited, setIsEdited] = useState(false)

    const valueIsvalid = validationFn(value)
    console.log('value', valueIsvalid)

    function handleChange(event) {
        setValue(event.target.value)
    }

    function handleInputBlur() {
        setIsEdited(true)
    }

    return {
        value,
        hasError: isEdited && !valueIsvalid,
        handleChange,
        handleInputBlur
    }
}

export default useInput;