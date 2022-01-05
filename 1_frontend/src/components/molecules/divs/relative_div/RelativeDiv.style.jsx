import styled from 'styled-components';

export const StyledRelativeOuter = styled.div`
  display: inline-block;
  margin: 0;
  padding: 0;
  -webkit-border-radius: 65px;
  -moz-border-radius: 65px;
  border-radius: 65px;

  width: fit-content;

  padding: 12px;

  background-color: rgb(192, 192, 192, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
`;

export const StyledRelativeInner = styled.div`
  margin: 0;
  padding: 0;
  -webkit-border-radius: 65px;
  -moz-border-radius: 65px;
  border-radius: 65px;

  padding: 20px;

  background-color: var(--white);

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
