import { Flash } from './Flash';

export type State = {
  themes: Theme[];
};

export type Theme = {
  theme: string;
  flashes: Flash[];
  
}
