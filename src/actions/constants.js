import { createAsyncActionType } from './actionTypeCreator';

export const DISMISS_MESSAGE = 'DISMISS_MESSAGE';

export const LOGIN = createAsyncActionType('LOGIN');
export const LOGOUT = 'LOGOUT';
export const RESTORE_TOKEN = createAsyncActionType('RESTORE_TOKEN');

export const GET_STOCK_SUMMARY = createAsyncActionType('GET_STOCK_SUMMARY');
export const GET_TRANSACTION_SUMMARY = createAsyncActionType(
  'GET_TRANSACTION_SUMMARY',
);
