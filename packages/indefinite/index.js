import { capitalize } from './helpers';
import rules from './rules';

function handleOptions(article, opts, word) {
    article = capitalize(article, opts);

    if (opts.articleOnly) {
        return article;
    }

    return `${article} ${word}`;
}

export default function indefinite(word, opts = {}) {
    let article;

    rules.forEach((rule) => {
        if (rule.check(word, opts)) {
            article = rule.run(word, opts);
            return true;
        }
    });

    return handleOptions(article, opts, word);
}
