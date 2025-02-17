import ThemeSwitch from './theme-switch/theme-switch'
import '../assets/styles/css/header.css'
export const Header = () => {

    return (
        <>
            <header>
                <img src="../src/assets/img/pokedex-logo.png" alt="pokedex-logo"></img>
                <ThemeSwitch />
            </header>
        </>

    )
}