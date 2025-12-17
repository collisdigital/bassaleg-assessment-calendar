import { Data } from './types';

declare global {
  interface Window {
    APP_DATA?: Data;
  }
}

export {};
