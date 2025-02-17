import { SwitchContainer, Switch, Toggle } from "../../assets/styles/theme-switch-style";
import { useTheme } from "../../assets/context/theme-context";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeSwitch = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <SwitchContainer onClick={toggleTheme}>
            <FaSun size={20} color={theme === "light" ? "#ffdd00" : "#777"} style={{marginRight: "5px"}} />
            <Switch theme={theme}>
                <Toggle theme={theme} />
            </Switch>
            <FaMoon size={20} color={theme === "dark" ? "#ffdd00" : "#777"} style={{marginLeft: "5px"}} />
        </SwitchContainer>
    );
};

export default ThemeSwitch;