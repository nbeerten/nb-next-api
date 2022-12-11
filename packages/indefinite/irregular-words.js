export function check(word, ending) {
  if (ending) {
    // If the word ends in the ending, remove it.
    let regex = new RegExp(`${ending}$`);
    word = word.replace(regex, '');

    if (word.length <= 1) {
      return false;
    }
  }

  return list.indexOf(word) > -1;
}

export const list = [
  // Nouns: eu like y
  'eunuch', 'eucalyptus', 'eugenics', 'eulogy', 'euphemism', 'euphony', 'euphoria', 'eureka',

  // Adjectives: eu like y
  'euro', 'european', 'euphemistic', 'euphonic', 'euphoric',

  // Adverbs: eu like y
  'euphemistically', 'euphonically', 'euphorically',

  // Nouns: silent h
  'heir', 'heiress', 'herb', 'homage', 'honesty', 'honor', 'honour', 'hour',

  // Adjectives: silent h
  'honest', 'honorous',

  // Adverbs: silent h
  'honestly', 'hourly',

  // Nouns: o like w
  'one', 'ouija',

  // Adjectives: o like w
  'once',

  // Adverbs: o like w

  // Nouns: u like y
  'ubiquity', 'udometer', 'ufo', 'uke', 'ukelele', 'ululate', 'unicorn', 'unicycle', 'uniform',
  'unify', 'union', 'unison', 'unit', 'unity', 'universe', 'university', 'upas', 'ural', 'uranium',
  'urea', 'ureter', 'urethra', 'urine', 'urologist', 'urology', 'urus', 'usage', 'use', 'user', 'usual', 'usurp',
  'usurper', 'usury', 'utensil', 'uterus', 'utility', 'utopia', 'utricle', 'uvarovite', 'uvea', 'uvula', 'utah',
  'utahn',

  // Adjectives: u like y
  'ubiquitous', 'ugandan', 'ukrainian', 'unanimous', 'unicameral', 'unified', 'unique', 'unisex',
  'universal', 'urinal', 'urological', 'useful', 'useless', 'usurious', 'utilitarian',
  'utopic',

  // Adverbs: u like y
  'ubiquitously', 'unanimously', 'unicamerally', 'uniquely', 'universally', 'urologically', 'usefully', 'uselessly', 'usuriously',

  // Nouns: y like i
  'yttria', 'yggdrasil', 'ylem', 'yperite', 'ytterbia', 'ytterbium', 'yttrium',

  // Adjectives: y like i
  'ytterbous', 'ytterbic', 'yttric',

  // Single letters
  'f', 'h', 'l', 'm', 'n', 'r', 's', 'u', 'x'
];
