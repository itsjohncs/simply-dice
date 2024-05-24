import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: [
        "@shmeppy/dumb-dice-components",
        "@shmeppy/client-utils",
    ],
    webpack(webpackConfig) {
        webpackConfig.resolve.symlinks = false;
        return {
            ...webpackConfig,
        };
    },
};

export default nextConfig;
