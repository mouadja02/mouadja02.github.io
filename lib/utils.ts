/**
 * Get the correct image path for both development and production environments
 * For user GitHub Pages sites (username.github.io), paths are at root level
 */
export function getImagePath(imagePath: string): string {
  // Remove leading slash if present
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;

  // Always use root-level paths (no basePath needed for user sites)
  return `/${cleanPath}`;
}

/**
 * Get the correct asset path for any public asset
 */
export function getAssetPath(assetPath: string): string {
  return getImagePath(assetPath);
}