import { Body, Left, ListItem, Right, Text } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import CloseButton from '../../components/CloseButton';
import {
  transactionIdSelector,
  transactionNameSelector,
} from '../../configs/selectors';
import { types } from '../../configs/transactions';
import {
  transactionsActions,
  transactionSelectors,
} from '../../slices/transactions';
import { formatMoney } from '../../utils/string';
import CommonListScreen from '../common/CommonListScreen';

function TransactionTypeIcon({ typeId }) {
  return <Text>{types.find(type => type.id === typeId)?.name}</Text>;
}

function TransactionRow({ onRowPress, onRemovePress, entity: transaction }) {
  return (
    <ListItem onPress={onRowPress} avatar>
      <Left style={styles.typeIcon}>
        <TransactionTypeIcon typeId={transaction.type} />
      </Left>
      <Body>
        <Text>{transaction.description}</Text>
        <Text
          style={transaction.amount < 0 ? styles.negative : styles.positive}
        >
          {formatMoney(transaction.amount)}
        </Text>
      </Body>
      <Right>
        <CloseButton onPress={onRemovePress} />
      </Right>
    </ListItem>
  );
}

function UnitsListScreen(props) {
  return (
    <CommonListScreen
      {...props}
      entityName={'transactions'}
      detailScreenName={'Transaction Detail'}
      rowComponent={TransactionRow}
      selectId={transactionIdSelector}
      selectName={transactionNameSelector}
      actions={transactionsActions}
      selectors={transactionSelectors}
    />
  );
}

const styles = StyleSheet.create({
  typeIcon: {
    paddingTop: 0,
    height: 50,
    width: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#efefef',
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 0.5,
  },
  bgPositive: {
    backgroundColor: 'lightgreen',
  },
  bgNegative: {
    backgroundColor: 'pink',
  },
  positive: {
    color: 'green',
  },
  negative: {
    color: 'red',
  },
});

export default UnitsListScreen;
