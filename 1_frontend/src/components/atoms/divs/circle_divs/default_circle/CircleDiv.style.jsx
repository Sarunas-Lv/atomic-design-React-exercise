import styled from 'styled-components';

export const StyledDefaultCircle = styled.div`
  display: inline-block;
  width: ${(props) => props.size};
  height: ${(props) => props.size};

  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1%;

  background-color: ${(props) => `var(--${props.color})`};
  opacity: ${(props) => (props.opacity ? '0.6' : '1')};
  color: var(--white);

  position: ${(props) => (props.relative ? 'relative' : 'static')};
  top: ${(props) => props.top};
  bottom: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  z-index: ${(props) => props.zIndex};
`;
