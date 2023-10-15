import MiniCssExtractPlugin, { loader } from 'mini-css-extract-plugin';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';

export const optimization = {
    minimizer: [
        new OptimizeCssAssetsPlugin({}),
    ],
};
export const plugins = [
    new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
    }),
];
export const module = {
    rules: [
        {
            test: /\.css$/,
            use: [loader, 'css-loader'],
        },
    ],
};
