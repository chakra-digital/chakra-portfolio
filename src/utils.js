/**
 * A function to turn a slug into a word
 *
 * @param {string} slug - a dash-separated string that we want to turn into a word
 * @return {string} - A human readable title
 */
export const wordify = slug =>
  slug
    .split('-')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
