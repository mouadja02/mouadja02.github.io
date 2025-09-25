/**
 * Get the correct image path for both development and production environments
 * In development: /images/filename.png
 * In production: /MJEngi/images/filename.png
 */
export function getImagePath(imagePath: string): string {
  // Remove leading slash if present
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  // In production, add basePath prefix
  if (process.env.NODE_ENV === 'production') {
    return `/MJEngi/${cleanPath}`;
  }
  
  // In development, use path as-is (with leading slash)
  return `/${cleanPath}`;
}

/**
 * Get the correct asset path for any public asset
 */
export function getAssetPath(assetPath: string): string {
  return getImagePath(assetPath);
} 