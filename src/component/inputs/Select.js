import React from 'react'
import styled, {css} from 'styled-components'
import {gray, red, black} from 'open-color'
import { Icon16 } from '../icon/Icon'


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
function Select ({ children, name, disabled, error, defaultValue, onChange, ...rest }) {
    return(
        <Wrapper disabled={disabled} error={error}>
            <SelectElem
                name={name}
                disabled={disabled}
                defaultValue={defaultValue}
                onChange={onChange}
                {...rest}
            >
                {children}
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
    error : false
}

export default React.memo(Select)
