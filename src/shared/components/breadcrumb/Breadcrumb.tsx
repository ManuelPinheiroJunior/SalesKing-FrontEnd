import { Breadcrumb as BreadcrumbAntd } from 'antd';
import { useNavigate } from 'react-router-dom';


export interface ListBreadcrumb {
  name: string;
  navigateTo?: string;
}

const enum BreadcrumbTestEnum {
  CONTAINER = 'CONTAINER',
  ITEM = 'ITEM',
  CONTAINER_NAVIGATE = 'CONTAINER_NAVIGATE',
}

interface BreadcrumbProps {
  listBreadcrumb: ListBreadcrumb[];
}

const Breadcrumb = ({ listBreadcrumb }: BreadcrumbProps) => {
  const navigate = useNavigate();

  const handleGoToClick = (navigateTo: string) => {
    navigate(navigateTo);
  };

  return (
    <BreadcrumbAntd data-testid={BreadcrumbTestEnum.CONTAINER}>
      {listBreadcrumb.map((breadcrumb, index) => (
        <BreadcrumbAntd.Item data-testid={BreadcrumbTestEnum.ITEM} key={`breadcrumb_${index}`}>
          {breadcrumb.navigateTo ? (
            <a
              data-testid={BreadcrumbTestEnum.CONTAINER_NAVIGATE}
              onClick={() => handleGoToClick(breadcrumb.navigateTo || '')}
            >
              {breadcrumb.name}
            </a>
          ) : (
            breadcrumb.name
          )}
        </BreadcrumbAntd.Item>
      ))}
    </BreadcrumbAntd>
  );
};

export default Breadcrumb;
