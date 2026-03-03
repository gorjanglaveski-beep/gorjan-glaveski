import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Disable the Next.js 15.3+ DevTools overlay that causes the
  // "segment-explorer-node.js#SegmentViewNode not in React Client Manifest"
  // webpack bundler error in development mode.
  devIndicators: false,
}

export default nextConfig
