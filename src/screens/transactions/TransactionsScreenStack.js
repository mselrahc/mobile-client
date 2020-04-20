import React from 'react';
import { transactionsRoutes } from '../../configs/routes';
import CommonStack from '../common/CommonStack';

function TransactionScreenStack() {
  return <CommonStack routes={transactionsRoutes} />;
}

export default TransactionScreenStack;
