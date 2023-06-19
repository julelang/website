const globalsHTML = `
<div class="sub-sub-title"><x class="inline_code">let PUNCTS: []rune</x></div>
Punctuations.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">let SPACES: []rune</x></div>
Space characters.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">let UNARY_OPS: []TokenKind</x></div>
Kind list of unary operators.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">let BIN_OPS: []TokenKind</x></div>
Kind list of binary operators.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">let WEAK_OPS: []TokenKind</x></div>
Kind list of weak operators. <br>
These operators are weak, can used as part of expression.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">let POSTFIX_OPS: []TokenKind</x></div>
List of postfix operators.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">let ASSIGN_OPS: []TokenKind</x></div>
List of assign operators.

`;

const functionsHTML = `
<div class="code">fn lex(mut f: &File, text: str): bool</div>
Lex source code into fileset. <br>
Returns nil if <x class="inline_code">!real(f)</x>. <br>
Returns nil slice for errors if no any error.

<div class="topic-separator"></div>
<div class="code">fn new_file_set(path: str): &File</div>
Returns new File points to Jule file.

<div class="topic-separator"></div>
<div class="code">fn is_unary_op(kind: str): bool</div>
Reports whether kind is unary operator.

<div class="topic-separator"></div>
<div class="code">fn is_bin_op(kind: str): bool</div>
Reports whether kind is binary operator.

<div class="topic-separator"></div>
<div class="code">fn is_weak_op(kind: str): bool</div>
Reports whether kind is weak operator.

<div class="topic-separator"></div>
<div class="code">fn is_str(k: str): bool</div>
Reports whether kind is string literal.

<div class="topic-separator"></div>
<div class="code">fn is_raw_str(k: str): bool</div>
Reports whether kind is raw string literal.

<div class="topic-separator"></div>
<div class="code">fn is_rune(k: str): bool</div>
Reports whether kind is rune literal. <br>
Literal value can be byte or rune.

<div class="topic-separator"></div>
<div class="code">fn is_nil(k: str): bool</div>
Reports whether kind is nil literal.

<div class="topic-separator"></div>
<div class="code">fn is_bool(k: str): bool</div>
Reports whether kind is boolean literal.

<div class="topic-separator"></div>
<div class="code">fn is_float(k: str): bool</div>
Reports whether kind is float.

<div class="topic-separator"></div>
<div class="code">fn is_num(k: str): bool</div>
Reports whether kind is numeric.

<div class="topic-separator"></div>
<div class="code">fn is_lit(k: str): bool</div>
Reports whether kind is literal.

<div class="topic-separator"></div>
<div class="code">fn is_ignore_ident(ident: str): bool</div>
Reports whether identifier is ignore.

<div class="topic-separator"></div>
<div class="code">fn is_anon_ident(ident: str): bool</div>
Reports whether identifier is anonymous.

<div class="topic-separator"></div>
<div class="code">fn is_punct(r: rune): bool</div>
Reports whether rune is punctuation.

<div class="topic-separator"></div>
<div class="code">fn is_space(r: rune): bool</div>
Reports wheter byte is whitespace.

<div class="topic-separator"></div>
<div class="code">fn is_letter(r: rune): bool</div>
Reports whether rune is letter.

<div class="topic-separator"></div>
<div class="code">fn is_ident_rune(s: str): bool</div>
Reports whether firs rune of string is allowed to first rune for identifier.

<div class="topic-separator"></div>
<div class="code">fn is_decimal(b: byte): bool</div>
Reports whether byte is decimal sequence.

<div class="topic-separator"></div>
<div class="code">fn is_binary(b: byte): bool</div>
Reports whether byte is binary sequence.

<div class="topic-separator"></div>
<div class="code">fn is_octal(b: byte): bool</div>
Reports whether byte is octal sequence.

<div class="topic-separator"></div>
<div class="code">fn is_hex(b: byte): bool</div>
Reports whether byte is hexadecimal sequence.

<div class="topic-separator"></div>
<div class="code">fn range(mut i: &int, open: TokenKind, close: TokenKind, mut tokens: []Token): []Token</div>
Returns between of open and close ranges. <br>
Starts selection at <x class="inline_code">i</x>. <br>
Increases <x class="inline_code">i</x> for each selected token. <br>
<x class="inline_code">i</x> points to close range token after selection.
<br><br>
Special cases are:
<ul>
    <li><x class="inline_code">range(i, open, close, tokens) = nil if !real(i)</x></li>
    <li><x class="inline_code">range(i, open, close, tokens) = nil if i == nil</x></li>
    <li><x class="inline_code">range(i, open, close, tokens) = nil if i > tokens.len</x></li>
    <li><x class="inline_code">range(i, open, close, tokens) = nil if tokens[i].id != TokenId.Range</x></li>
    <li><x class="inline_code">range(i, open, close, tokens) = nil if tokens[i].kind != open</x></li>
</ul>

<div class="topic-separator"></div>
<div class="code">fn range_last(mut tokens: []Token): (cutted: []Token, cut: []Token)</div>
Range_last returns last range from tokens. <br>
Returns tokens without range tokens and range tokens. <br>
Range tokens includes left and right range tokens.
<br><br>
Special cases are:
<ul>
    <li><x class="inline_code">range_last(tokens) = tokens, nil if tokens.len == 0</x></li>
    <li><x class="inline_code">range_last(tokens) = tokens, nil if tokens is not has range at last</x></li>
</ul>

<div class="topic-separator"></div>
<div class="code">pub fn parts(mut tokens: []Token, id: TokenId, expr_must: bool): ([][]Token, []Log)</div>
Returns parts separated by given token identifier. <br>
It's skips parentheses ranges. <br>
Logs "missing_expr" if "expr_must == true" and not exist any expression for part.
<br><br>
Special cases are:
<ul>
    <li><x class="inline_code">parts(tokens) = nil if tokens.len == 0</x></li>
</ul>

<div class="topic-separator"></div>
<div class="code">fn is_assign(id: TokenId): bool</div>
Reports given token id is allow for assignment left-expression or not.

<div class="topic-separator"></div>
<div class="code">fn is_postfix_op(kind: TokenKind): bool</div>
Reports whether operator kind is postfix operator.

<div class="topic-separator"></div>
<div class="code">fn is_assign_op(kind: TokenKind): bool</div>
Reports whether operator kind is assignment operator.

`;

