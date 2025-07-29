import styled from 'styled-components';

export const SidebarContainer = styled.div`
  position: relative;
  border-radius: 12px;
  width: fit-content;
`;

export const SidebarInnerContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  color: ${({ theme: { text } }) => text};
  background: ${({ theme: { background } }) => background};
  border: 5px solid ${({ theme: { active } }) => active};
  border-radius: 12px;
  box-sizing: border-box;
  padding: 16px 8px;
  overflow: visible;
`;

export const Logo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 32px;
  width: ${({ isOpened }) => (isOpened ? '100%' : '60px')};

  img {
    width: 32px;
    margin-right: ${({ isOpened }) => (isOpened ? '12px' : '0')};
    transition: margin 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  span {
    display: inline-block;
    max-width: ${({ isOpened }) => (isOpened ? '200px' : '0')};
    opacity: ${({ isOpened }) => (isOpened ? 1 : 0)};
    white-space: nowrap;
    overflow: hidden;
    transition: max-width 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s ease;
  }
`;

export const ToggleTooltip = styled.div`
  position: absolute;
  left: 40px;
  white-space: nowrap;
  background: ${({ theme: { buttonActive } }) => buttonActive};
  color: ${({ theme: { text } }) => text};
  padding: 6px 12px;
  border-radius: 30px;
  font-size: 14px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s ease;
  z-index: 10;
`;

export const ToggleButton = styled.button`
  position: absolute;
  top: 20px;
  right: -16px;
  z-index: 100;
  width: 32px;
  height: 32px;
  background: ${({ theme: { buttonActive } }) => buttonActive};
  border: none;
  border-radius: 50%;
  color: ${({ theme: { text } }) => text};
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover ${ToggleTooltip} {
    opacity: 1;
    pointer-events: auto;
    transition-delay: 0.3s;
  }
`;

export const MenuTooltip = styled.div`
  position: absolute;
  left: 70px;
  white-space: nowrap;
  background: ${({ theme: { tooltip } }) => tooltip};
  color: ${({ theme: { textDefault } }) => textDefault};
  padding: 6px 12px;
  border-radius: 30px;
  font-size: 14px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s ease;
  z-index: 10;
`;

export const NavItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px 8px;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 6px;
  transition: background 0.4s ease, color 0.4s ease;

  background: ${({ active, theme: { active: activeColor } }) => (active ? activeColor : 'transparent')};
  color: ${({ active, theme: { textActive, text } }) => (active ? textActive : text)};

  &:hover {
    background: ${({ theme: { hover } }) => hover};
    color: ${({ theme: { textHover } }) => textHover};
  }

  &:hover ${MenuTooltip} {
    opacity: ${({ isOpened }) => (isOpened ? 0 : 1)};
    transition-delay: 0.3s;
  }

  .icon {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
  }

  .label {
    display: inline-block;
    width: 100%;
    max-width: ${({ isOpened }) => (isOpened ? '150px' : '0px')};
    overflow: hidden;
    white-space: nowrap;
    opacity: ${({ isOpened }) => (isOpened ? 1 : 0)};
    transform: translateX(${({ isOpened }) => (isOpened ? '0' : '-8px')});
    transition:
      max-width 0.5s cubic-bezier(0.4, 0, 0.2, 1),
      opacity 0.3s ease,
      transform 0.3s ease;
  }
`;

export const NavSection = styled.div`
  flex: 1;
`;

export const BottomSection = styled.div`
  margin-top: auto;
`;
