import React from 'react';
import CommonRow from '../../components/CommonRow';
import { stockIdSelector, stockNameSelector } from '../../configs/selectors';
import { stocksActions, stockSelectors } from '../../slices/stocks';
import CommonListScreen from '../common/CommonListScreen';

function StockRow({ onRowPress, onRemovePress, entity: stock }) {
  return (
    <CommonRow
      onRowPress={onRowPress}
      onRemovePress={onRemovePress}
      text={stockNameSelector(stock)}
    />
  );
}

function StocksListScreen(props) {
  return (
    <CommonListScreen
      {...props}
      entityName={'stocks'}
      detailScreenName={'Stock Detail'}
      rowComponent={StockRow}
      selectId={stockIdSelector}
      selectName={stockNameSelector}
      actions={stocksActions}
      selectors={stockSelectors}
    />
  );
}

export default StocksListScreen;
