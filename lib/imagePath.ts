/**
 * Utility function to get the correct image path with basePath for static export
 * This ensures images work correctly on GitHub Pages with basePath
 */
export function getImagePath(path: string): string {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  
  // Get basePath from environment variable (set in next.config.js)
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  
  // Combine basePath with image path
  return `${basePath}${cleanPath}`
}

