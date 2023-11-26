import { Select as SelectAntd, SelectProps as SelectPropsAntd } from 'antd';

import { BoxSelect, TitleSelect } from './select.styles';

interface SelectProps extends SelectPropsAntd {
  title?: string;
  margin?: string;
}

export enum SelectTestIds {
  CONTAINER = 'CONTAINER',
  SELECT_ANTD = 'SELECT_ANTD',
  TITLE = 'TITLE',
}

const Select = ({ title, margin, ...props }: SelectProps) => {
  return (
    <BoxSelect data-testid={SelectTestIds.CONTAINER} style={{ margin }}>
      {title && <TitleSelect data-testid={SelectTestIds.TITLE}>{title}</TitleSelect>}
      <SelectAntd data-testid={SelectTestIds.SELECT_ANTD} style={{ width: '100%' }} {...props} />
    </BoxSelect>
  );
};

export default Select;
