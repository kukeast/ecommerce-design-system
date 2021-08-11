import React from 'react'
import styled, {css} from 'styled-components'
import {gray} from 'open-color'

const TabElem = styled.div`
    font-size: 1.5rem;
    font-weight: 300;
    line-height: 150%;
    text-align: center;
    color: ${gray[6]};
    margin: 0;
    padding: 1rem 0.8rem;
    cursor: pointer;
    ${props => props.selected && css`
        font-weight: 500;
        border-bottom: 0.2rem solid ${props => props.theme.primary};
        color: ${props => props.theme.primary};
    `}

    & + &{
        margin-left: 1rem;
    }
`

function Tab ({label, selected, onClick, ...rest}) {
    return(
        <TabElem
            selected={selected}
            onClick={onClick}
            {...rest}
        >
            {label}
        </TabElem>
    )
}

export default Tab
