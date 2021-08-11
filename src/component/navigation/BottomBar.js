import React from 'react'
import styled from 'styled-components'
import {gray} from 'open-color'

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;

    border-top: 1px solid ${gray[2]};
    font-size: 1.2rem;
`


function BottomBar ({children}) {
    return(
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default React.memo(BottomBar)
