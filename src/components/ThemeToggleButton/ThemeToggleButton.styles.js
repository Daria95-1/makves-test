import styled from 'styled-components';

export const TooltipWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  &:hover .tooltip {
    opacity: 1;
    visibility: visible;
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
`;

export const Tooltip = styled.div`
  position: absolute;
  left: 60px;
  top: 50%;
  transform: translateY(-50%);
  background: ${({ theme }) => theme.tooltip};
  color: ${({ theme }) => theme.textDefault};
  padding: 6px 12px;
  border-radius: 30px;
  white-space: nowrap;
  font-size: 14px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease, visibility 0.2s ease;
  z-index: 10;
`;
