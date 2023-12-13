import { Typography } from 'antd';
import styled from 'styled-components';

const { Title } = Typography;

export const ContainerLoginScreen = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: right;
  justify-content: center; /* Mudança aqui para centralizar a tela */
  align-items: center;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
`;

export const TitleLogin = styled(Title)`
  color: #006397;
`;

export const ContainerLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.8); 
  padding: 22px;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  max-width: 646px;
  width: 80%;
`;

export const LimitedContainer = styled.div`
  width: 75vw;
  height: 100%;
  background-color: transparent;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
