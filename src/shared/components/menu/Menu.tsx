import {
  HomeOutlined,
  LaptopOutlined,
  ProfileOutlined,
  SafetyCertificateOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu as MenuAntd } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import salesKingImage from '../../../shared/components/icons/salesKing.png';
import { CategoryRoutesEnum } from '../../../modules/category/routes';
import { OrderRoutesEnum } from '../../../modules/orders/routes';
import { ProductRoutesEnum } from '../../../modules/product/routes';
import { UserRoutesEnum } from '../../../modules/user/routes';
import { ContainerLogoName, ContainerMenu,  NameCompany } from './menu.style';

type MenuItem = Required<MenuProps>['items'][number];

const Menu = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState('1');

  const items: MenuItem[] = [
    {
      key: 'home',
      label: 'Main',
      icon: <HomeOutlined />,
    },
    {
      key: 'products',
      label: 'Products',
      icon: <LaptopOutlined />,
      children: [
        {
          key: 'products_view',
          label: 'To view',
          onClick: () => navigate(ProductRoutesEnum.PRODUCT),
        },
        {
          key: 'products_insert',
          label: 'Insert',
          onClick: () => navigate(ProductRoutesEnum.PRODUCT_INSERT),
        },
      ],
    },
    {
      key: 'category',
      label: 'Categories',
      icon: <ProfileOutlined />,
      children: [
        {
          key: 'category_view',
          label: 'To view',
          onClick: () => navigate(CategoryRoutesEnum.CATEGORY),
        },
        {
          key: 'category_insert',
          label: 'Insert',
          onClick: () => navigate(CategoryRoutesEnum.CATEGORY_INSERT),
        },
      ],
    },
    {
      key: 'order',
      label: 'Order',
      icon: <SafetyCertificateOutlined />,
      onClick: () => navigate(OrderRoutesEnum.ORDER),
    },
    {
      key: 'user',
      label: 'Customers',
      icon: <UserOutlined />,
      onClick: () => navigate(UserRoutesEnum.USER),
    },
  ];

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };

  return (
    <ContainerMenu>
      <ContainerLogoName>
        <img src={salesKingImage} alt="Sales King" width={120} height={120} />
        <NameCompany>Online sales</NameCompany>
      </ContainerLogoName>
      <MenuAntd
        theme="dark"
        onClick={onClick}
        style={{ width: 240 }}
        defaultOpenKeys={['sub1']}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
    </ContainerMenu>
  );
};

export default Menu;
