export const itemIdSelector = item => item?.id;
export const itemNameSelector = item => item?.name;

export const unitIdSelector = unit => unit?.id;
export const unitNameSelector = unit => unit?.description;

export const stockIdSelector = stock => stock?.id;
export const stockNameSelector = stock =>
  `${stock?.item.name} ${stock?.qty} ${stock.unit.name}`;

export const transactionIdSelector = transaction => transaction?.id;
export const transactionNameSelector = () => 'this transaction';
