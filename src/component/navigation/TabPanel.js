import React from 'react'
import styled from 'styled-components'

const PanelElem = styled.div``

function TabPanel ({children, index, selected}) {
    return(
        <PanelElem
            index={index}
            selected={selected}
        >
            {children}
        </PanelElem>
    )
}

export default TabPanel
