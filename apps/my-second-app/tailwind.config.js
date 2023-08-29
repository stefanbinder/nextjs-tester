const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const myPreset = require('../../dist/libs/tailwind-config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [myPreset],
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
