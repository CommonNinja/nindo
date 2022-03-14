export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'white',
    values: [
      { name: 'white', value: '#fff' },
      { name: 'light', value: '#EEEEEE' },
      { name: 'black', value: '#070707' },
      { name: 'purple', value: '#A6B1E1' },
      { name: 'light-blue', value: '#9ADCFF' },
      { name: 'pink', value: '#FF8AAE' },
      { name: 'blue', value: '#153243' },
    ],
  },
}