import ThemeSwitch from './theme-switch/theme-switch'
import logo from '../assets/img/pokedex-logo.png'
import { HeaderContianer, Logo } from '../assets/styles/header-style'

export const Header = () => {

    return (
        <>
            <HeaderContianer>
                    <Logo src= { logo } alt="pokedex-logo" />
                    <ThemeSwitch />
            </HeaderContianer>
        </>

    )
}