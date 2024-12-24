import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https', // 协议
                hostname: 'images.unsplash.com', // 域名
                port: '', // 端口
                pathname: '/**', // 路径
                search: '', // 配置参数
            },
        ],
    },
};

export default nextConfig;
