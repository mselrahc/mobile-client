import React from 'react';
import CommonInputField from '../../components/CommonInputField';
import { stocksActions } from '../../slices/stocks';
import CommonDetailScreen from '../common/CommonDetailScreen';

function StockFormContent({ entity: stock, setEntityValue: setStock, errors }) {
  return (
    <>
      <CommonInputField
        label="Item"
        value={stock?.item?.name}
        onChangeText={value => setStock('item', { id: value })}
        errors={errors?.item}
      />
      <CommonInputField
        label="Unit"
        value={stock?.unit?.name}
        onChangeText={value => setStock('unit', { id: value })}
        errors={errors?.unit}
      />
      <CommonInputField
        label="Quantity"
        value={stock?.qty}
        onChangeText={value => setStock('qty', value)}
        errors={errors?.qty}
      />
    </>
  );
}

function StockDetailScreen(props) {
  return (
    <CommonDetailScreen
      {...props}
      listScreenName="Stocks List"
      save={stocksActions.save}
      formContentComponent={StockFormContent}
    />
  );
}

export default StockDetailScreen;
