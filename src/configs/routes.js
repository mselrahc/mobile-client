import { MainScreenTab } from '../screens';
import { LoginScreen, SplashScreen } from '../screens/auth';
import { DashboardScreen } from '../screens/dashboard';
import {
  ItemDetailScreen,
  ItemsListScreen,
  ItemsScreensStack,
} from '../screens/items';
import {
  UnitsListScreen,
  UnitsScreenStack,
  UnitDetailScreen,
} from '../screens/units';
import {
  StocksScreenStack,
  StockDetailScreen,
  StocksListScreen,
} from '../screens/stocks';
import {
  TransactionsListScreen,
  TransactionDetailScreen,
  TransactionsScreenStack,
} from '../screens/transactions';

// export const appRoutes = [
//   { name: 'Splash', component: SplashScreen },
//   { name: 'Login', component: LoginScreen },
//   { name: 'Main', component: MainScreenTab },
// ];

export const mainRoutes = [
  {
    name: 'Dashboard',
    iconName: 'view-dashboard',
    component: DashboardScreen,
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
