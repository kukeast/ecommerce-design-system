import React, { useState } from 'react'
import styled from 'styled-components'
import {gray} from 'open-color'
import BottomBarAction from './BottomBarAction'

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;

    border-top: 1px solid ${gray[2]};
    font-size: 1.2rem;
`


function BottomBar ({bottomBarActions, defaultSeleted}) {
    const [select, setSelected] = useState(defaultSeleted)
    return(
        <Wrapper>
            {bottomBarActions.map((bottomBarAction, index) => (
                <BottomBarAction
                    icon={bottomBarAction.icon}
                    label={bottomBarAction.label}
                    active={select === index && true}
                    onClick={()=>setSelected(index)}
                    key={index}
                />
            ))}
        </Wrapper>
    )
}

BottomBar.defaultProps={
    bottomBarActions: [{
        label: 'Menu',
        icon: 'IcoStar',
    }],
    defaultSeleted: 0,
}

export default React.memo(BottomBar)
