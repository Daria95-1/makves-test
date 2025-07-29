import styled from 'styled-components';

export const SidebarContainer = styled.div`
  position: relative;
  border-radius: 12px;
  width: fit-content;
`;

export const SidebarInnerContainer = styled.div`
  height: 100vh;
  width: ${({ isOpened }) => (isOpened ? '220px' : '72px')};
  display: flex;
  flex-direction: column;
  color: ${({ theme: { text } }) => text};
  background: ${({ theme: { background } }) => background};
  border: 5px solid ${({ theme: { active } }) => active};
  border-radius: 12px;
  transition: width 0.3s ease;
  box-sizing: border-box;
  padding: 16px 8px;
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
    margin-right: 12px;
    transition: margin 0.3s ease;
  }

  span {
    display: ${({ isOpened }) => (isOpened ? 'inline' : 'none')};
    font-weight: bold;
    color: ${({ theme: { logo } }) => logo};
    transition: opacity 0.3s ease;
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
  transition: opacity 0.2s ease;
  z-index: 10;
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
  transition: opacity 0.2s ease;
  z-index: 10;
`;

export const ToggleButton = styled.button`
  position: absolute;
  right: ${({ isOpened }) => (isOpened ? '-24px' : '-60px')};
  top: 0;
  bottom: 0;
  margin: auto;
  width: 30px;
  height: 30px;
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
  }
`;

export const NavItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 6px;
  transition: background 0.2s;

  background: ${({ active, theme: { active: activeColor } }) => (active ? activeColor : 'transparent')};
  color: ${({ active, theme: { textActive, text } }) => (active ? textActive : text)};

  &:hover {
    background: ${({ theme: { hover } }) => hover};
    color: ${({ theme: { textHover } }) => textHover};
  }

  &:hover ${MenuTooltip} {
    opacity: ${({ isOpened }) => (isOpened ? 0 : 1)};
  }

  span {
    display: ${({ isOpened }) => (isOpened ? 'inline' : 'none')};
    transition: opacity 0.3s ease;
  }
`;

export const NavSection = styled.div`
  flex: 1;
`;

export const BottomSection = styled.div`
  margin-top: auto;
`;
