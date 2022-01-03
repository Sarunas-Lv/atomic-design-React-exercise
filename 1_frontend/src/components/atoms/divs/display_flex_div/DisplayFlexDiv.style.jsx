import styled from 'styled-components';

export const StyledDisplayFlexDiv = styled.div`
  display: inline-block;
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  width: ${(props) => props.width};
  height: ${(props) => props.height};

  display: flex;
  flex-direction: ${(props) =>
    props.direction === 'reverse'
      ? 'row-reverse'
      : props.direction === 'column'
      ? 'column'
      : props.direction === 'column-reverse'
      ? 'column-reverse'
      : 'row'};
  flex-wrap: ${(props) =>
    props.wrap === 'wrap'
      ? 'wrap'
      : props.wrap === 'wrap-reverse'
      ? 'wrap-reverse'
      : 'nowrap'};
  justify-content: ${(props) =>
    props.justify === 'flex-end'
      ? 'flex-end'
      : props.justify === 'center'
      ? 'center'
      : props.justify === 'space-around'
      ? 'space-around'
      : props.justify === 'space-between'
      ? 'space-between'
      : 'flex-start'};
  align-items: ${(props) =>
    props.align === 'baseline'
      ? 'baseline'
      : props.align === 'center'
      ? 'center'
      : props.align === 'flex-start'
      ? 'flex-start'
      : props.align === 'flex-end'
      ? 'flex-end'
      : 'strech'};
  gap: ${(props) => props.gap};
  background-color: ${(props) => `var(--${props.color})`};
`;
