import { Descriptions, Divider } from 'antd';
import { useParams } from 'react-router-dom';

import Loading from '../../../shared/components/loading/Loading';
import Screen from '../../../shared/components/screen/Screen';
import { DisplayFlexJustifyCenter } from '../../../shared/components/styles/display.styled';
import { insertMaskInCEP } from '../../../shared/functions/address';
import { insertMaskInCpf } from '../../../shared/functions/cpf';
import { convertNumberToMoney } from '../../../shared/functions/money';
import { insertMaskInPhone } from '../../../shared/functions/phone';
import ListOrderProduct from '../components/ListOrderProduct';
import { useOrderDetail } from '../hooks/useOrderDetail';
import { OrderRoutesEnum } from '../routes';

const OrderDetail = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const { order, loading } = useOrderDetail(orderId);

  console.log('order', order);
  console.log('loading', loading);

  return (
    <Screen
      listBreadcrumb={[
        {
          name: 'HOME',
        },
        {
          name: 'REQUESTS',
          navigateTo: OrderRoutesEnum.ORDER,
        },
        {
          name: 'Details',
        },
      ]}
    >
      {!order || loading ? (
        <DisplayFlexJustifyCenter>
          <Loading size="large" />
        </DisplayFlexJustifyCenter>
      ) : (
        <>
          <Descriptions title="User Data" bordered>
            <Descriptions.Item label="Name">{order.user?.name}</Descriptions.Item>
            <Descriptions.Item label="Email" span={2}>
              {order.user?.email}
            </Descriptions.Item>
            <Descriptions.Item label="Telephone">
              {insertMaskInPhone(order.user?.phone)}
            </Descriptions.Item>
            <Descriptions.Item label="CPF" span={2}>
              {insertMaskInCpf(order.user?.cpf)}
            </Descriptions.Item>
          </Descriptions>
          <Divider />
          <Descriptions title="Dados do pagamento" bordered>
            <Descriptions.Item label="Price">
              {convertNumberToMoney(order.payment?.price || 0)}
            </Descriptions.Item>
            <Descriptions.Item label="Discount" span={2}>
              {convertNumberToMoney(order.payment?.discount || 0)}
            </Descriptions.Item>
            <Descriptions.Item label="Price Final">
              {convertNumberToMoney(order.payment?.finalPrice || 0)}
            </Descriptions.Item>
            <Descriptions.Item label="Type of payment" span={2}>
              {order.payment?.type}
            </Descriptions.Item>
            <Descriptions.Item label="Status" span={2}>
              {order.payment?.paymentStatus?.name}
            </Descriptions.Item>
          </Descriptions>
          <Divider />
          <Descriptions title="Address details" bordered>
            <Descriptions.Item label="City">{order.address?.city?.name}</Descriptions.Item>
            <Descriptions.Item label="State">{order.address?.city?.state?.name}</Descriptions.Item>
            <Descriptions.Item label="Complement">{order.address?.complement}</Descriptions.Item>
            <Descriptions.Item label="Number">{order.address?.numberAddress}</Descriptions.Item>
            <Descriptions.Item label="CEP" span={2}>
              {insertMaskInCEP(order.address?.cep || '')}
            </Descriptions.Item>
          </Descriptions>
          <Divider />
          <ListOrderProduct ordersProduct={order.ordersProduct} />
        </>
      )}
    </Screen>
  );
};

export default OrderDetail;
