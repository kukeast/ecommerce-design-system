import React from 'react'
import styled from 'styled-components'
import {gray, black, white} from 'open-color'

const Wrapper = styled.div`
    & + & {
        margin-top: 1.2rem;
    }
`

const Input = styled.input`
    display: none;
    & + label > span{
        display: inline-block;
        width: 2rem;
        height: 2rem;

        padding: 0.6rem;
        box-sizing: border-box;
        margin-right: 0.8rem;
        border-radius: 1rem;

        background-color: ${gray[3]};
        & > span{
            display: none;
        }
    }
    &:checked + label span{
        background-color: ${props => props.theme.primary};
        span{
            display: block;
            width: 0.8rem;
            height: 0.8rem;

            border-radius: 0.4rem;
            background-color: ${white};
        }
    }
    &:disabled{
        & + label{
            color: ${gray[3]};
            span{
                background-color: ${gray[1]};
            }
        }
        &:checked + label > span{
            background-color: ${props => props.theme.primary}44;
        }
    } 
    
`
const Label = styled.label`
    display: flex;
    align-items: center;

    font-size: 1.5rem;
    font-weight: 300;
    color: ${black};
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
`

function Radio ({label, disabled, defaultChecked, name, value, onChange, ...rest}) {
    return(
        <Wrapper>
            <Input
                type="radio"
                id={value}
                name={name}
                value={value}
                disabled={disabled}
                defaultChecked={defaultChecked}
                onChange={onChange}
                {...rest}
            />
            <Label htmlFor={value}>
                <span><span></span></span>
                {label}
            </Label>
        </Wrapper>
    )
}

Radio.defaultProps = {
    label: "Radio",
    name: "name",
    value: "value",
    defaultChecked: false,
    disabled: false,
}

export default React.memo(Radio)
