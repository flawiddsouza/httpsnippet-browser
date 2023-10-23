import path from 'path'
import { createRequire } from 'module'
import webpack from 'webpack'

const require = createRequire(import.meta.url)

export default {
    entry: './src/main.js',
    output: {
        path: path.resolve('dist'),
        filename: 'httpsnippet-browser.js',
        library: {
            type: 'module'
        }
    },
    resolve: {
        fallback: {
            'stream': require.resolve('stream-browserify'),
        }
    },
    mode: 'production',
    experiments: {
        outputModule: true
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.nextTick': JSON.stringify(true),
        })
    ]
}
