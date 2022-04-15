import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'
import EslintPlugin from 'vite-plugin-eslint'

const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  // 生产环境路径，类似webpack的assetsPath
  // base: "./", // 类似publicPath，'./'
  resolve: {
    alias: {
      '@': resolve('src')
    }
  },
  build: {
    outDir: "dist",//输出路径
    assetsDir: "static", //指定静态资源存放路径
    sourcemap: false, //是否构建source map 文件
    chunkSizeWarningLimit: 500, //大文件报警
    minify: 'terser', // 混淆器，terser构建后文件体积更小
    terserOptions: {
      // 生产环境移除console
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        // 最小化拆分包
        // manualChunks: (id) => {
        //   if (id.includes('node_modules')) {
        //     return id.toString().split('node_modules/')[1].split('/')[0].toString();
        //   }
        // },
        // 用于从入口点创建的块的打包输出格式[name]表示文件名,[hash]表示该文件内容hash值
        entryFileNames: 'static/js/[name].[hash].js',
        // 用于命名代码拆分时创建的共享块的输出命名
        chunkFileNames: 'static/js/[name].[hash].js',
        // 拆分js到模块文件夹
        // chunkFileNames: (chunkInfo) => {
        //   const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/') : [];
        //   const fileName = facadeModuleId[facadeModuleId.length - 2] || '[name]';
        //   return `js/${fileName}/[name].[hash].js`;
        // },
        // 用于输出静态资源的命名，[ext]表示文件扩展名
        assetFileNames: 'static/[ext]/[name].[hash].[ext]',
      },
    },
  },
  server: {
    https: false, // 是否开启 https
    open: false, // 是否自动在浏览器打开
    port: 8080, // 端口号
    host: "0.0.0.0",
    proxy: {
      "/api": {
        // target: "http://124.221.24.181:3031", // 后台接口
        target: "http://www.cocooco.cn:3031", // 后台接口
        changeOrigin: true,
        secure: false, // 如果是https接口，需要配置这个参数
        // ws: true, //websocket支持
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  // 引入第三方的配置
  optimizeDeps: {
    include: [],
  },
  plugins: [
    vue(),
    // gzip
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
    EslintPlugin({
      throwOnWarning: false,
      throwOnError: false,
      cache: false,
      include: ['src/**/*.vue', 'src/**/*.ts', 'src/**/*.tsx'] // 检查的文件
    })
  ],
})
