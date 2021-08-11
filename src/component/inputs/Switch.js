import React from 'react'
import styled, { css } from 'styled-components'
import {gray, white} from 'open-color'

const SwicthElem = styled.div`
    display: inline-flex;
    align-items: center;

    width: 4.8rem;
    height: 3rem;

    border-radius: 2.4rem;

    transition: 0.3s;
    cursor: pointer;
    ${props => props.active ? css`
        background-color: ${props.theme.primary};
        div{
            transform: translateX(1.8rem);
        }
        ${props => props.disabled && css`
            background-color: ${props.theme.primary}44;
        `}
    ` : css`
        background-color: ${gray[3]};
        div{
            transform: translateX(0rem);
        }
        ${props => props.disabled && css`
            background-color: ${gray[1]};
        `}
    `}

`
const Toggle = styled.div`
    width: 2.4rem;
    height: 2.4rem;

    margin: 0.3rem;
    border-radius: 1.2rem;

    background-color: ${white};
    transition: 0.3s;
`

function Switch ({ active, disabled, onClick, ...rest }) {
    return(
        <SwicthElem 
            active={active} 
            onClick={!disabled ? onClick : undefined}
            disabled={disabled}
            {...rest}
        >
            <Toggle/>
        </SwicthElem>
    )
}

Switch.defaultProps={
    active: false,
    disabled: false,
}

export default React.memo(Switch)
