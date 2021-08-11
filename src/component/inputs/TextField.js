import React from 'react'
import styled, {css} from 'styled-components'
import {gray, red, black} from 'open-color'


const Wrapper = styled.div`
    display: flex;

    border-radius: 1.2rem;
    border: 0.1rem solid ${gray[2]};

    overflow: hidden;

    ${props => props.disabled && css`
        background-color: ${gray[0]};
    `}
    ${props => props.error && css`
        border: 1px solid ${red[5]};
    `}
    :focus-within{
        border: 0.1rem solid ${props => props.theme.primary};
    }
`

const InputElem = styled.input`
    flex: 1;
    font-size: 1.6rem;
    font-weight: 300;
    color: ${black};

    border: 0;
    padding: 1.6rem;
    outline: none;
    background: none;

    ::placeholder{
        color: ${gray[6]};
    }
`
function TextField ({ placeholder, defaultValue, name, disabled, error, onChange, ...rest }) {
    return(
        <Wrapper disabled={disabled} error={error}>
            <InputElem
                type="text"
                placeholder={placeholder}
                defaultValue={defaultValue}
                name={name}
                disabled={disabled}
                onChange={onChange}
                {...rest}
            />
        </Wrapper>
    )
}

TextField.defaultProps={
    placeholder: '',
    defaultValue: '',
    name: 'name',
    error: false,
    disabled: false,
}

export default React.memo(TextField)