const structsHTML = `
<div class="code">struct File</div>
Fileset for lexing.

<br><br>
<strong>Methods:</strong> <br><br>
<div class="inline_code">fn is_ok(self): bool</div> <br>
Reports whether file path is exist and accessible.

<div class="title-separator"></div>
<div class="inline_code">fn path(self): str</div> <br>
Returns path.

<div class="title-separator"></div>
<div class="inline_code">fn dir(self): str</div> <br>
Returns directory of file's path.

<div class="title-separator"></div>
<div class="inline_code">fn name(self): str</div> <br>
Returns filename.

<div class="title-separator"></div>
<div class="inline_code">fn addr(self): uintptr</div> <br>
Returns self as uintptr.

<div class="title-separator"></div>
<div class="inline_code">fn tokens(mut self): []Token</div> <br>
Returns tokens of file. <br>
Tokens are mutable. <br>

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct Token {
    file:   &File
    row:    int
    column: int
    kind:   str
    id:     TokenId
}</div>
Token is lexer token.

<br><br>
<strong>Methods:</strong> <br><br>
<div class="inline_code">fn prec(self): int</div> <br>
Returns operator precedence of token. <br>
Returns <x class="inline_code">-1</x> if token is not operator or <br>
invalid operator for operator precedence.

<div class="title-separator"></div>
<div class="inline_code">fn path(self): str</div> <br>
Returns path.

<div class="title-separator"></div>
<div class="inline_code">fn dir(self): str</div> <br>
Returns directory of file's path.

<div class="title-separator"></div>
<div class="inline_code">fn name(self): str</div> <br>
Returns filename.

<div class="title-separator"></div>
<div class="inline_code">fn addr(self): uintptr</div> <br>
Returns self as uintptr.

<div class="title-separator"></div>
<div class="inline_code">fn tokens(mut self): []Token</div> <br>
Returns tokens of file. <br>
Tokens are mutable.

`;

