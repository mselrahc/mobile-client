import { createAsyncActionType } from './actionTypeCreator';

export const DISMISS_MESSAGE = 'DISMISS_MESSAGE';

export const LOGIN = createAsyncActionType('LOGIN');
export const LOGOUT = 'LOGOUT';
export const RESTORE_TOKEN = 'RESTORE_TOKEN';
