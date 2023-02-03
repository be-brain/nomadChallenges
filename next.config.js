/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: "/source",
                // 유저가 /source로 간다면
                destination: "/destination",
                // 유저를 /destination으로 보내겠다
                permanent: false,
                // 이 redirect가 permanent(영구적)인가?(브라우저나 검색엔진의 기억여부 결정)
            },
            {
                source: "/api/person/:id",
                destination: `https://billions-api.nomadcoders.workers.dev/person/:id`,
                permanent: false,
            },
            // 여기까지하면 이동시 json데이터로 볼수있다
        ];
    },
    // images: {
    //   domains: [`https://billions-api.nomadcoders.workers.dev/`],
    // },
    // images: {
    //   remotePatterns: [
    //     {
    //       protocol: 'https',
    //       hostname: 'example.com',
    //       port: '',
    //       pathname: '/account123/**',
    //     },
    //   ],
    // },
};

module.exports = nextConfig;
