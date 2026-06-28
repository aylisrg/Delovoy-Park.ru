/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  // Сайт отдаётся с корня домена delovoy-park.ru (nginx/статика).
  // basePath НЕ задаём: иначе ассеты ссылались бы на /Delovoy-Park.ru/_next/...
  // и отдавали бы 404 → белый экран в браузере.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
