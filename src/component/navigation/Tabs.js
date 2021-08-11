import React from 'react'
import styled, {css} from 'styled-components'
import {gray} from 'open-color'

const Wrapper = styled.div`
    display: flex;
    overflow: scroll;

    ${props => props.fit && css`
        p{
            flex: 1;
        }
    `}
    border-bottom: 1px solid ${gray[2]};
    ::-webkit-scrollbar{
        display: none;
    }
`


function Tabs ({ fit, children }) {
    return(
        <Wrapper fit={fit}>
            {children}
        </Wrapper>
    )
}

export default Tabs
