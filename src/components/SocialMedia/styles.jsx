import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Media = styled.a`
  color: rgb(76, 76, 76);
  transition: color 0.45s;
  &:active,
  &:visited {
    color: rgb(76, 76, 76);
  }
  &:nth-child(1):hover {
    color: #C13584;
  }
  &:nth-child(2):hover {
    color: #4267B2;
  }
`;
