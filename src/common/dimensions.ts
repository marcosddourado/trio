import {
  widthPercentageToDP as wp2dp,
  heightPercentageToDP as hp2dp,
} from 'react-native-responsive-screen';

// TODO: add support for orientation change
// https://medium.com/react-native-training/build-responsive-react-native-views-for-any-device-and-support-orientation-change-1c8beba5bc23
// https://github.com/marudy/react-native-responsive-screen

/**
 * Width-Percentage
 * Converts width dimension to percentage
 * 750, 1492 - design scale
 * @param dimension directly taken from design wireframes
 * @returns {string} percentage string e.g. '25%'
 */
export const wp = (dimension: number) => {
  return wp2dp((dimension / 750) * 100);
};

/**
 * Height-Percentage
 * Converts width dimension to percentage
 * * 750, 1492 - design scale
 * @param dimension directly taken from design wireframes
 * @returns {string} percentage string e.g. '25%'
 */
export const hp = (dimension: number) => {
  return hp2dp((dimension / 1492) * 100);
};
