import React from 'react'
import styled from 'styled-components'
import {icons16, icons24 } from '../../constants/icons'

const StyledIcon = styled.svg`
    path{
        width: 100%;
    }
`
export function Icon24 ({ width, height, color, icon, ...rest }) {
    return(
        <StyledIcon
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill={color}
            viewBox="0 0 24 24"
            {...rest}
        >
            {icons24[icon]}
        </StyledIcon>
    )
}

export function Icon16 ({ width, height, color, icon, ...rest }) {
    return(
        <StyledIcon
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill={color}
            viewBox="0 0 16 16"
            {...rest}
        >
            {icons16[icon]}
        </StyledIcon>
    )
}

Icon16.defaultProps={
    width: '16',
    height: '16',
    color: '#222222',
    icon: 'IcoCheck',
}


Icon24.defaultProps={
    width: '24',
    height: '24',
    color: '#222222',
    icon: '',
}