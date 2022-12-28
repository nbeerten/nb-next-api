/**
 * Package for deciding whether a specified input needs "A" or "An"
 * @link https://github.com/EamonNerbonne/a-vs-an/ Original source
 * @link https://github.com/chadkirby/Articles This document is refactored from this source. Thanks.
 */
import dict from './dict';

function find(
    word: string,
    obj: any = dict,
    article: string | null = 'a'
) {
    const key = word.slice(0, 1);
    obj = obj[key];
    if (key == null || obj == null) return article;
    return find(word.slice(1), obj, obj._ || article);
};

interface IOptions {
    articleOnly?: boolean;
    capitalize?: boolean;
}

export default function indefinite(input: string, options?: IOptions): string;
export default function indefinite(input: Array<string>, options?: IOptions): Array<string>;

export default function indefinite(
    input: string | Array<string>,
    options: IOptions = {
        articleOnly: false,
        capitalize: false
    }
): string | Array<string> {
    const { articleOnly, capitalize } = options;
    const words = Array.isArray(input) ? input.slice(0) : [input];
    const output: Array<string> = [];
    for (let i = 0, len = words.length; i < len; i++) {
        const word = words[i];
        if (word == null) return;
        const a = find(word);
        if (articleOnly) output.push(`${a}`)
        else output.push(`${a} ${word}`);
    }

    if(capitalize) output.forEach((item, i) => {
        output[i] = item.charAt(0).toUpperCase() + item.slice(1);
    })

    if (output.length <= 1) return output[0];
    else return output;
};

