/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.webm$/,
            use: {
                loader: 'file-loader',
                options: {
                    publicPath: '/_next/static/assets/', // Adjust the path as needed
                    outputPath: 'static/assets/', // Adjust the path as needed
                    name: '[name].[hash].[ext]',
                    esModule: false,
                },
            },
        });

        return config;
    },
};

module.exports = nextConfig;
