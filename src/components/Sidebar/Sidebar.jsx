import { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';
import {
  SidebarContainer,
  Logo,
  ToggleButton,
  NavItem,
  NavSection,
  BottomSection,
  SidebarInnerContainer,
  ToggleTooltip,
  MenuTooltip
} from './Sidebar.styles';
import { ThemeToggleButton } from '../ThemeToggleButton/ThemeToggleButton';
import { routes } from '../../constants/Routes';
import { bottomRoutes } from '../../constants/BottomRoutes';

const Sidebar = ({ color, toggleTheme }) => {
  const [isOpened, setIsOpened] = useState(true);
  const [activePath, setActivePath] = useState('/sales');

  const goToRoute = (path) => {
    setActivePath(path);
    console.log(`Going to ${path}`);
  };

  return (
    <SidebarContainer >
      <SidebarInnerContainer isOpened={isOpened}>
        <Logo isOpened={isOpened}>
          <img src={logo} alt="Logo" />
          <span>TensorFlow</span>

          <ToggleButton
            onClick={() => setIsOpened(!isOpened)}
            isOpened={isOpened}
          >
            <FontAwesomeIcon icon={isOpened ? 'angle-left' : 'angle-right'} />
            <ToggleTooltip isOpened={isOpened}>
              {isOpened ? 'SHRINK' : 'EXPAND'}
            </ToggleTooltip>
          </ToggleButton>
        </Logo>

        <ThemeToggleButton currentTheme={color} toggleTheme={toggleTheme} isOpened={isOpened} />

        <NavSection>
          {routes.map((route, index) => (
            <NavItem
              key={route.title}
              onClick={() => goToRoute(route.path)}
              active={activePath === route.path}
              isOpened={isOpened}
              index={index}
            >
              <FontAwesomeIcon icon={route.icon} />
              <span>{route.title}</span>
              {!isOpened && <MenuTooltip>{route.title}</MenuTooltip>}
            </NavItem>
          ))}
        </NavSection>

        <BottomSection>
          {bottomRoutes.map((route, index) => (
            <NavItem
              key={route.title}
              onClick={() => goToRoute(route.path)}
              active={activePath === route.path}
              isOpened={isOpened}
              index={routes.length + index}
            >
              <FontAwesomeIcon icon={route.icon} />
              <span>{route.title}</span>
              {!isOpened && <MenuTooltip>{route.title}</MenuTooltip>}
            </NavItem>
          ))}
        </BottomSection>
      </SidebarInnerContainer>
    </SidebarContainer>
  );
};

Sidebar.propTypes = {
  color: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default Sidebar;
