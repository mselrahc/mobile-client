import React from 'react';
import CommonStack from '../common/CommonStack';
import { stocksRoutes } from '../../configs/routes';

function StocksScreenStack() {
  return <CommonStack routes={stocksRoutes} />;
}

export default StocksScreenStack;
