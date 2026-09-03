import postcssPxToRem from 'postcss-pxtorem';
import autoprefixer from 'autoprefixer';

export default ({ env }) => {
  const isProd = env === 'production'

  return {
    plugins: isProd
      ? [
        autoprefixer(),
        postcssPxToRem({
          rootValue: 16,
          propList: ['*'],
          mediaQuery: true,
          minPixelValue: 2,
        }),
      ] : [autoprefixer()],
  };
}

