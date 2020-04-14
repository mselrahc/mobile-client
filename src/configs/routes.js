import { MainScreenTab } from '../screens';
import { LoginScreen } from '../screens/auth';
import { DashboardScreen } from '../screens/dashboard';
import {
  ItemDetailScreen,
  ItemsListScreen,
  ItemsScreensStack,
} from '../screens/items';
import { UnitsListScreen } from '../screens/units';

export const appRoutes = [
  { name: 'Login', component: LoginScreen },
  { name: 'Main', component: MainScreenTab },
];

export const mainRoutes = [
  {
    name: 'Dashboard',
    iconName: 'view-dashboard',
    component: DashboardScreen,
  },
  { name: 'Items', iconName: 'hexagon-multiple', component: ItemsScreensStack },
  { name: 'Units', iconName: 'weight', component: UnitsListScreen },
  {
    name: 'Stocks',
    iconName: 'package-variant-closed',
    component: UnitsListScreen,
  },
  { name: 'Transaction', iconName: 'cash-usd', component: ItemsScreensStack },
];

export const itemsRoutes = [
  { name: 'Items List', component: ItemsListScreen },
  { name: 'Item Detail', component: ItemDetailScreen },
];
