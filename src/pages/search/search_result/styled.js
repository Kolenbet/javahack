import styled from 'styled-components';

import checkbox from '../assets/checked.png';

export const Request = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const Text = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-right: 20px;
`;

export const Input = styled.input`
  padding: 2px 10px;
  box-shadow: 0 0 6px 2px #cecece;
  width: 575px;
  height: 20px;
  border: #cecece 1px solid;
  font-size: 18px;
  background: #cecece;
  margin-top: -4px;
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Supplier = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 30px;
  box-shadow: 0 10px 20px 2px #d6d6d6;
`;

export const Info = styled.div`
`;

export const Resource = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

export const AboutCompany = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const QrCode = styled.div`
  margin-right: 20px;
`;

export const Contacts = styled.div`
  margin-left: 20px;
`;

export const Name = styled.div`
  margin-bottom: 6px;
  font-weight: bold;
`;

export const Phone = styled.div`
  margin-bottom: 4px;
  color: #cecece;
`;

export const Email = styled.div`
  margin-bottom: 4px;
  color: #cecece;
`;

export const Site = styled.a`
  display: block;
  margin-bottom: 4px;
  cursor: pointer;
`;

export const ContactTypes = styled.div`
`;

export const ContactCheckbox = styled.div`
  width: 16px;
  height: 16px;
  margin-right: 5px;
  ${props => props.active ?
    `background: url(${checkbox}) 50% 50% / 16px no-repeat;` : `
      border: 1px solid;
      border-radius: 50%;
    `
  }
`;

export const ContactType = styled.div`
  display: flex;
  font-size: 14px;
  margin-bottom: 6px;
  cursor: pointer;
`;

export const Good = styled.div`
  padding: 5px 10px;
  border-radius: 10px;
  color: #fff;
  font-weight: bold;
  background-color: #6EE79F;
`;

export const Bad = styled.div`
  padding: 5px 10px;
  border-radius: 10px;
  color: #000;
  font-weight: bold;
  background-color: #d14e58;
`;

export const Button = styled.button`
  position: fixed;
  bottom: 20px;
  width: 300px;
  left: 40%;
  z-index: 50;
  height: 46px;
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