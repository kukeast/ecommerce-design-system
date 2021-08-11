import React from 'react'
import styled from 'styled-components'
import {gray, red, black} from 'open-color'

const FormElem = styled.form`
    & + &{
        margin-top: 2.4rem;
    }
    font-size: 1.4rem;
`

const Label = styled.label`
    display: inline-block;
    margin-bottom: 0.8rem;
    color: ${gray[7]};
`

const ErrorMessage = styled.p`
    margin: 0.8rem 0 0;
    color: ${red[5]};
`
const HelpMessage = styled.p`
    margin: 0.8rem 0 0; 
    color: ${black};
`

function Form ({ label, errorMessage, helpMessage, children, ...rest}) {
    return(
        <FormElem {...rest}>
            <Label>{label}</Label>
            {children}
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            {helpMessage && <HelpMessage>{helpMessage}</HelpMessage>}
        </FormElem>
    )
}

Form.defaultProps = {
    label: "label",
    errorMessage: "",
    helpMessage: "",
}

export default React.memo(Form)
