/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Utility methods for colour manipulation.
 * These methods are not specific to Blockly, and could be factored out into
 * a JavaScript framework such as Closure.
 */
'use strict';

/**
 * Utility methods for colour manipulation.
 * These methods are not specific to Blockly, and could be factored out into
 * a JavaScript framework such as Closure.
 * @namespace Blockly.utils.colour
 */
goog.module('Blockly.utils.colour');

const internalConstants = goog.require('Blockly.internalConstants');


/**
 * Parses a colour from a string.
 * .parse('red') -> '#ff0000'
 * .parse('#f00') -> '#ff0000'
 * .parse('#ff0000') -> '#ff0000'
 * .parse('0xff0000') -> '#ff0000'
 * .parse('rgb(255, 0, 0)') -> '#ff0000'
 * @param {string|number} str Colour in some CSS format.
 * @return {?string} A string containing a hex representation of the colour,
 *   or null if can't be parsed.
 * @alias Blockly.utils.colour.parse
 */
const parse = function(str) {
  str = String(str).toLowerCase().trim();
  let hex = names[str];
  if (hex) {
    // e.g. 'red'
    return hex;
  }
  hex = str.substring(0, 2) === '0x' ? '#' + str.substring(2) : str;
  hex = hex[0] === '#' ? hex : '#' + hex;
  if (/^#[0-9a-f]{6}$/.test(hex)) {
    // e.g. '#00ff88'
    return hex;
  }
  if (/^#[0-9a-f]{3}$/.test(hex)) {
    // e.g. '#0f8'
    return ['#', hex[1], hex[1], hex[2], hex[2], hex[3], hex[3]].join('');
  }
  const rgb = str.match(/^(?:rgb)?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/);
  if (rgb) {
    // e.g. 'rgb(0, 128, 255)'
    const r = Number(rgb[1]);
    const g = Number(rgb[2]);
    const b = Number(rgb[3]);
    if (r >= 0 && r < 256 && g >= 0 && g < 256 && b >= 0 && b < 256) {
      return rgbToHex(r, g, b);
    }
  }
  return null;
};
exports.parse = parse;

/**
 * Converts a colour from RGB to hex representation.
 * @param {number} r Amount of red, int between 0 and 255.
 * @param {number} g Amount of green, int between 0 and 255.
 * @param {number} b Amount of blue, int between 0 and 255.
 * @return {string} Hex representation of the colour.
 * @alias Blockly.utils.colour.rgbToHex
 */
const rgbToHex = function(r, g, b) {
  const rgb = (r << 16) | (g << 8) | b;
  if (r < 0x10) {
    return '#' + (0x1000000 | rgb).toString(16).substr(1);
  }
  return '#' + rgb.toString(16);
};
exports.rgbToHex = rgbToHex;

/**
 * Converts a colour to RGB.
 * @param {string} colour String representing colour in any
 *     colour format ('#ff0000', 'red', '0xff000', etc).
 * @return {!Array<number>} RGB representation of the colour.
 * @alias Blockly.utils.colour.hexToRgb
 */
const hexToRgb = function(colour) {
  const hex = parse(colour);
  if (!hex) {
    return [0, 0, 0];
  }

  const rgb = parseInt(hex.substr(1), 16);
  const r = rgb >> 16;
  const g = (rgb >> 8) & 255;
  const b = rgb & 255;

  return [r, g, b];
};
exports.hexToRgb = hexToRgb;

/**
 * Converts an HSV triplet to hex representation.
 * @param {number} h Hue value in [0, 360].
 * @param {number} s Saturation value in [0, 1].
 * @param {number} v Brightness in [0, 255].
 * @return {string} Hex representation of the colour.
 * @alias Blockly.utils.colour.hsvToHex
 */
const hsvToHex = function(h, s, v) {
  let red = 0;
  let green = 0;
  let blue = 0;
  if (s === 0) {
    red = v;
    green = v;
    blue = v;
  } else {
    const sextant = Math.floor(h / 60);
    const remainder = (h / 60) - sextant;
    const val1 = v * (1 - s);
    const val2 = v * (1 - (s * remainder));
    const val3 = v * (1 - (s * (1 - remainder)));
    switch (sextant) {
      case 1:
        red = val2;
        green = v;
        blue = val1;
        break;
      case 2:
        red = val1;
        green = v;
        blue = val3;
        break;
      case 3:
        red = val1;
        green = val2;
        blue = v;
        break;
      case 4:
        red = val3;
        green = val1;
        blue = v;
        break;
      case 5:
        red = v;
        green = val1;
        blue = val2;
        break;
      case 6:
      case 0:
        red = v;
        green = val3;
        blue = val1;
        break;
    }
  }
  return rgbToHex(Math.floor(red), Math.floor(green), Math.floor(blue));
};
exports.hsvToHex = hsvToHex;

/**
 * Blend two colours together, using the specified factor to indicate the
 * weight given to the first colour.
 * @param {string} colour1 First colour.
 * @param {string} colour2 Second colour.
 * @param {number} factor The weight to be given to colour1 over colour2.
 *     Values should be in the range [0, 1].
 * @return {?string} Combined colour represented in hex.
 * @alias Blockly.utils.colour.blend
 */
const blend = function(colour1, colour2, factor) {
  const hex1 = parse(colour1);
  if (!hex1) {
    return null;
  }
  const hex2 = parse(colour2);
  if (!hex2) {
    return null;
  }
  const rgb1 = hexToRgb(hex1);
  const rgb2 = hexToRgb(hex2);
  const r = Math.round(rgb2[0] + factor * (rgb1[0] - rgb2[0]));
  const g = Math.round(rgb2[1] + factor * (rgb1[1] - rgb2[1]));
  const b = Math.round(rgb2[2] + factor * (rgb1[2] - rgb2[2]));
  return rgbToHex(r, g, b);
};
exports.blend = blend;

/**
 * A map that contains the 16 basic colour keywords as defined by W3C:
 * https://www.w3.org/TR/2018/REC-css-color-3-20180619/#html4
 * The keys of this map are the lowercase "readable" names of the colours,
 * while the values are the "hex" values.
 *
 * @type {!Object<string, string>}
 * @alias Blockly.utils.colour.names
 */
const names = {
  'aqua': '#00ffff',
  'black': '#000000',
  'blue': '#0000ff',
  'fuchsia': '#ff00ff',
  'gray': '#808080',
  'green': '#008000',
  'lime': '#00ff00',
  'maroon': '#800000',
  'navy': '#000080',
  'olive': '#808000',
  'purple': '#800080',
  'red': '#ff0000',
  'silver': '#c0c0c0',
  'teal': '#008080',
  'white': '#ffffff',
  'yellow': '#ffff00',
};
exports.names = names;

/**
 * Convert a hue (HSV model) into an RGB hex triplet.
 * @param {number} hue Hue on a colour wheel (0-360).
 * @return {string} RGB code, e.g. '#5ba65b'.
 * @alias Blockly.utils.colour.hueToHex
 */
const hueToHex = function(hue) {
  return hsvToHex(
      hue, internalConstants.HSV_SATURATION, internalConstants.HSV_VALUE * 255);
};
exports.hueToHex = hueToHex;
