import React from 'react';
import CommonInputField from '../../components/CommonInputField';
import { itemsActions } from '../../slices/items';
import CommonDetailScreen from '../common/CommonDetailScreen';

function ItemFormContent({ entity: item, setEntityValue: setItem, errors }) {
  return (
    <>
      <CommonInputField
        label="Name"
        value={item?.name}
        onChangeText={value => setItem('name', value)}
        errors={errors?.name}
      />
    </>
  );
}

function UnitDetailScreen(props) {
  return (
    <CommonDetailScreen
      {...props}
      listScreenName="Items List"
      save={itemsActions.save}
      formContentComponent={ItemFormContent}
    />
  );
}

export default UnitDetailScreen;
