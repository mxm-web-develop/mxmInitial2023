import { clientPlugin, defineConfig } from '@vitebook/client/node';
import { preactMarkdownPlugin } from '@vitebook/markdown-preact/node';
import { preactPlugin } from '@vitebook/preact/node';
import { defaultThemePlugin, DefaultThemeConfig } from '@vitebook/theme-default/node';
import path from 'path';

export default defineConfig<DefaultThemeConfig>({
  include: ['src/**/*.md', 'src/**/*.story.{jsx,tsx}'],
  plugins: [
    preactMarkdownPlugin(),
    preactPlugin({ appFile: 'App.tsx' }),
    clientPlugin(),
    defaultThemePlugin(),
  ],
  vite:{
    resolve:{
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "components":path.resolve(__dirname,'..','/src/components')
      },
    }
  },
  site: {
    title: 'Docs',
    description: '',
    theme: {},
  },
});
