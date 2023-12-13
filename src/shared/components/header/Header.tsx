import { Modal } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { logout } from '../../functions/connection/auth';
import { HeaderTestIdEnum } from './enum/headerTestIdEnum';
import { HeaderContainer, LogoExit } from './header.style';

const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        data-testid={HeaderTestIdEnum.HEADER_MODAL}
        title="Attention"
        open={open}
        onOk={() => logout(navigate)}
        onCancel={hideModal}
        okText="Yes"
        cancelText="Cancel"
      >
        <p data-testid={HeaderTestIdEnum.HEADER_MODAL_P}>Are you sure you want to quit?</p>
      </Modal>
      <HeaderContainer data-testid={HeaderTestIdEnum.HEADER_CONTAINER}>
        <LogoExit data-testid={HeaderTestIdEnum.HEADER_LOGO} onClick={showModal} />
      </HeaderContainer>
    </>
  );
};

export default Header;
