// Калкулаторът за оферти е отделен Vercel проект (zelenovkasti-oferta).
const OFERTA_URL = 'https://zelenovkasti-oferta.vercel.app'

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Посетителят остава на zelenovkashti.vercel.app/oferta, а страницата идва от калкулатора.
  // Вторият ред е за неговите CSS/JS файлове и API (/oferta/_next/..., /oferta/api/quotes).
  async rewrites() {
    return [
      { source: '/oferta', destination: `${OFERTA_URL}/oferta` },
      { source: '/oferta/:path*', destination: `${OFERTA_URL}/oferta/:path*` },
    ]
  },
}

export default nextConfig
