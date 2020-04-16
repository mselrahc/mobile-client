import React from 'react';
import CommonRow from '../../components/CommonRow';
import { unitIdSelector, unitNameSelector } from '../../configs/selectors';
import { unitsActions, unitSelectors } from '../../slices/units';
import CommonListScreen from '../common/CommonListScreen';

function UnitRow({ onRowPress, onRemovePress, entity: unit }) {
  return (
    <CommonRow
      onRowPress={onRowPress}
      onRemovePress={onRemovePress}
      text={`${unit.description} (${unit.name})`}
    />
  );
}

function UnitsListScreen(props) {
  return (
    <CommonListScreen
      {...props}
      entityName={'units'}
      detailScreenName={'Unit Detail'}
      rowComponent={UnitRow}
      selectId={unitIdSelector}
      selectName={unitNameSelector}
      actions={unitsActions}
      selectors={unitSelectors}
    />
  );
}

export default UnitsListScreen;
