import logo from '../../img/logo-escuro.png'
import styled from 'styled-components'

const Logo = styled.img`
width: 100%;
height: 100%;
object-fit: contain;

`

function LogoArteVieira(){
    return(
        <Logo src={logo} alt="Logo da Arte Vieira" />
    )
}

export default LogoArteVieira;