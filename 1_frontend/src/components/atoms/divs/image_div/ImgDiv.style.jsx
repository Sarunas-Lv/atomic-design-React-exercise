import styled from 'styled-components';

export const StyledImg = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;

  object-fit: ${(props) =>
    props.contain ? 'contain' : props.cover ? 'cover' : 'contain'};

  background-position: ${(props) => props.position};
`;
