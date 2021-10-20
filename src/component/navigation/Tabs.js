import React, {useState} from 'react'
import styled, {css} from 'styled-components'
import {gray} from 'open-color'
import Tab from "./Tab"

const TabList = styled.div`
    display: flex;
    overflow: scroll;

    ${props => props.fit && css`
        div{
            flex: 1;
        }
    `}
    border-bottom: 1px solid ${gray[2]};
    ::-webkit-scrollbar{
        display: none;
    }
`

function Tabs ({ fit, tabs }) {
    const [currentTab, setCurrentTab] = useState(0);
    return(
        <>
            <TabList fit={fit}>
                {tabs.map(tab=>(
                    <Tab 
                        key={tab.index}
                        label={tab.label}
                        selected={tab.index === currentTab && true}
                        onClick={() => setCurrentTab(tab.index)}
                    />
                ))}
            </TabList>
            {tabs[currentTab].contents}
        </>
    )
}

Tabs.defaultProps={
    fit: false,
    tabs: [{
        label: 'Tab1',
        index: 0,
        contents: 'contents',
    }]
}

export default React.memo(Tabs)
