import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { loadEnv } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import vueI18n from '@intlify/vite-plugin-vue-i18n'

// https://vitejs.dev/config/
export default ({ mode }) => {
  const envVariables = loadEnv(mode, process.cwd())
  return {
    base: `${envVariables.VITE_APP_BASE}/`,
    plugins: [
      vue(),
      vueI18n({
        include: resolve(__dirname, './src/locales/**'),
      }),
      // Change by native implementation on the future
      // https://github.com/vitejs/vite/issues/3105
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            env: envVariables,
          },
        },
      }),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
  }
}
