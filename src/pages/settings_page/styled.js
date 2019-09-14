import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

export const Header = styled.div`
  margin-bottom: 4px;
  font-size: 44px;
  font-weight: bold;
`;

export const Description = styled.div`
  max-width: 630px;
  margin-bottom: 25px;
  color: #989898;
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Block = styled.div`
  padding: 20px;
  box-shadow: 0px 8px 16px 4px #cecece;
  border-radius: 10px;
`;

export const Subtitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  margin-bottom: 20px;
  width: 570px;
  height: 24px;
  border-radius: 4px;
  border: #cecece 1px solid;
  font-size: 20px;
  padding: 4px 10px;
`;

export const Button = styled.button`
  display: block;
  border: none;
  height: 34px;
  width: 100%;
  border-radius: 14px;
  background-color: #65ef9a;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.07s 0.07s linear;

  :hover {
    transform: translateY(-2px);
  }
`;
