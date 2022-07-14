import { t as typy } from 'typy';

export const getResponsiveURL = (
  thumbnails?: Thumbnail[],
  width?: number,
): string | null => {
  if (!width || !thumbnails || typy(thumbnails).isEmptyArray) return null;
  const thumbs = [...thumbnails].sort((f, s) => f.width - s.width);
  const [thumb] = thumbs
    .filter((t) => t.width >= width)
    .sort((f, s) => f.width - s.width);

  // If there isn't a thumb big enough, just return the last one
  if (thumb) {
    let { url: turl = null } = thumb;
    return turl;
  }

  const [last] = thumbs.slice(-1);
  let { url: lurl = null } = last;
  return lurl;
};
