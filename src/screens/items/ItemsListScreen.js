import React from 'react';
import { itemIdSelector, itemNameSelector } from '../../configs/selectors';
import { itemsActions, itemSelectors } from '../../slices/items';
import CommonListScreen from '../common/CommonListScreen';
import ItemRow from './components/ItemRow';

function ItemListScreen(props) {
  return (
    <CommonListScreen
      {...props}
      entityName={'items'}
      detailScreenName={'Item Detail'}
      rowComponent={({ entity, ...rowProps }) => (
        <ItemRow item={entity} {...rowProps} />
      )}
      selectId={itemIdSelector}
      selectName={itemNameSelector}
      actions={itemsActions}
      selectors={itemSelectors}
    />
  );
}

export default ItemListScreen;
