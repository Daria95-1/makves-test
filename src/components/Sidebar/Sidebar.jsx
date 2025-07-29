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
import { motion } from 'framer-motion';

const Sidebar = ({ color, toggleTheme }) => {
  const [isOpened, setIsOpened] = useState(true);
  const [activePath, setActivePath] = useState('/sales');

  const goToRoute = (path) => {
    setActivePath(path);
    console.log(`Going to ${path}`);
  };

  return (
    <SidebarContainer>
      <SidebarInnerContainer
        as={motion.div}
        layout
        animate={{ width: isOpened ? 220 : 72 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      >
        <Logo isOpened={isOpened}>
          <img src={logo} alt="Logo" />
          <span>TensorFlow</span>
        </Logo>

        <ToggleButton
          onClick={() => setIsOpened(!isOpened)}
          isOpened={isOpened}
        >
          <FontAwesomeIcon icon={isOpened ? 'angle-left' : 'angle-right'} />
          <ToggleTooltip isOpened={isOpened}>
            {isOpened ? 'SHRINK' : 'EXPAND'}
          </ToggleTooltip>
        </ToggleButton>

        <ThemeToggleButton currentTheme={color} toggleTheme={toggleTheme} isOpened={isOpened} />

        <NavSection>
          {routes.map((route, index) => (
            <motion.div layout="position" key={route.title}>
              <NavItem
                onClick={() => goToRoute(route.path)}
                active={activePath === route.path}
                isOpened={isOpened}
                index={index}
              >
                <div className="icon">
                  <FontAwesomeIcon icon={route.icon} />
                </div>
                <div className="label">{route.title}</div>
                {!isOpened && <MenuTooltip>{route.title}</MenuTooltip>}
              </NavItem>
            </motion.div>
          ))}
        </NavSection>

        <BottomSection>
          {bottomRoutes.map((route, index) => (
            <motion.div layout="position" key={route.title}>
              <NavItem
                onClick={() => goToRoute(route.path)}
                active={activePath === route.path}
                isOpened={isOpened}
                index={routes.length + index}
              >
                <div className="icon">
                  <FontAwesomeIcon icon={route.icon} />
                </div>
                <div className="label">{route.title}</div>
                {!isOpened && <MenuTooltip>{route.title}</MenuTooltip>}
              </NavItem>
            </motion.div>
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
