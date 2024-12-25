import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        localPatterns: [
            {
                pathname: '/assets/images/**',
                search: '',
            },
        ],
        remotePatterns: [
            {
                protocol: 'https', // 协议
                hostname: 'images.unsplash.com', // 域名
                port: '', // 端口
                pathname: '/**', // 路径
                search: '', // 配置参数
            },
            {
                protocol: 'https', // 协议
                hostname: 'images.pexels.com', // 域名
                port: '', // 端口
                pathname: '/photos/**', // 路径
                search: '', // 配置参数
            }
        ],
        // loader: 'custom',
        // loaderFile: './my/image/loader.js',
    },
};

export default nextConfig;
