import DataTypesModule from 'dmn-js-shared/lib/features/data-types';

import DmnPropertiesProvider from './DmnPropertiesProvider';


export default {
  __depends__: [ DataTypesModule ],
  __init__: [ 'dmnPropertiesProvider' ],
  dmnPropertiesProvider: [ 'type', DmnPropertiesProvider ]
};