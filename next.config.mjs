/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Local files only — no remote patterns needed.
    // For a fully static export (`output: 'export'`), set `unoptimized: true`.
    formats: ['image/avif', 'image/webp'],
    // Every `quality` value used in the app must be declared — required from Next 16.
    qualities: [72, 82, 88],
  },
};

export default nextConfig;
