/*
Language: Jule
Author: Mertcan DAVULCU
Website: https://jule.dev
Category: common, system
*/

/** @type LanguageFn */
function jule(hljs) {
    const regex = hljs.regex;

    const FUNCTION_INVOKE = {
        className: "title.function.invoke",
        relevance: 0,
        begin: regex.concat(
            /\b/,
            /(?!let|for|if|else|match\b)/,
            hljs.IDENT_RE,
            regex.lookahead(/\s*\(/))
    };

    const NUMBER_SUFFIX = "";

    const KEYWORDS = [
        "map",
        "const",
        "ret",
        "type",
        "for",
        "break",
        "continue",
        "in",
        "if",
        "else",
        "use",
        "pub",
        "goto",
        "enum",
        "struct",
        "co",
        "match",
        "self",
        "trait",
        "impl",
        "cpp",
        "fall",
        "fn",
        "let",
        "unsafe",
        "mut",
        "defer",
        "static",
        "error",
        "chan",
    ];

    const LITERALS = [
        "true",
        "false",
        "nil",
    ];

    const BUILTINS = [
        // functions
        'out',
        'outln',
        'new',
        'make',
        'copy',
        'append',
        'panic',
        'assert',
        'clone',
    ];

    const TYPES = [
        "i8",
        "i16",
        "i32",
        "i64",
        "int",
        "u8",
        "u16",
        "u32",
        "u64",
        "uint",
        "uintptr",
        "byte",
        "rune",
        "f32",
        "f64",
        "str",
        "bool",
        "any",
    ];

    return {
        name: 'Jule',
        aliases: ['jule'],
        keywords: {
            $pattern: hljs.IDENT_RE + '!?',
            type: TYPES,
            keyword: KEYWORDS,
            literal: LITERALS,
            built_in: BUILTINS
        },
        illegal: '</',
        contains: [
            hljs.C_LINE_COMMENT_MODE,
            hljs.COMMENT('/\\*', '\\*/', { contains: ['self'] }),
            hljs.inherit(hljs.QUOTE_STRING_MODE, {
                begin: /b?"/,
                illegal: null
            }),
            {
                className: 'string',
                variants: [
                    { begin: /b?r(#*)"(.|\n)*?"\1(?!#)/ },
                    { begin: /b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/ }
                ]
            },
            {
                className: 'symbol',
                begin: /'[a-zA-Z_][a-zA-Z0-9_]*/
            },
            {
                className: 'number',
                variants: [
                    { begin: '\\b0b([01_]+)' + NUMBER_SUFFIX },
                    { begin: '\\b0o([0-7_]+)' + NUMBER_SUFFIX },
                    { begin: '\\b0x([A-Fa-f0-9_]+)' + NUMBER_SUFFIX },
                    {
                        begin: '\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)'
                            + NUMBER_SUFFIX
                    }
                ],
                relevance: 0
            },
            {
                begin: [
                    /fn/,
                    /\s+/,
                    hljs.UNDERSCORE_IDENT_RE
                ],
                className: {
                    1: "keyword",
                    3: "title.function"
                }
            },
            {
                className: 'meta',
                begin: '#!?\\[',
                end: '\\]',
                contains: [
                    {
                        className: 'string',
                        begin: /"/,
                        end: /"/
                    }
                ]
            },
            {
                begin: [
                    /let/,
                    /\s+/,
                    /(?:mut\s+)?/,
                    hljs.UNDERSCORE_IDENT_RE
                ],
                className: {
                    1: "keyword",
                    3: "keyword",
                    4: "variable"
                }
            },
            // must come before impl/for rule later
            {
                begin: [
                    /for/,
                    /\s+/,
                    hljs.UNDERSCORE_IDENT_RE,
                    /\s+/,
                    /in/
                ],
                className: {
                    1: "keyword",
                    3: "variable",
                    5: "keyword"
                }
            },
            {
                begin: [
                    /type/,
                    /\s+/,
                    hljs.UNDERSCORE_IDENT_RE
                ],
                className: {
                    1: "keyword",
                    3: "title.class"
                }
            },
            {
                begin: [
                    /(?:trait|enum|struct|impl|for)/,
                    /\s+/,
                    hljs.UNDERSCORE_IDENT_RE
                ],
                className: {
                    1: "keyword",
                    3: "title.class"
                }
            },
            FUNCTION_INVOKE,
        ]
    };
}

export default {
    jule,
};
