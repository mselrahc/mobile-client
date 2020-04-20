import {
  SummaryScreenTab,
  StockSummaryScreen,
  TransactionSummaryScreen,
} from '../screens/summary';
import {
  ItemDetailScreen,
  ItemsListScreen,
  ItemsScreensStack,
} from '../screens/items';
import {
  StockDetailScreen,
  StocksListScreen,
  StocksScreenStack,
} from '../screens/stocks';
import {
  TransactionDetailScreen,
  TransactionsListScreen,
  TransactionsScreenStack,
} from '../screens/transactions';
import {
  UnitDetailScreen,
  UnitsListScreen,
  UnitsScreenStack,
} from '../screens/units';

export const mainRoutes = [
  {
    name: 'Dashboard',
    iconName: 'view-dashboard',
    component: SummaryScreenTab,
  },
  { name: 'Items', iconName: 'hexagon-multiple', component: ItemsScreensStack },
  { name: 'Units', iconName: 'weight', component: UnitsScreenStack },
  {
    name: 'Stocks',
    iconName: 'package-variant-closed',
    component: StocksScreenStack,
  },
  {
    name: 'Transaction',
    iconName: 'cash-usd',
    component: TransactionsScreenStack,
  },
];

export const dashboardRoutes = [
  { name: 'Transaction Summary', component: TransactionSummaryScreen },
  { name: 'Stock Summary', component: StockSummaryScreen },
];

export const itemsRoutes = [
  { name: 'Items List', component: ItemsListScreen },
  { name: 'Item Detail', component: ItemDetailScreen },
];

export const unitsRoutes = [
  { name: 'Units List', component: UnitsListScreen },
  { name: 'Unit Detail', component: UnitDetailScreen },
];

export const stocksRoutes = [
  { name: 'Stocks List', component: StocksListScreen },
  { name: 'Stock Detail', component: StockDetailScreen },
];

export const transactionsRoutes = [
  { name: 'Transactions List', component: TransactionsListScreen },
  { name: 'Transaction Detail', component: TransactionDetailScreen },
];
