import React, { useState } from 'react'
import styled from 'styled-components'
import { Icon16 } from '../icon/Icon'
import {gray, black} from 'open-color'

const Wrapper = styled.div`
    border-top: 1px solid ${gray[2]};
    &:last-child{
        border-bottom: 1px solid ${gray[2]};
    }
`
const Title = styled.div`
    display: flex;
    padding: 2rem 1.6rem;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
`
const Label = styled.p`
    font-size: 1.5rem;
    color: ${black};
    margin: 0;
`


function Accordion ({label, defaultOpened, children}) {
    const [opened, setOpen] = useState(defaultOpened)
    return(
        <Wrapper>
            <Title onClick={() => setOpen(!opened)}>
                <Label>{label}</Label>
                <Icon16 
                    width='16'
                    height='16'
                    color={gray[6]}
                    icon={opened ? 'IcoChevronUp16' : 'IcoChevronDown16'}
                />
            </Title>
            {opened && children}
        </Wrapper>
    )
}

Accordion.defaultProps={
    label: 'accordion'
}

export default React.memo(Accordion)
