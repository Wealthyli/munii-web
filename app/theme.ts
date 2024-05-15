// theme.ts

import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      500: '#CAFF01',
      // Add more shades as needed
    },
    grey: {
      500: '#7C7C7C',
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
});

export default theme;
