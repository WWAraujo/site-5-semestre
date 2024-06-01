import styled from 'styled-components'

const ContainerToggle = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 100%;
    grid-column: 3;
    grid-row: 1;
`

const ToggleButton = styled.input`
    position: absolute;
    width:0;
    height:0;
    margin:0;
    padding:0;
    opacity: 0;
    visibility: hidden;
`

const ToggleLabel = styled.label`
    display: flex;
    cursor: pointer;
    font-size: 1.5em;
    align-items: center;
    color: var(--toggle-bg);
    position: relative;
    
    &::before{
        content: "";
        width: 1.85em;
        height: 1em;
        border-radius: 1em;
        background-color: var(--toggle-bg);
        transition: background-color 250ms ease-in-out;
    }

    &::after{
        left: 0;
        content: "";
        width: 0.8em;
        height: 0.75em;
        border-radius: 1em;
        position: absolute;
        transform: translateX(0%);
        background-color: var(--toggle-fg);
        transition: background-color 250ms ease-in-out, transform 250ms ease-in-out;
        margin-top: .01em;
        margin-left: .13em;
    }

    ${ToggleButton}:checked + &::after {
        transform: translateX(100%);
      }
`

const TextToggle = styled.p`
    display: none;

    @media screen and (min-width: 768px){
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
        font-size: .7vw;
        color: var(--text-color-secundary);
    }
` 

export const Toggle = ({ handleChange, isChecked }) => {
    return (
        <ContainerToggle>
            <TextToggle>Dark</TextToggle>
            <ToggleButton type="checkbox"
                id="check"
                onChange={handleChange}
                checked={isChecked}
            />
            <ToggleLabel htmlFor="check"></ToggleLabel>
            <TextToggle>Light</TextToggle>
        </ContainerToggle>
    )
}