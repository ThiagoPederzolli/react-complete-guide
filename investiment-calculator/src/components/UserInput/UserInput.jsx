import { useState } from "react";

function UserInput({ type, name, label, updateInvestments }) {
    const [value, setValue] = useState(0);
    function handleChange(value) {
        setValue(value);
        updateInvestments(prevInvestments => ({
            ...prevInvestments,
            [name]: +value
        }));
    }
    return (
        <p>
            <label htmlFor={name}>{label}</label>
            <input
                value={value}
                type="number"
                onChange={(event) => handleChange(event.target.value)}
            />
        </p>

    )
}

export default UserInput;