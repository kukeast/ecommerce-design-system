import React from 'react'
import styled, { css } from 'styled-components'
import { darken } from 'polished'
import { COLOR } from '../../constants/color';

const ChipElem = styled.div`
    display: inline-flex;
    align-items: center;
    height: 3.4rem;

    font-size: 1.5rem;

    border-radius: 1.7rem;
    padding: 0 1.2rem;
    ${props => props.selected ? css`
        background-color: ${props.theme.primary};
        color: ${COLOR.primary.color};
        :active{
            background-color: ${darken(0.05, props.theme.primary)};
        }
    ` : css`
        background-color: ${COLOR.mono.background};
        color: ${COLOR.mono.color};
        :active{
            background-color: ${darken(0.05, COLOR.mono.background)};
        }
    `}
    & + & {
        margin-left: 0.8rem;
    }
    cursor: pointer;
`

function Chip ({label, selected, onClick, ...rest}) {
    return(
        <ChipElem 
            selected={selected}
            onClick={onClick}
            {...rest}
        >
            {label}
        </ChipElem>
    )
}

Chip.defaultProps = {
    label: "Chip",
    selected: false,
}


export default React.memo(Chip)
