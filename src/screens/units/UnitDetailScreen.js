import React from 'react';
import CommonInputField from '../../components/CommonInputField';
import { unitsActions } from '../../slices/units';
import CommonDetailScreen from '../common/CommonDetailScreen';

function UnitFormContent({ entity: unit, setEntityValue: setUnit, errors }) {
  return (
    <>
      <CommonInputField
        label="Name"
        value={unit?.name}
        onChangeText={value => setUnit('name', value)}
        errors={errors?.name}
      />
      <CommonInputField
        label="Description"
        value={unit?.description}
        onChangeText={value => setUnit('description', value)}
        errors={errors?.description}
      />
    </>
  );
}

function UnitDetailScreen(props) {
  return (
    <CommonDetailScreen
      {...props}
      listScreenName="Units List"
      save={unitsActions.save}
      formContentComponent={UnitFormContent}
    />
  );
}

export default UnitDetailScreen;
