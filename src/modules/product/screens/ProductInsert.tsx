import { useParams } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/Button';
import Input from '../../../shared/components/inputs/input/Input';
import InputMoney from '../../../shared/components/inputs/inputMoney/InputMoney';
import Select from '../../../shared/components/inputs/select/Select';
import Loading from '../../../shared/components/loading/Loading';
import Screen from '../../../shared/components/screen/Screen';
import {
  DisplayFlex,
  DisplayFlexJustifyCenter,
  DisplayFlexJustifyRight,
} from '../../../shared/components/styles/display.styled';
import { LimitedContainer } from '../../../shared/components/styles/limited.styled';
import { CategoryType } from '../../../shared/types/CategoryType';
import { useCategory } from '../../category/hooks/useCategory';
import { ProductInsertTestIdEnum } from '../enum/ProductInsertTestIdEnum';
import { useInsertProduct } from '../hooks/useInsertProduct';
import { ProductRoutesEnum } from '../routes';

const ProductInsert = () => {
  const { productId } = useParams<{ productId: string }>();
  const {
    product,
    loading,
    disabledButton,
    isEdit,
    loadingProduct,
    onChangeInput,
    handleInsertProduct,
    handleChangeSelect,
    handleOnClickCancel,
  } = useInsertProduct(productId);
  const { categories } = useCategory();

  return (
    <Screen
      listBreadcrumb={[
        {
          name: 'HOME',
        },
        {
          name: 'PRODUCTS',
          navigateTo: ProductRoutesEnum.PRODUCT,
        },
        {
          name: 'INSERT PRODUCT',
        },
      ]}
    >
      {loadingProduct ? (
        <DisplayFlexJustifyCenter>
          <Loading size="large" />
        </DisplayFlexJustifyCenter>
      ) : (
        <DisplayFlexJustifyCenter data-testid={ProductInsertTestIdEnum.PRODUCT_INSERT_CONTAINER}>
          <LimitedContainer width={400}>
            <Input
              data-testid={ProductInsertTestIdEnum.PRODUCT_INPUT_NAME}
              onChange={(event) => onChangeInput(event, 'name')}
              value={product.name}
              margin="0px 0px 16px 0px"
              title="Name"
              placeholder="Name"
            />
            <Input
              data-testid={ProductInsertTestIdEnum.PRODUCT_INPUT_IMAGE}
              onChange={(event) => onChangeInput(event, 'image')}
              value={product.image}
              margin="0px 0px 16px 0px"
              title="Url imagem"
              placeholder="Url imagem"
            />
            <InputMoney
              data-testid={ProductInsertTestIdEnum.PRODUCT_INPUT_PRICE}
              onChange={(event) => onChangeInput(event, 'price', true)}
              value={product.price}
              margin="0px 0px 16px 0px"
              title="Price"
              placeholder="Price"
            />
            <Select
              defaultValue={`${product.categoryId || ''}`}
              data-testid={ProductInsertTestIdEnum.PRODUCT_INPUT_SELECT}
              title="Category"
              margin="0px 0px 16px 0px"
              onChange={handleChangeSelect}
              options={categories.map((category: CategoryType) => ({
                value: `${category.id}`,
                label: `${category.name}`,
              }))}
            />
            <DisplayFlex>
              <InputMoney
                data-testid={ProductInsertTestIdEnum.PRODUCT_INPUT_IMAGE}
                addonBefore="Kg"
                onChange={(event) => onChangeInput(event, 'weight', true)}
                value={product.weight}
                margin="0px 16px 16px 0px"
                title="Weight"
                placeholder="Weight"
              />
              <InputMoney
                data-testid={ProductInsertTestIdEnum.PRODUCT_INPUT_IMAGE}
                addonBefore="cm"
                onChange={(event) => onChangeInput(event, 'length', true)}
                value={product.length}
                margin="0px 0px 16px 0px"
                title="Length"
                placeholder="Length"
              />
            </DisplayFlex>
            <DisplayFlex>
              <InputMoney
                data-testid={ProductInsertTestIdEnum.PRODUCT_INPUT_IMAGE}
                onChange={(event) => onChangeInput(event, 'height', true)}
                value={product.height}
                addonBefore="cm"
                margin="0px 16px 16px 0px"
                title="Height"
                placeholder="Height"
              />
              <InputMoney
                data-testid={ProductInsertTestIdEnum.PRODUCT_INPUT_IMAGE}
                onChange={(event) => onChangeInput(event, 'width', true)}
                value={product.width}
                addonBefore="cm"
                margin="0px 0px 16px 0px"
                title="Width"
                placeholder="Width"
              />
            </DisplayFlex>
            <InputMoney
              data-testid={ProductInsertTestIdEnum.PRODUCT_INPUT_IMAGE}
              onChange={(event) => onChangeInput(event, 'diameter', true)}
              value={product.diameter}
              addonBefore="cm"
              margin="0px 0px 32px 0px"
              title="Diameter"
              placeholder="Diameter"
            />
            <DisplayFlexJustifyRight>
              <LimitedContainer margin="0px 8px" width={120}>
                <Button
                  data-testid={ProductInsertTestIdEnum.PRODUCT_BUTTON_CANCEL}
                  danger
                  onClick={handleOnClickCancel}
                >
                  Cancel
                </Button>
              </LimitedContainer>
              <LimitedContainer width={120}>
                <Button
                  data-testid={ProductInsertTestIdEnum.PRODUCT_BUTTON_INSERT}
                  loading={loading}
                  disabled={disabledButton}
                  onClick={handleInsertProduct}
                  type="primary"
                >
                  {isEdit ? 'To save' : 'Insert product'}
                </Button>
              </LimitedContainer>
            </DisplayFlexJustifyRight>
          </LimitedContainer>
        </DisplayFlexJustifyCenter>
      )}
    </Screen>
  );
};

export default ProductInsert;
