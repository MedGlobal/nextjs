import t, { addCustomTypes } from 'typy';

// eslint-disable-next-line
const rUUID = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

addCustomTypes({
  isUUID: (input: string) => t(input).isString && rUUID.test(input),
});
