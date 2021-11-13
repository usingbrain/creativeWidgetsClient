import { createContext } from 'react';

export const WidgetsContext = createContext();

//initial context value
export const WidgetContext = {
  elements: [],
  formula: '',
  name: 'default calculator',
  lastLetter: 'A',
  width: 720,
};

export const InputMetas = {
  Slider: {
    elementType: 'Slider',
    elementLetter: 'A',
    elementDescription: 'Slider',
    value: 0,
    min: 0,
    max: 10,
    step: 1,
  },
  ValueInput: {
    elementType: 'ValueInput',
    elementLetter: 'A', //this needs to be then changed to check last letter
    elementDescription: 'Input',
    value: '',
  },
};

export const IndividualWidget = createContext();