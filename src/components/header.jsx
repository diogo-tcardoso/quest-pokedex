import ThemeSwitch from './theme-switch/theme-switch'
import '../assets/styles/css/header.css'
import logo from '../assets/img/pokedex-logo.png'
export const Header = () => {

    return (
        <>
            <header>
                <img src= { logo } alt="pokedex-logo"></img>
                <ThemeSwitch />
            </header>
        </>

    )
}