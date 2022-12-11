const STARTS_WITH_VOWEL = /^[aeiouAEIOU]/;

/**
 * Array#indexOf is faster IF the word starts with "a" (for example),
 * but negligibly faster when you have to .toLowerCase() the word, and
 * slower if the word happens to start with (e.g.) "u."
 */
export function startsWithVowel(word) { return STARTS_WITH_VOWEL.test(word); }

export function capitalize(article, opts) {
  if (opts.capitalize) {
    article = `${article.charAt(0).toUpperCase()}${article.slice(1)}`;
  }

  return article;
}
