module.exports = {
    stories: ['../src/**/*.stories.tsx'],
    webpackFinal: async config => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            loader: require.resolve('babel-loader'),
            options: {
                presets: ['@babel/preset-react'],
            },
        });
        config.resolve.extensions.push('.ts', '.tsx');
        return config;
    },
};