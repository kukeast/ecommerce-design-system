import React from 'react'
import styled from 'styled-components'
import {gray, black, white} from 'open-color'
import {Icon16} from '../icon/Icon'

const Wrapper = styled.div`
    & + & {
        margin-top: 1.2rem;
    }
`

const Input = styled.input`
    display: none;
    & + label span{
        display: inline-flex;
        align-items: center;
        justify-content: center;  
        width: 2rem;
        height: 2rem;

        margin-right: 0.8rem;
        border-radius: 0.6rem;

        background-color: ${gray[3]};
        background-repeat: no-repeat;
        background-position: center;
        svg{
            display: none;
        }
    }
    &:checked + label span{
        background-color: ${props => props.theme.primary};
        svg{
            display: inline-block;
        }
    }
    &:disabled{
        & + label{
            color: ${gray[3]};
            span{
                background-color: ${gray[1]};
            }
        }
        &:checked + label span{
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

    cursor: pointer;
`

function Checkbox ({label, disabled, defaultChecked, name, value, onChange, ...rest}) {
    return(
        <Wrapper>
            <Input
                type="checkbox"
                id={value}
                name={name}
                value={value}
                defaultChecked={defaultChecked}
                disabled={disabled}
                onChange={onChange}
                {...rest}
            />
            <Label htmlFor={value}>
                <span>
                    <Icon16
                        width="14"
                        height="14"
                        fill={white} 
                        icon="IcoCheck"
                    />
                </span>
                {label}
            </Label>
        </Wrapper>
    )
}

Checkbox.defaultProps = {
    label: "Checkbox",
    name: "name",
    value: "value",
    disabled: false,
}

export default React.memo(Checkbox)
