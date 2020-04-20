import { Picker, Item, Label } from 'native-base';
import React from 'react';
import CommonInputField from '../../components/CommonInputField';
import { types } from '../../configs/transactions';
import { transactionsActions } from '../../slices/transactions';
import CommonDetailScreen from '../common/CommonDetailScreen';
import ErrorText from '../../components/ErrorText';
import { StyleSheet } from 'react-native';

function TransactionFormContent({
  entity: transaction,
  setEntityValue: setTransaction,
  errors,
}) {
  return (
    <>
      <CommonInputField
        label="Description"
        value={transaction?.description}
        onChangeText={value => setTransaction('description', value)}
        errors={errors?.description}
      />
      <Item picker style={styles.select}>
        <Label>Type</Label>
        <Picker
          placeholder="Select..."
          selectedValue={transaction?.type}
          onValueChange={value => setTransaction('type', value)}
        >
          <Picker.Item label="Select..." value={undefined} />
          {types.map(type => (
            <Picker.Item label={type.name} value={type.id} />
          ))}
        </Picker>
      </Item>
      {errors?.type && (
        <ErrorText error={!!errors?.type}>{errors?.type?.[0]}</ErrorText>
      )}
      <CommonInputField
        label="Amount"
        value={transaction?.amount?.toString()}
        onChangeText={value => setTransaction('amount', value)}
        errors={errors?.amount}
      />
    </>
  );
}

function TransactionDetailScreen(props) {
  return (
    <CommonDetailScreen
      {...props}
      listScreenName="Transactions List"
      save={transactionsActions.save}
      formContentComponent={TransactionFormContent}
    />
  );
}

const styles = StyleSheet.create({
  select: {
    marginLeft: 6,
    marginTop: 15,
  },
});

export default TransactionDetailScreen;
