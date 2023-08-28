import SD from 'style-dictionary';
import StyleDictionary from 'style-dictionary-utils';
import parser from 'style-dictionary-utils/dist/parser/w3c-token-json5-parser.js';
StyleDictionary.registerParser(parser.w3cTokenJson5Parser);

// to run type: "node ./build.mjs"
const myStyleDictionary = StyleDictionary.extend({
  source: ['tokens/**/*.json5'],
  platforms: {
    css: {
      transforms: [
        ...SD.transformGroup['css'],
        'shadow/css',
        'border/css',
        'dimension/pixelToRem',
        'fontFamily/css',
      ],
      options: {
        basePxFontSize: 16,
      },
      buildPath: 'build/css/',
      files: [
        {
          filter: () => true,
          destination: 'variables.css',
          format: 'css/variables',
        },
      ],
    },
  },
});

myStyleDictionary.buildAllPlatforms();
