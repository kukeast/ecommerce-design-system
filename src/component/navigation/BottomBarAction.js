import React from 'react'
import styled, {css} from 'styled-components'
import {gray} from 'open-color'
import { Icon24 } from '../icon/Icon'

const Wrapper = styled.div`
    flex: 1;
    display: inline-block;
    text-align: center;
    ${ props => props.active ? css`
        svg{
            fill: ${props => props.theme.primary};
        }
        p{
            color: ${props => props.theme.primary};
        }
    `: css`
        svg{
            fill: ${gray[4]};
        }
        p{
            color: ${gray[5]};
        }
    `}
`
const Label = styled.p`
    text-align: center;
    font-weight: 400;
    margin: 0;
    line-height: 1.5rem;
`

function BottomBarAction ({ label, icon, active, onClick, ...rest}) {
    return(
        <Wrapper 
            active={active}
            onClick={onClick} 
            {...rest}
        >
            <Icon24
                width="24"
                height="24"
                icon={icon}
            />
            <Label>{label}</Label>
        </Wrapper>
    )
}

BottomBarAction.defaultProps={
    label: '',
    icon: '',
    active: false,
}

export default React.memo(BottomBarAction)
