import styled from 'styled-components';

export const StyledLi = styled.li`
  margin: 0;
  padding: 0;
  padding-left: ${(props) => -props.pl};
  padding-right: ${(props) => -props.pr};
  padding-bottom: ${(props) => -props.pb};
  padding-top: ${(props) => -props.pt};
  margin-left: ${(props) => -props.ml};
  margin-right: ${(props) => -props.mr};
  margin-bottom: ${(props) => -props.mb};
  margin-top: ${(props) => -props.mt};
  border-radius: 15%;

  &:hover {
    background-color: ${(props) => `var(--${props.bgc})`};
  }
`;
