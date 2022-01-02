import styled from 'styled-components';

export const StyledBorderDiv = styled.div`
  box-sizing: border-box;
  display: inline-block;
  margin: 0;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  border-top: ${(props) => props.top};
  border-bottom: ${(props) => props.bottom};
  border-left: ${(props) => props.left};
  border-right: ${(props) => props.right};
  border: ${(props) => props.border};
  background-color: ${(props) => `var(--${props.color})`};
`;
