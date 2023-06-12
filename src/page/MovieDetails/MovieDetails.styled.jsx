import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  color: orange;
  font-size: 24px;
  font-weight: 700;
  justify-content: space-around;
  padding: 10px;
`;

export const Img = styled.img`
  width: 350px;
`;

export const Items = styled.div`
  width: 500px;
`;
export const BackLink = styled.div`
  display: block;
  text-align: start;
  padding: 15px;
  a {
    text-decoration: none;
    &:hover {
      color: orange;
    }
  }
`;
