/**
 * Encodes a product image path for use in img src.
 * Paths from exProducts are stored as raw folder/filenames; encoding each segment
 * ensures special characters (spaces, &, ®, é, etc.) work correctly in URLs.
 */
export function productImageUrl(path: string): string {
  if (!path) return path;
  return path
    .split('/')
    .map((segment) => encodeURIComponent(segment))
    .join('/');
}
