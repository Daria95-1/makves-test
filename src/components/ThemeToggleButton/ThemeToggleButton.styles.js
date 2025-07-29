import styled from 'styled-components';

export const TooltipWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  &:hover .tooltip {
    opacity: 1;
    visibility: visible;
    transform: translateY(-50%) translateX(0);
    transition-delay: 0.1s; /* небольшая задержка для плавности */
  }
`;

export const ButtonStyle = styled.button`
  margin: -10px 0 20px 0;
  padding: 6px 12px;
  border-radius: 8px;
  background: ${({ theme }) => theme.buttonBg};
  color: ${({ theme }) => theme.text};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 16px;
  gap: 8px;
  transition: background 0.3s ease, color 0.3s ease;

  span {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 0.4s ease, transform 0.4s ease;
    white-space: nowrap;
  }
`;

export const AnimatedLabel = styled.span`
  max-width: ${({ isOpened }) => (isOpened ? '200px' : '0')};
  opacity: ${({ isOpened }) => (isOpened ? 1 : 0)};
  overflow: hidden;
  white-space: nowrap;
  transform: translateX(${({ isOpened }) => (isOpened ? '0' : '-8px')});
  transition:
    max-width 0.4s ease,
    opacity 0.4s ease,
    transform 0.4s ease;
`;

export const Tooltip = styled.div`
  position: absolute;
  left: 100%;
  margin-left: 12px;
  top: 50%;
  transform: translateY(-50%) translateX(-12px);
  background: ${({ theme }) => theme.tooltip};
  color: ${({ theme }) => theme.textDefault};
  padding: 6px 12px;
  border-radius: 30px;
  white-space: nowrap;
  font-size: 14px;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease,
    transform 0.3s ease;
  z-index: 10;

  .tooltip-visible & {
    opacity: 1;
    visibility: visible;
    transform: translateY(-50%) translateX(0);
    pointer-events: auto;
  }
`;