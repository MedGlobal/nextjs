import { addCustomTypes } from 'typy';

addCustomTypes({
  isFile: (input: any) => input instanceof File,
  isBlob: (input: any) => input instanceof Blob,
});
