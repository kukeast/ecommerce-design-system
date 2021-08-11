import React from 'react'

function Option ({ label, value, disabled }) {
    return(
        <option value={value} disabled={disabled}>{label}</option>
    )
}

Option.defaultProps = {
    label: "Option",
    value: "value",
}

export default React.memo(Option)
