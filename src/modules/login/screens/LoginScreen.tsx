import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/Button';
import salesKingImage from '../../../shared/components/icons/salesKing.png';
import Input from '../../../shared/components/inputs/input/Input';
import { useRequests } from '../../../shared/hooks/useRequests';
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  TitleLogin,
} from '../styles/loginScreen.styles';

interface PopoverProps {
  onClose: () => void;
}

const Popover: React.FC<PopoverProps> = ({ onClose }) => {
  return (
    <div style={{ position: 'fixed', top: 10, right: 10, background: '#fff', padding: 16, border: '1px solid #ccc', flexWrap: "wrap", whiteSpace: "pre-wrap", lineHeight: "1.5", maxWidth: "300px" }}>
      <p>Default login at the moment for testing would be
          User:admin@outlook.com
          Password:123456</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};


const LoginScreen = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { authRequest, loading } = useRequests();
  const [popoverVisible, setPopoverVisible] = useState(true);

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    authRequest(navigate, {
      email: email,
      password: password,
    });
  };

  const closePopover = () => {
    setPopoverVisible(false);
  };

  return (
    <ContainerLoginScreen>
      <ContainerLogin>
        <LimitedContainer>
        <img src={salesKingImage} alt="Sales King" width={220} height={220} />
          <TitleLogin level={3} type="secondary">
            LOGIN
          </TitleLogin>
          <Input title="USER" margin="32px 0px 0px" onChange={handleEmail} value={email} />
          <Input
            type="password"
            title="PASSWORD"
            margin="32px 0px 0px"
            onChange={handlePassword}
            value={password}
          />
          <Button loading={loading} type="primary" margin="64px 0px 16px 0px" onClick={handleLogin}>
           TO ENTER
          </Button>
        </LimitedContainer>
      </ContainerLogin>
      <BackgroundImage src="./background.png" />

      {popoverVisible && <Popover onClose={closePopover} />}
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
