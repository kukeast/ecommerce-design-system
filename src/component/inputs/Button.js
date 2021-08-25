import React from 'react'
import styled, {css} from 'styled-components'
import { darken, lighten } from 'polished';
import {gray, red, white} from 'open-color'

const VARIANT = {
    primary : {
        background: gray[9],
        color: white
    },
    mono : {
        background: gray[2],
        color: gray[9]
    },
    warnning : {
        background: red[5],
        color: white
    },
    text : {
        background: white,
        color: gray[9]
    }
    
}

const SIZE = {
    large : {
        height : '60px',
    },
    medium : {
        height : '52px',
    },
    small : {
        height : '46px',
    }
}

const SHAPE = {
    square : {
        borderRadius : '0',
    },
    rounded : {
        borderRadius : '16px',
    },
    pill : {
        borderRadius : '30px',
    }
}

const sizeStyles = css`
    height : ${props => SIZE[props.size].height};
`

const shapeStyles = css`
    border-radius : ${props => SHAPE[props.shape].borderRadius};
    ${props => props.fullWidth && css`
        width: 100%;
    `}
`

const colorStyles = css`
    ${({ theme, variant }) => {
        var background = VARIANT[variant].background
        var fontColor = VARIANT[variant].color
        const primaryColor = theme['primary']

        if(variant === 'primary'){
            background = primaryColor
        }else if(variant === 'text'){
            fontColor = primaryColor
        }
        return css`
            background: ${background};
            color: ${fontColor};
            &:active {
                background: ${darken(0.05, background)};
            }
            &:disabled{
                background: ${gray[2]};
                color: ${white};
            }
            ${props => props.outline && css`
                border: 0.1rem solid ${background};
                background: ${white};
                color: ${background};
                &:active {
                    background: ${lighten(0.2, background)};
                }
                &:disabled{
                    background: ${white};
                    border: 0.1rem solid ${gray[3]};
                    color: ${gray[3]};
                }
            `}
        `
    }}
`

const ButtonElem = styled.button`
    display: inline-flex;
    gap: 0.6rem;
    align-items: center;
    justify-content: center;

    border: none;
    box-sizing: border-box;
    padding: 0 1.6rem;

    font-size: 1.6rem;
    font-weight: 500;
    color: white;

    outline: none;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    
    ${sizeStyles}
    ${colorStyles}
    ${shapeStyles} 
`

function Button({ children, variant, type, size, shape, outline, disabled, fullWidth, onClick, ...rest }) {
    return (
        <ButtonElem 
            variant={variant} 
            type={type}
            size={size} 
            shape={shape}
            outline={outline}
            fullWidth={fullWidth}
            disabled={disabled}
            {...rest}
        >
            {children}
        </ButtonElem>
    )
}

Button.defaultProps = {
    type: 'button',
    variant: 'primary',
    size: 'medium',
    shape: 'rounded',
    outline: false,
    fullWidth: false,
    disabled: false,
    children: "Button"
}

export default React.memo(Button)
