import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/Button';
import Input from '../../../shared/components/inputs/input/Input';
import Loading from '../../../shared/components/loading/Loading';
import Screen from '../../../shared/components/screen/Screen';
import {
  DisplayFlexJustifyCenter,
  DisplayFlexJustifyRight,
} from '../../../shared/components/styles/display.styled';
import { LimitedContainer } from '../../../shared/components/styles/limited.styled';
import { useInsertCategory } from '../hooks/useInsertCategory';
import { CategoryRoutesEnum } from '../routes';

const CategoryInsert = () => {
  const { name, categoryId, loading, handleOnChangeName, disabledButton, insertCategory } =
    useInsertCategory();
  const navigate = useNavigate();

  const handleOnClickCancel = () => {
    navigate(CategoryRoutesEnum.CATEGORY);
  };

  return (
    <Screen
      listBreadcrumb={[
        {
          name: 'HOME',
        },
        {
          name: 'CATEGORIES',
          navigateTo: CategoryRoutesEnum.CATEGORY,
        },
        {
          name: categoryId ? 'EDIT CATEGORY' : 'INSERT CATEGORY',
        },
      ]}
    >
      <DisplayFlexJustifyCenter>
        {loading && categoryId ? (
          <DisplayFlexJustifyCenter>
            <Loading size="large" />
          </DisplayFlexJustifyCenter>
        ) : (
          <LimitedContainer width={400}>
            <Input
              onChange={handleOnChangeName}
              value={name}
              margin="0px 0px 16px 0px"
              title="Name"
              placeholder="Name"
            />
            <DisplayFlexJustifyRight>
              <LimitedContainer margin="0px 8px" width={120}>
                <Button onClick={handleOnClickCancel} danger>
                  Cancel
                </Button>
              </LimitedContainer>
              <LimitedContainer width={160}>
                <Button
                  disabled={disabledButton}
                  loading={loading}
                  onClick={insertCategory}
                  type="primary"
                >
                  {categoryId ? 'To Save' : 'Insert category'}
                </Button>
              </LimitedContainer>
            </DisplayFlexJustifyRight>
          </LimitedContainer>
        )}
      </DisplayFlexJustifyCenter>
    </Screen>
  );
};

export default CategoryInsert;
