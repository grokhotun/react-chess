export default {
  babel: {
    plugins: [
      [
        'babel-plugin-styled-components',
        {
          ssr: false,
        },
      ],
    ],
  },
};
