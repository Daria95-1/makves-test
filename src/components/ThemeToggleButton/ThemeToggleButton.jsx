import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { ButtonStyle, TooltipWrapper, Tooltip, AnimatedLabel } from './ThemeToggleButton.styles';

export const ThemeToggleButton = ({ currentTheme, toggleTheme, isOpened }) => {
  const isDark = currentTheme === 'dark';
  const label = isDark ? 'Светлая тема' : 'Тёмная тема';

  return (
    <TooltipWrapper>
      <ButtonStyle onClick={toggleTheme}>
        <FontAwesomeIcon icon={isDark ? 'sun' : 'moon'} />
        <AnimatedLabel isOpened={isOpened}>{label}</AnimatedLabel>
      </ButtonStyle>
      {!isOpened && <Tooltip className="tooltip">{label}</Tooltip>}
    </TooltipWrapper>
  );
};

ThemeToggleButton.propTypes = {
  currentTheme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
  isOpened: PropTypes.bool.isRequired,
};
