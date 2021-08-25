import { useState } from "react"
import styled, { ThemeProvider } from "styled-components"

import { white } from 'open-color'
import { Icon16 } from './component/icon/Icon'

import Button from "./component/inputs/Button"
import Checkbox from "./component/inputs/Checkbox"
import Radio from "./component/inputs/Radio"
import Chip from "./component/inputs/Chip"
import Switch from "./component/inputs/Switch"
import Star from "./component/inputs/Star"
import Form from "./component/inputs/Form"
import TextField from "./component/inputs/TextField"
import TextArea from "./component/inputs/TextArea"
import Select from "./component/inputs/Select"
import GlobalFonts from "./constants/font/font"
import BottomBar from "./component/navigation/BottomBar"
import Anchor from "./component/navigation/Anchor"
import Tabs from "./component/navigation/Tabs"

const Wrapper = styled.div`
    width: 100%;
    max-width: 480px;
    margin: 30px auto;
`
const Title = styled.h1`
    margin-top: 60px;
`
const SwitchPara = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.6rem;
    margin: 1.6rem 0;
`

const theme={
    primary : '#5C7CFA'
}
function onon (e){
    console.log(e)
}

function App () {
    const [chip, setChip] = useState("all")
    const [activeStar, setActiveStar] = useState(3)
    const stars = [1,2,3,4,5]
    const [toggle, setToggle] = useState("false")
    const bottomBarActions = [
        {
            label: "Home",
            icon: "IcoStar",
        },
        {
            label: "Home",
            icon: "IcoStar",
        },
        {
            label: "Home",
            icon: "IcoStar",
        },
    ]
    const options =[
        {
            value: 'value1',
            label: 'placeholder',
            defaultValue: true,
        },
        {
            value: 'value2',
            label: 'label2',
        },
        {
            value: 'value3',
            label: 'label3',
        }
    ]

    const tabs = [
        {
            label: 'Tab1',
            index: 0,
            contents: 'tab1',
        },
        {
            label: 'Tab2',
            index: 1,
            contents: 'Tab22',
        },
        {
            label: 'Tab3',
            index: 2,
            contents: '3333',
        }
    ]
    return(
        <ThemeProvider theme={theme}>
            <GlobalFonts/>
            <Wrapper>
                <Title>Button Size</Title>
                <Button size="large">Large</Button>
                <Button>Medium</Button>
                <Button size="small">Small</Button>
            </Wrapper>
            <Wrapper>
                <Title>Button Variant</Title>
                <Button >Primary</Button>
                <Button variant="warnning">Warnning</Button>
                <Button variant="mono">Mono</Button>
                <Button variant="text">Text</Button>
                <Button disabled>Disabled</Button>
            </Wrapper>
            <Wrapper>
                <Title>Button Shape</Title>
                <Button>Rounded</Button>
                <Button shape="square">Square</Button>
                <Button shape="pill">Pill----</Button>
            </Wrapper>
            <Wrapper>
                <Title>Ounline Button</Title>
                <Button outline>Primary</Button>
                <Button variant="warnning" outline>Warnning</Button>
                <Button disabled outline>Disabled</Button>
            </Wrapper>
            <Wrapper>
                <Title>FullWidth Button</Title>
                <Button shape="square" fullWidth size="large">FullWidth Button Large</Button>
                <Button shape="square" fullWidth variant="mono" onClick={onon}>FullWidth Button Mono</Button>
                <Button shape="square" fullWidth outline size="small">FullWidth Outline Button Small</Button>
                <Button fullWidth>
                    <Icon16
                        width="18"
                        height="18"
                        fill={white} 
                        icon="IcoCheck"
                    />
                    With Icon
                </Button>
            </Wrapper>
            <Wrapper>
                <Title>Checkbox</Title>
                <Checkbox label="Default" value="a" onChange={onon}/>
                <Checkbox label="Checked" value="b" defaultChecked/>
                <Checkbox label="Disabled" disabled/>
                <Checkbox label="Disabled Checked" defaultChecked disabled/>
            </Wrapper>
            <Wrapper>
                <Title>Radio Button</Title>
                <Radio label="Default" value="aa" name="dd" onChange={onon}/>
                <Radio label="Checked" value="bb" name="dd" defaultChecked onChange={onon}/>
                <Radio label="Disabled" value="cc" name="gg" disabled/>
                <Radio label="Disabled Checked" value="dd" name="gg" defaultChecked disabled/>
            </Wrapper>
            <Wrapper>
                <Title>Chip</Title>
                <Chip 
                    label="all"
                    selected={chip === "all"}
                    onClick={() => setChip("all")}
                />
                <Chip
                    label="top"
                    selected={chip === "top"}
                    onClick={() => setChip("top")}
                />
                <Chip
                    label="bottom"
                    selected={chip === "bottom"} 
                    onClick={() => setChip("bottom")}
                />
                <Chip/>
            </Wrapper>
            <Wrapper>
                <Title>Star</Title>
                { 
                    stars.map(star => (
                        <Star 
                            key={star}
                            active={star < activeStar + 1 && true}
                            onClick={() => setActiveStar(star)}
                            size="32"
                        />
                    ))
                }
            </Wrapper>
            <Wrapper>
                <Title>Switch</Title>
                <SwitchPara>
                    Active
                    <Switch active={toggle} onClick={() => setToggle(!toggle)}/>
                </SwitchPara>
                <SwitchPara>
                    Inactive
                    <Switch active={!toggle} onClick={() => setToggle(!toggle)}/>
                </SwitchPara>
                <SwitchPara>
                    Disabled
                    <Switch disabled/>
                </SwitchPara>
                <SwitchPara>
                    Disabled Active
                    <Switch disabled active/>
                </SwitchPara>
            </Wrapper>
            <Wrapper>
                <Title>TextField</Title>
                <Form label="Default">
                    <TextField
                        placeholder="Placeholder"
                        name="name"
                    />
                </Form>
                <Form label="Disabled" helpMessage="HelpMessage">
                    <TextField
                        placeholder="Placeholder"
                        name="name"
                        disabled={true}
                    />
                </Form>
                <Form label="Error" errorMessage="ErrorMessage">
                    <TextField
                        placeholder="Placeholder"
                        defaultValue="Jone"
                        name="name"
                        error={true}
                    />
                </Form>
            </Wrapper>
            <Wrapper>
                <Title>TextArea</Title>
                <Form label="Default">
                    <TextArea
                        placeholder="Placeholder"
                        name="name"
                        rows="5"
                        onChange={onon}
                    />
                </Form>
                <Form label="Disabled">
                    <TextArea name="name" disabled/>
                </Form>
            </Wrapper>
            <Wrapper>
                <Title>Select</Title>
                <Form label="Default">
                    <Select name="name" onChange={onon} options={options}/>
                </Form>
                <Form label="Disabled">
                    <Select name="name" disabled options={options}/>
                </Form>
                <Form label="Error">
                    <Select name="name" error options={options}/>
                </Form>
            </Wrapper>
            <Wrapper>
                <Title>BottomBar</Title>
                <BottomBar bottomBarActions={bottomBarActions} defaultSeleted={0}/>
            </Wrapper>
            <Wrapper>
                <Title>Anchor</Title>
                <Anchor href="/" target="_blank">Anchor</Anchor>
            </Wrapper>
            <Wrapper>
                <Title>Tabs</Title>
                <Tabs tabs={tabs}/>
            </Wrapper>
            <Wrapper>
                <Tabs tabs={tabs} fit={true}/>
            </Wrapper>
        </ThemeProvider>
    )
}

export default App
