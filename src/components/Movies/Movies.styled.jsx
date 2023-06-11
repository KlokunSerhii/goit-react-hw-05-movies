import styled from 'styled-components';

export const Container = styled.div`
  background-color: #0f0f0f;
  color: #ffffff;
  justify-content: space-around;
  padding: 10px;
`;

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-around;
  margin-top: 20px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const Input = styled.input`
  width: 500px;
  padding: 7px 12px;
`;

export const Submit = styled.button`
  display: inline-block;
  background-color: #0f0f0f;
  border: 0;
  outline: none;
  margir-left: 10px;
  svg {
    width: 30px;
    height: 30px;
    color: #ffffff;
    margin-left: 10px;
  }
`;
