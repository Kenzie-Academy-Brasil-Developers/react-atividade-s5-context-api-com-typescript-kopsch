import styled from "styled-components";

export const Image = styled.img`
  width: 100px;
  height: 150px;
`;

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  text-align: center;
  width: 220px;
  margin: 0 50px;
`;

export const Title = styled.span`
  margin: 5px 0;
`;

export const Description = styled.span`
  font-size: 0.8rem;
  margin: 5px 0;
`;

export const Price = styled.span`
  font-size: 0.75rem;
  margin: 5px 0;
`;

export const Button = styled.button`
  border: none;
  border-radius: 5px;
  background: #000;
  color: #fff;
  cursor: pointer;
  transition: 0.25s;

  &:hover {
    background: #fff;
    color: #000;
    transition: 0.25s;
  }
`;
