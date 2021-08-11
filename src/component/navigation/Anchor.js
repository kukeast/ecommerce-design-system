import React from 'react'
import styled from 'styled-components'
import {gray} from 'open-color'

const AnchorElem = styled.a`
    font-size: 1.5rem;
    color: ${gray[6]};
    :active{
        color: ${props => props.theme.primary};
    }
`

function Anchor ({href, target, children}) {
    return(
        <AnchorElem
            href={href}
            target={target}
        >
            {children}
        </AnchorElem>
    )
}
Anchor.defaultProps={
    href: '/',
    target: '',
}

export default React.memo(Anchor)
