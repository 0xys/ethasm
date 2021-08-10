export const sanitize = (before: string): string => {
    return before
        .replace(/\n[ \t]+/g, '\n')             //  remove leading spaces
        .replace(/[ ][ ]+/g, '')                //  remove random spaces
        .replace(/[ \t]*[/][/].*\n/g, '\n');    //  remove line comments
}