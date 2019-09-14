import styled from 'styled-components';

export const Wrap = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 300px;
`;

export const MenuItem = styled.div`
  display: flex;
  color: #E4EEF1;
  padding: 15px;
  border-radius: 10px 0 0 10px;
  cursor: pointer;
  text-decoration: none;

  ${props => props.selected && `
    color: #000;
    font-weight: bold;
    background-color: #fff;
  `}
`;

export const Logo = styled.div`
  height: 120px;
  background: url(${props => props.logo}) 50% 50% / 250px no-repeat;
`;

export const Menu = styled.div`
  padding-top: 100px;
  padding-left: 40px;
  height: 100%;
  border-radius: 20px 20px 0 0;
  background-color: #59697D;
`;

export const MenuItemLogo = styled.span`
  height: 20px;
  width: 20px;
  margin-right: 15px;
  background: url(${props => props.icon}) 50% 50% / 20px no-repeat;
`;