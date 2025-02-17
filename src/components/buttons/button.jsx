import PropTypes from "prop-types";
import { ButtonStyle } from "../../assets/styles/button-styles";

const Button = ({ onClick, isDisabled }) => {
    return (
        <ButtonStyle onClick={onClick} disabled={isDisabled}>
            {isDisabled ? "Todos os Pokémons carregados" : "Carregar mais"}
        </ButtonStyle>
    );
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    isDisabled: PropTypes.bool
};

export default Button;