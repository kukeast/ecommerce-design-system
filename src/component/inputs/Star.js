import React from 'react'
import styled from 'styled-components'
import {gray, yellow} from 'open-color'
import {Icon24} from '../icon/Icon'

const StarElem = styled.span`
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    & + & {
        margin-left: 0.4rem;
    }
`

function Star ({active, onClick, size, ...rest}) {
    return(
        <StarElem onClick={onClick} {...rest}>
            <Icon24
                width={size}
                height={size}
                fill={active ? yellow[4] : gray[2]} 
                icon="IcoStar"
            />
        </StarElem>
    )
}

Star.defaultProps = {
    size: '32',
    active: false,
}

export default React.memo(Star)
