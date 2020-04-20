import React from 'react';
import { itemsRoutes } from '../../configs/routes';
import CommonStack from '../common/CommonStack';

function ItemsScreenStack() {
  return <CommonStack routes={itemsRoutes} />;
}

export default ItemsScreenStack;
