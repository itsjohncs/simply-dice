import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: [
        "@shmeppy/dumb-dice-components",
        "@shmeppy/client-utils",
    ],
    webpack(webpackConfig) {
        webpackConfig.resolve.alias["@shmeppy/dumb-dice-components"] =
            path.resolve(
                import.meta.dirname,
                "./node_modules/@shmeppy/dumb-dice-components",
            );
        webpackConfig.resolve.alias["@shmeppy/client-utils"] = path.resolve(
            import.meta.dirname,
            "./node_modules/@shmeppy/client-utils",
        );

        return {
            ...webpackConfig,
        };
    },
};

export default nextConfig;
