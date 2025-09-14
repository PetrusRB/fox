/**
 * @type {import('next').NextConfig}
 */
const { withNativebase } = require('@native-base/next-adapter')
const withWebpack = {
  webpack(config) {
    if (!config.resolve) {
      config.resolve = {}
    }

    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native': 'react-native-web',
      'react-native$': 'react-native-web',
      'react-native/Libraries/EventEmitter/RCTDeviceEventEmitter$':
        'react-native-web/dist/vendor/react-native/NativeEventEmitter/RCTDeviceEventEmitter',
      'react-native/Libraries/vendor/emitter/EventEmitter$':
        'react-native-web/dist/vendor/react-native/emitter/EventEmitter',
      'react-native/Libraries/EventEmitter/NativeEventEmitter$':
        'react-native-web/dist/vendor/react-native/NativeEventEmitter',
    }
    config.resolve.extensions = [
      '.web.js',
      '.web.jsx',
      '.web.ts',
      '.web.tsx',
      ...(config.resolve?.extensions ?? []),
    ]
    // Loader para fontes (Webpack)
    config.module.rules.push({
      test: /\.(ttf|otf|eot|woff|woff2)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/fonts/[name][ext]',
      },
    })

    return config
  },
}

/**
 * @type {import('next').NextConfig}
 */
const withTurpopack = {
  experimental: {
    turbo: {
      resolveAlias: {
        'react-native': 'react-native-web',
        'react-native/Libraries/EventEmitter/RCTDeviceEventEmitter$':
          'react-native-web/dist/vendor/react-native/NativeEventEmitter/RCTDeviceEventEmitter',
        'react-native/Libraries/vendor/emitter/EventEmitter$':
          'react-native-web/dist/vendor/react-native/emitter/EventEmitter',
        'react-native/Libraries/EventEmitter/NativeEventEmitter$':
          'react-native-web/dist/vendor/react-native/NativeEventEmitter',
      },
      resolveExtensions: [
        '.web.js',
        '.web.jsx',
        '.web.ts',
        '.web.tsx',

        '.js',
        '.mjs',
        '.tsx',
        '.ts',
        '.jsx',
        '.json',
        '.wasm',
      ],
      // Turbopack ainda não suporta loaders personalizados,
      // então precisamos ignorar os .ttf em runtime
      loaders: {
        '.ttf': ['file'],
        '.woff': ['file'],
        '.woff2': ['file'],
        '.otf': ['file'],
        '.eot': ['file'],
      },
    },
  },
}

/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'avatar.iran.liara.run',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'imbsfvotjqhpbvjkhbwi.supabase.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'fwtmxmanjjkhrdvhpref.supabase.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'platform-lookaside.fbsbx.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'fastly.picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  transpilePackages: [
    'react-native',
    'react-native-web',
    'solito',
    'react-native-reanimated',
    'react-native-css-interop',
    'nativewind',
    'moti',
    'react-native-gesture-handler',
    'react-native-svg',
  ],
  webpack: (config, options) => {
    // Loader para fontes
    config.module.rules.push({
      test: /\.(ttf|otf|eot|woff|woff2)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/fonts/[name][ext]',
      },
    })
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
      'app/components/Icons/Icon': path.resolve(
        __dirname,
        'app/components/Icons/Icon.web.tsx'
      ),
      'react-native-svg': 'react-native-svg-web',
    }
    config.resolve.extensions = [
      '.web.js',
      '.web.ts',
      '.web.tsx',
      '.js',
      '.ts',
      '.tsx',
      ...config.resolve.extensions,
    ]
    return config
  },
  compiler: {
    define: {
      __DEV__: JSON.stringify(process.env.NODE_ENV !== 'production'),
    },
  },
  reactStrictMode: false, // reanimated doesn't support this on web

  ...withWebpack,
  ...withTurpopack,
  ...withNativebase,
}
