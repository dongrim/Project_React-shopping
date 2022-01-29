import styled from 'styled-components';
import { CartSummary } from '../shop/CartSummary';

const WrapperHeader = styled.div`
  height: 63px;
  padding: 8px 7px;
  background: #3b3b3b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  .title {
    text-transform: uppercase;
    padding: 0;
    margin: 0;
  }
  a {
    color: white;
    text-decoration: none;
  }
`;

export const HeaderComponent = props => {
  const propsObj = Object.entries(props);
  return (
    <WrapperHeader>
      <h4 className='title'>
        <a href='/'>sports store</a>
      </h4>
      {propsObj.length !== 0 && <CartSummary {...props} />}
    </WrapperHeader>
  );
};
