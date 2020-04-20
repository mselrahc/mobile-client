import { ListItem, Text } from 'native-base';
import React, { useEffect } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getStockSummary } from '../../actions/summary';
import { stockNameSelector } from '../../configs/selectors';

function StockSummaryScreen() {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector(state => state.stockSummary);

  useEffect(() => {
    dispatch(getStockSummary());
  }, [dispatch]);

  const refresh = () => {
    dispatch(getStockSummary());
  };

  return (
    <FlatList
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={refresh} />
      }
      data={data}
      keyExtractor={entry => entry.id}
      renderItem={({ item: stock }) => (
        <ListItem>
          <Text>{stockNameSelector(stock)}</Text>
        </ListItem>
      )}
    />
  );
}

export default StockSummaryScreen;
