import { Text, View, Content, Button, Icon } from 'native-base';
import React, { useEffect, useState } from 'react';
import { BarChart, LineChart } from 'react-native-chart-kit';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactionSummary } from '../../actions/summary';
import { types } from '../../configs/transactions';
import {
  localeDateFromString,
  localeDateTimeFromString,
} from '../../utils/date';
import { formatMoney } from '../../utils/string';
import { Dimensions, StyleSheet } from 'react-native';

const splitDate = date => {
  return {
    year: date.getFullYear().toString(),
    month: (date.getMonth() + 1).toString(),
    date: date.getDate().toString(),
  };
};

function TransactionSummaryScreen() {
  const today = splitDate(new Date());
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector(state => state.transactionSummary);
  const {
    entries,
    transactionCount,
    profit,
    from,
    to,
    createdDate: lastUpdated,
  } = data;

  useEffect(() => {
    dispatch(getTransactionSummary(today));
  }, []);

  const localeFrom = localeDateFromString(from);
  const localeTo = localeDateFromString(to);
  const transactionDateText = from
    ? localeFrom === localeTo
      ? `transactions on ${localeFrom}`
      : `transactions from ${localeFrom} to ${localeTo}`
    : isLoading
    ? ''
    : 'data available';

  const loadSummary = date => {
    dispatch(getTransactionSummary(date));
  };

  return (
    <View style={styles.container}>
      <Button
        primary
        disabled={isLoading}
        onPress={() => loadSummary(splitDate(new Date()))}
        style={styles.button}
      >
        <Icon name="refresh" />
        <Text>Refresh</Text>
      </Button>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          {transactionCount ? (
            <>
              <Text>Showing {transactionDateText}</Text>
              <Text>{transactionCount} total transactions</Text>
              <Text>{formatMoney(profit)}</Text>
              <View style={styles.chart}>
                <BarChart
                  data={{
                    labels: types.map(type => type.name),
                    datasets: [
                      {
                        data: types.map(
                          type =>
                            entries.find(entry => entry.type === type.id)
                              ?.amount || 0,
                        ),
                      },
                      {
                        data: types.map(
                          type =>
                            entries.find(entry => entry.type === type.id)
                              ?.count || 0,
                        ),
                      },
                    ],
                  }}
                  width={Dimensions.get('window').width - 40}
                  height={220}
                  yAxisLabel="Rp"
                  chartConfig={{
                    backgroundGradientFrom: '#fb8c00',
                    backgroundGradientTo: '#ffa726',
                    decimalPlaces: 0,
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) =>
                      `rgba(255, 255, 255, ${opacity})`,
                  }}
                />
              </View>
            </>
          ) : (
            <Text>No {transactionDateText}</Text>
          )}
          <Text>Last Updated: {localeDateTimeFromString(lastUpdated)}</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  chart: {
    padding: 10,
  },
  button: {
    alignSelf: 'center',
  },
});

export default TransactionSummaryScreen;
