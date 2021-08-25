import React from 'react'
import styled, {css} from 'styled-components'
import {gray, red, black} from 'open-color'
import { Icon16 } from '../icon/Icon'
import Option from "./Option"


const Wrapper = styled.div`
    display: flex;
    position: relative;
    align-items: center;

    border-radius: 1.2rem;
    border: 0.1rem solid ${gray[2]};

    overflow: hidden;
    cursor: pointer;
    ${props => props.disabled && css`
        background-color: ${gray[0]};
    `}
    ${props => props.error && css`
        border: 1px solid ${red[5]};
    `}
    :focus-within{
        border: 0.1rem solid ${props => props.theme.primary};
    }
    svg{
        z-index: 0;
        position: absolute;
        right: 1.6rem;
    }
`

const SelectElem = styled.select`
    flex: 1;
    font-size: 1.6rem;
    font-weight: 300;
    color: ${black};

    border: 0;
    padding: 1.6rem;
    
    background: none;

    outline: none;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    ::-ms-expand{ display: none; }
    z-index: 1;

`
function Select ({ options, name, disabled, error, onChange, ...rest }) {
    const defaultValue = options.filter(option => option.defaultValue)[0].value
    return(
        <Wrapper disabled={disabled} error={error}>
            <SelectElem
                name={name}
                disabled={disabled}
                defaultValue={defaultValue}
                onChange={onChange}
                {...rest}
            >
                {options.map((option, index)=>(
                    <Option
                        key={index}
                        value={option.value}
                        label={option.label}
                        disabled={option.defaultValue ? true : false}
                    />
                ))}
            </SelectElem>
            <Icon16
                width="16"
                height="16"
                color={gray[8]}
                icon="IcoChevronDown16"
            />
        </Wrapper>
    )
}

Select.defaultProps = {
    name : "Select", 
    disabled : false, 
    error : false,
    options: [{
        value: 'value',
        label: 'option',
        defaultValue: false,
    }],
}

export default React.memo(Select)
