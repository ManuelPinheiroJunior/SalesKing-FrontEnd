import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Input, Modal } from 'antd';
import { ColumnsType } from 'antd/es/table';

import Button from '../../../shared/components/buttons/button/Button';
import Screen from '../../../shared/components/screen/Screen';
import {
  DisplayFlex,
  DisplayFlexJustifyBetween,
} from '../../../shared/components/styles/display.styled';
import { LimitedContainer } from '../../../shared/components/styles/limited.styled';
import Table from '../../../shared/components/table/Table';
import { CategoryType } from '../../../shared/types/CategoryType';
import { useCategory } from '../hooks/useCategory';

const { Search } = Input;

const Category = () => {
  const {
    categories,
    openModalDelete,
    handleOnChangeSearch,
    handleOnClickCategory,
    handleOpenModalDelete,
    handleCloseModalDelete,
    handleConfirmDeleteCategory,
    handleGoToEditCategory,
  } = useCategory();

  const columns: ColumnsType<CategoryType> = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Products',
      dataIndex: 'amountProducts',
      key: 'amountProducts',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Ações',
      dataIndex: '',
      width: 240,
      key: 'x',
      render: (_, category) => (
        <LimitedContainer width={180}>
          <DisplayFlex>
            <LimitedContainer margin="0px 16px 0px 0px" width={90}>
              <Button onClick={() => handleGoToEditCategory(category.id)} icon={<EditOutlined />}>
                Editar
              </Button>
            </LimitedContainer>
            {category.amountProducts <= 0 && (
              <Button
                danger
                onClick={() => handleOpenModalDelete(category.id)}
                icon={<DeleteOutlined />}
              >
                Deletar
              </Button>
            )}
          </DisplayFlex>
        </LimitedContainer>
      ),
    },
  ];

  return (
    <Screen
      listBreadcrumb={[
        {
          name: 'HOME',
        },
        {
          name: 'CATEGORIES',
        },
      ]}
    >
      <Modal
        title="Attention"
        open={openModalDelete}
        onOk={handleConfirmDeleteCategory}
        onCancel={handleCloseModalDelete}
        okText="Yes"
        cancelText="Cancel"
      >
        <p>Are you sure you want to delete this category?</p>
      </Modal>
      <DisplayFlexJustifyBetween margin="0px 0px 16px 0px">
        <LimitedContainer width={240}>
          <Search placeholder="Search category" onSearch={handleOnChangeSearch} enterButton />
        </LimitedContainer>

        <LimitedContainer width={120}>
          <Button type="primary" onClick={handleOnClickCategory}>
            Insert
          </Button>
        </LimitedContainer>
      </DisplayFlexJustifyBetween>

      <Table columns={columns} dataSource={categories} />
    </Screen>
  );
};

export default Category;
