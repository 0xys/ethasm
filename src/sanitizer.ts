export const sanitize = (before: string): string => {
    const s1 = removeSpaces(before);
    const s2 = removeLineComment(s1);
    return s2;
}

const removeSpaces = (before: string): string => {
    return before.replace(/[ ][ ]+/g, '');
}

const removeLineComment = (before: string): string => {
    return before.replace(/[/][/].*\n/g, '\n');
}