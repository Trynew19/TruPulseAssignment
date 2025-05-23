import { weatherPlugin } from './weather';
import { calcPlugin } from './calc';
import { definePlugin } from './define';

export const plugins = {
  weather: weatherPlugin,
  calc: calcPlugin,
  define: definePlugin,
};