const enumsHTML = `
<div class="inline_code">enum Idenet: str</div>
<br><br>
Special identifiers.
<br><br>
<strong>Fields:</strong>
<ul>
    <li><x class="inline_code">Ignore</x>: Ignore</li>
    <li><x class="inline_code">Anon</x>: Anonymous</li>
</ul>

<div class="topic-separator"></div>
<div class="inline_code">enum TokenId: uint</div>
<br><br>
Token identities.
<br><br>
<strong>Fields:</strong>
<ul>
    <li><x class="inline_code">Na</x></li>
    <li><x class="inline_code">Prim</x></li>
    <li><x class="inline_code">Ident</x></li>
    <li><x class="inline_code">Range</x></li>
    <li><x class="inline_code">Ret</x></li>
    <li><x class="inline_code">Semicolon</x></li>
    <li><x class="inline_code">Lit</x></li>
    <li><x class="inline_code">Op</x></li>
    <li><x class="inline_code">Comma</x></li>
    <li><x class="inline_code">Const</x></li>
    <li><x class="inline_code">Type</x></li>
    <li><x class="inline_code">Colon</x></li>
    <li><x class="inline_code">Iter</x></li>
    <li><x class="inline_code">Break</x></li>
    <li><x class="inline_code">Cont</x></li>
    <li><x class="inline_code">In</x></li>
    <li><x class="inline_code">If</x></li>
    <li><x class="inline_code">Else</x></li>
    <li><x class="inline_code">Comment</x></li>
    <li><x class="inline_code">Use</x></li>
    <li><x class="inline_code">Dot</x></li>
    <li><x class="inline_code">Pub</x></li>
    <li><x class="inline_code">Goto</x></li>
    <li><x class="inline_code">DblColon</x></li>
    <li><x class="inline_code">Enum</x></li>
    <li><x class="inline_code">Struct</x></li>
    <li><x class="inline_code">Co</x></li>
    <li><x class="inline_code">Match</x></li>
    <li><x class="inline_code">Self</x></li>
    <li><x class="inline_code">Trait</x></li>
    <li><x class="inline_code">Impl</x></li>
    <li><x class="inline_code">Cpp</x></li>
    <li><x class="inline_code">Fall</x></li>
    <li><x class="inline_code">Fn</x></li>
    <li><x class="inline_code">Let</x></li>
    <li><x class="inline_code">Unsafe</x></li>
    <li><x class="inline_code">Mut</x></li>
    <li><x class="inline_code">Defer</x></li>
</ul>


<div class="topic-separator"></div>
<div class="inline_code">enum TokenKind: str</div>
<br><br>
Token kinds.
<br><br>
<strong>Fields:</strong>
<ul>
    <li><x class="inline_code">DblColon</x></li>
    <li><x class="inline_code">Colon</x></li>
    <li><x class="inline_code">Semicolon</x></li>
    <li><x class="inline_code">Comma</x></li>
    <li><x class="inline_code">TripleDot</x></li>
    <li><x class="inline_code">Dot</x></li>
    <li><x class="inline_code">PlusEq</x></li>
    <li><x class="inline_code">MinusEq</x></li>
    <li><x class="inline_code">StarEq</x></li>
    <li><x class="inline_code">SolidusEq</x></li>
    <li><x class="inline_code">PercentEq</x></li>
    <li><x class="inline_code">LshiftEq</x></li>
    <li><x class="inline_code">RshiftEq</x></li>
    <li><x class="inline_code">CaretEq</x></li>
    <li><x class="inline_code">AmperEq</x></li>
    <li><x class="inline_code">VlineEq</x></li>
    <li><x class="inline_code">Eqs</x></li>
    <li><x class="inline_code">NotEq</x></li>
    <li><x class="inline_code">GreatEq</x></li>
    <li><x class="inline_code">LessEq</x></li>
    <li><x class="inline_code">DblAmper</x></li>
    <li><x class="inline_code">DblVline</x></li>
    <li><x class="inline_code">Lshift</x></li>
    <li><x class="inline_code">Rshift</x></li>
    <li><x class="inline_code">DblPlus</x></li>
    <li><x class="inline_code">DblMinus</x></li>
    <li><x class="inline_code">Plus</x></li>
    <li><x class="inline_code">Minus</x></li>
    <li><x class="inline_code">Star</x></li>
    <li><x class="inline_code">Solidus</x></li>
    <li><x class="inline_code">Percent</x></li>
    <li><x class="inline_code">Amper</x></li>
    <li><x class="inline_code">Vline</x></li>
    <li><x class="inline_code">Caret</x></li>
    <li><x class="inline_code">Excl</x></li>
    <li><x class="inline_code">Lt</x></li>
    <li><x class="inline_code">Gt</x></li>
    <li><x class="inline_code">Eq</x></li>
    <li><x class="inline_code">LnComment</x></li>
    <li><x class="inline_code">RangLComment</x></li>
    <li><x class="inline_code">RangRComment</x></li>
    <li><x class="inline_code">LParent</x></li>
    <li><x class="inline_code">RParent</x></li>
    <li><x class="inline_code">LBracket</x></li>
    <li><x class="inline_code">RBracket</x></li>
    <li><x class="inline_code">LBrace</x></li>
    <li><x class="inline_code">RBrace</x></li>
    <li><x class="inline_code">I8</x></li>
    <li><x class="inline_code">I16</x></li>
    <li><x class="inline_code">I32</x></li>
    <li><x class="inline_code">I64</x></li>
    <li><x class="inline_code">U8</x></li>
    <li><x class="inline_code">U16</x></li>
    <li><x class="inline_code">U32</x></li>
    <li><x class="inline_code">U64</x></li>
    <li><x class="inline_code">Uint</x></li>
    <li><x class="inline_code">Int</x></li>
    <li><x class="inline_code">Uintptr</x></li>
    <li><x class="inline_code">Bool</x></li>
    <li><x class="inline_code">Str</x></li>
    <li><x class="inline_code">Any</x></li>
    <li><x class="inline_code">True</x></li>
    <li><x class="inline_code">False</x></li>
    <li><x class="inline_code">Nil</x></li>
    <li><x class="inline_code">Const</x></li>
    <li><x class="inline_code">Ret</x></li>
    <li><x class="inline_code">Type</x></li>
    <li><x class="inline_code">Iter</x></li>
    <li><x class="inline_code">Break</x></li>
    <li><x class="inline_code">Cont</x></li>
    <li><x class="inline_code">In</x></li>
    <li><x class="inline_code">If</x></li>
    <li><x class="inline_code">Else</x></li>
    <li><x class="inline_code">Use</x></li>
    <li><x class="inline_code">Pub</x></li>
    <li><x class="inline_code">Goto</x></li>
    <li><x class="inline_code">Enum</x></li>
    <li><x class="inline_code">Struct</x></li>
    <li><x class="inline_code">Co</x></li>
    <li><x class="inline_code">Match</x></li>
    <li><x class="inline_code">Self</x></li>
    <li><x class="inline_code">Trait</x></li>
    <li><x class="inline_code">Impl</x></li>
    <li><x class="inline_code">Cpp</x></li>
    <li><x class="inline_code">Fall</x></li>
    <li><x class="inline_code">Fn</x></li>
    <li><x class="inline_code">Let</x></li>
    <li><x class="inline_code">Unsafe</x></li>
    <li><x class="inline_code">Mut</x></li>
    <li><x class="inline_code">Defer</x></li>
</ul>

`;

const globals = document.getElementById("globals");
const functions = document.getElementById("functions");
const structs = document.getElementById("structs");
const enums = document.getElementById("enums");

const nav = new SideNavigator();
nav.navigations = [
    [globals, globalsHTML],
    [functions, functionsHTML],
    [structs, structsHTML],
    [enums, enumsHTML],
];

nav.set_events();
nav.set_content_url();
