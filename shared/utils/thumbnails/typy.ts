import t, { addCustomTypes } from 'typy';

addCustomTypes({
  isThumbnail: (input: Thumbnail) => t(input).isObject && t(input, 'url').isString,
  isThumbnailsArray: (input: Thumbnail[]) => (
    t(input).isArray &&
    input.length &&
    input.every(x =>
      // @ts-ignore
      t(x).isThumbnail)),
  isThumbnailsArrayLoose: (input: Thumbnail[]) => (
    t(input).isArray &&
    input.length &&
    // @ts-ignore
    t(input[0]).isThumbnail),
});
