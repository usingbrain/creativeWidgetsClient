import { createContext, useContext } from 'react';
import { Element } from '../Types/Element';
import { IndividualWidgetInterface } from '../Types/IndividualWidgetInterface';
import { Result } from '../Types/Result';
import { Widget } from '../Types/Widget';

interface WidgetsContextInterface {
  widgets: Widget[];
  setWidgets: React.Dispatch<React.SetStateAction<Widget[]>>;
}

export const WidgetsContext = createContext<WidgetsContextInterface | null>(
  null
);

export function useWidgetsContext() {
  const context = useContext(WidgetsContext);
  if (!context) throw new Error('widgets context provider not present.');
  return context;
}

export const IndividualWidget = createContext<IndividualWidgetInterface | null>(
  null
);

export function useIndividualWidgetContext() {
  const context = useContext(IndividualWidget);
  if (!context)
    throw new Error('individual widget context provider not present.');
  return context;
}

//initial context value
export const WidgetContext = {
  _id: '',
  elements: [] as Element[],
  formula: '',
  name: 'default calculator',
  lastLetter: '@',
  width: 720,
  resultDescription: 'Result description placeholder',
  resultValueDesc: 'USD',
  result: [] as Result[],
};

export const InputMetas = {
  Slider: {
    elementType: 'Slider',
    elementDescription: 'Slider',
    value: 0,
    min: 0,
    max: 10,
    step: 1,
  },
  ValueInput: {
    elementType: 'ValueInput',
    elementDescription: 'Input',
    value: '',
  },
  List: {
    elementType: 'List',
    elementDescription: 'List',
    value: '',
    list: [],
  },
  Text: {
    elementType: 'Text',
    elementDescription: 'Text',
  },
};