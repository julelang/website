const type_aliasesHTML = `
<div class="sub-sub-title"><x class="inline_code">type NodeData: any</x></div>
Type of AST Node's data.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">type TypeDeclKind: any</x></div>
Kind type of type declarations.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">type ExprData: any</x></div>
Type of Expr's data.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">type IterKind: any</x></div>
Type of Iter's kind.

`;

const structsHTML = `
<div class="code">struct Ast {
    file:           &File // From std::jule::lex
    top_directives: []&Directive
    use_decls:      []&UseDecl
    impls:          []&Impl
    comments:       []&Comment

    // Possible types:
    //  &EnumDecl
    //  &FnDecl
    //  &StructDecl
    //  &TraitDecl
    //  &TypeAliasDecl
    //  &VarDecl
    decls: []Node
}</div>
Abstract syntax tree.

<div class="topic-separator"></div>
<div class="code">struct Node {
    token: Token // From std::jule::lex
    data:  NodeData
}</div>
AST Node.

<br><br>
<strong>Methods:</strong> <br><br>
<div class="inline_code">fn is_decl(self): bool</div> <br>
Reports whether node data is declaration.

<div class="title-separator"></div>
<div class="inline_code">fn is_comment(self): bool</div> <br>
Reports whether node data is comment or comment group.

<div class="title-separator"></div>
<div class="inline_code">fn is_impl(self): bool</div> <br>
Reports whether node data is impl.

<div class="title-separator"></div>
<div class="inline_code">fn is_use_decl(self): bool</div> <br>
Reports whether node data is use declaration.

<div class="topic-separator"></div>
<div class="code">struct CommentGorup {
    comments: []&Comment
}</div>
Comment group.


<div class="topic-separator"></div>
<div class="code">struct Comment {
    token: Token // From std::jule::lex
    text:  str
}</div>
Comment line.

<br><br>
<strong>Methods:</strong> <br><br>
<div class="inline_code">fn is_directive(self): bool</div> <br>
Reports whether comment is directive.


<div class="topic-separator"></div>
<div class="code">struct Directive {
    token: Token // From std::jule::lex
    tag:   str
    args:  []str
}</div>
Directive.


<div class="topic-separator"></div>
<div class="code">struct TypeDecl {
    token: Token // From std::jule::lex
    kind:  TypeDeclKind
}</div>
Type declaration. <br>
Also represents type expression.
<br><br>
For primitive types:
<ul>
    <li>Represented by IdentTypeDecl</li>
    <li>Token's identity is data type</li>
    <li>Primitive type kind is Ident</li>
</ul>

For function types:
<ul>
    <li>Function types represented by &FnDecl</li>
</ul>


<div class="topic-separator"></div>
<div class="code">struct IdentTypeDecl {
    token:      Token // From std::jule::lex
    ident:      str
    cpp_linked: bool
    generics:   []&TypeDecl
}</div>
Identifier type.

<br><br>
<strong>Methods:</strong> <br><br>
<div class="inline_code">fn is_prim(self): bool</div> <br>
Reports whether identifier is primitive type.


<div class="topic-separator"></div>
<div class="code">struct NamespaceTypeDecl {
    idents: []Token    // Token from std::jule::lex
    kind:   &IdentTypeDecl
}</div>
Namespace chain type.


<div class="topic-separator"></div>
<div class="code">struct RefTypeDecl {
    elem: &TypeDecl
}</div>
Reference type.


<div class="topic-separator"></div>
<div class="code">struct SlcTypeDecl {
    elem: &TypeDecl
}</div>
Slice type.


<div class="topic-separator"></div>
<div class="code">struct TupleTypeDecl {
    types: []&TypeDecl
}</div>
Tuple type.

<div class="topic-separator"></div>
<div class="code">struct PtrTypeDecl {
    elem: &TypeDecl
}</div>
Pointer type.

<br><br>
<strong>Methods:</strong> <br><br>
<div class="inline_code">fn is_unsafe(self): bool</div> <br>
Reports whether pointer is unsafe pointer (*unsafe).

<div class="topic-separator"></div>
<div class="code">struct ArrTypeDecl {
    elem: &TypeDecl
    size: &Expr
}</div>
Array type. <br>
Size expression is nil for auto-sized array.

<br><br>
<strong>Methods:</strong> <br><br>
<div class="inline_code">auto_sized(self): bool</div> <br>
Reports whether array is auto-sized.

<div class="topic-separator"></div>
<div class="code">struct MapTypeDecl {
    key: &TypeDecl
    val: &TypeDecl
}</div>
Map type.


<div class="topic-separator"></div>
<div class="code">struct RetTypeDecl {
    kind:   &TypeDecl
    idents: []Token // Token from std::jule::lex
}</div>
Return type. <br>
Kind and idents is nil for void type.


<div class="topic-separator"></div>
<div class="code">struct Expr {
    token: Token // From std::jule::lex
    kind:  ExprData
}</div>
Expression.

<br><br>
<strong>Methods:</strong> <br><br>
<div class="inline_code">fn is_fn_call(self): bool</div> <br>
Reports whether expression kind is function call.


<div class="topic-separator"></div>
<div class="code">struct TupleExpr {
    expr: []ExprData
}</div>
Tuple expression.


<div class="topic-separator"></div>
<div class="code">struct LitExpr {
    token: Token // From std::jule::lex
    value: str
}</div>
Literal expression.

<br><br>
<strong>Methods:</strong> <br><br>
<div class="inline_code">fn is_nil(self): bool</div> <br>
Reports whether literal is nil value.


<div class="topic-separator"></div>
<div class="code">struct UnsafeExpr {
    token: Token // From std::jule::lex
    expr:   ExprData
}</div>
Unsafe expression.


<div class="topic-separator"></div>
<div class="code">struct IdentExpr {
    token:      Token // From std::jule::lex
    ident:      str
    cpp_linked: bool
}</div>


<br><br>
<strong>Methods:</strong> <br><br>
<div class="inline_code">fn is_self(self): bool</div> <br>
Reports whether identifier is self keyword.


<div class="topic-separator"></div>
<div class="code">struct UnaryExpr {
    op:   Token // From std::jule::lex
    expr: ExprData
}</div>


<div class="topic-separator"></div>
<div class="code">struct VariadicExpr {
    token: Token // From std::jule::lex
    expr:  ExprData
}</div>
Variadiced expression.


<div class="topic-separator"></div>
<div class="code">struct CastExpr {
    kind: &TypeDecl
    expr: ExprData
}</div>
Casting expression.


<div class="topic-separator"></div>
<div class="code">struct NsSelectionExpr {
    ns:    []Token // Token from std::jule::lex
    ident: Token
}</div>
Namespace identifier selection expression.


<div class="topic-separator"></div>
<div class="code">struct SubIdentExpr {
    is_self: bool
    expr:    ExprData
    ident:   Token // From std::jule::lex
}</div>
Object sub identifier selection expression.


<div class="topic-separator"></div>
<div class="code">struct BinopExpr {
    left:  ExprData
    right: ExprData
    op:    Token // From std::jule::lex
}</div>
Binary operation.


<div class="topic-separator"></div>
<div class="code">struct FnCallExpr {
    token:      Token // From std::jule::lex
    expr:       &Expr
    generics:   []&TypeDecl
    args:       []&Expr
    concurrent: bool
}</div>
Function call expression kind.


<div class="topic-separator"></div>
<div class="code">struct FieldExprPair {
    field: Token // From std::jule::lex
    expr:  ExprData
}</div>
Field-Expression pair.

<br><br>
<strong>Methods:</strong> <br><br>
<div class="inline_code">fn is_targeted(self): bool</div> <br>
Reports whether pair targeted field.


<div class="topic-separator"></div>
<div class="code">struct StructLit {
    kind:  &TypeDecl
    exprs: []ExprData
}</div>
Struct literal instiating expression.


<div class="topic-separator"></div>
<div class="code">struct BraceLit {
    token: Token // From std::jule::lex
    exprs: []ExprData
}</div>
Anonymous brace instiating expression.

<br><br>
<strong>Methods:</strong> <br><br>
<div class="inline_code">fn is_empty(self): bool</div> <br>
Reports whether literal is empty.


<div class="topic-separator"></div>
<div class="code">struct KeyValPair {
    key:   ExprData
    val:   ExprData
    colon: Token // From std::jule::lex
}</div>
Key-value pair expression.


<div class="topic-separator"></div>
<div class="code">struct SliceExpr {
    token: Token // From std::jule::lex
    elems: []ExprData
}</div>
Slice initiating expression. <br>
Also represents array initiating expression.

<br><br>
<strong>Methods:</strong> <br><br>
<div class="inline_code">fn is_empty(self): bool</div> <br>
Reports whether slice is empty.


<div class="topic-separator"></div>
<div class="code">struct IndexingExpr {
    token: Token
    expr:  ExprData
    index: ExprData
}</div>
Indexing expression.


<div class="topic-separator"></div>
<div class="code">struct SliceExpr {
    token: Token // From std::jule::lex
    expr:  ExprData
    start: ExprData
    to:    ExprData
}</div>
Slicing expression.


<div class="topic-separator"></div>
<div class="code">struct GenericDecl {
    token: Token // From std::jule::lex
    ident: str
}</div>
Generic type declaration.


<div class="topic-separator"></div>
<div class="code">struct LabelSt {
    token: Token // From std::jule::lex
    ident: str
}</div>
Label statement.


<div class="topic-separator"></div>
<div class="code">struct GotoSt {
    token: Token // From std::jule::lex
    label: Token
}</div>
Goto statement.

<div class="topic-separator"></div>
<div class="code">struct FallSt {
    token: Token // From std::jule::lex
}</div>
Fall statement.


<div class="topic-separator"></div>
<div class="code">struct AssignLeft {
    token:   Token // From std::jule::lex
    mutable: bool
    ident:   str
    expr:    &Expr
}</div>
Left expression of assign statement.


<div class="topic-separator"></div>
<div class="code">struct AssignSt {
    declarative: bool
    setter:      Token
    left:        []&AssignLeft
    right:       &Expr
}</div>
Assign statement.


<div class="topic-separator"></div>
<div class="code">struct ScopeTree {
    parent:   &ScopeTree
    unsafety: bool
    deferred: bool
    stmts:    []NodeData
}</div>
Scope tree.


<div class="topic-separator"></div>
<div class="code">struct ParamDecl {
    token:    Token // From std::jule::lex
    mutable:  bool
    variadic: bool
    kind:     &TypeDecl
    ident:    str
}</div>
Parameter.

<br><br>
<strong>Methods:</strong> <br><br>
<div class="inline_code">fn is_self(self): bool</div> <br>
Reports whether parameter is self (receiver) parameter.

<div class="title-separator"></div>
<div class="inline_code">fn is_ref(self): bool</div>
Reports whether self (receivers) parameter is reference.


<div class="topic-separator"></div>
<div class="code">struct FnDecl {
    token:        Token // From std::jule::lex
    global:       bool
    unsafety:     bool
    public:       bool
    cpp_linked:   bool
    ident:        str
    directives:   []&Directive
    doc_comments: &CommentGroup
    scope:        &ScopeTree
    generics:     []&GenericDecl
    result:       &RetTypeDecl
    params:       []&ParamDecl
}</div>
Function declaration. <br>
Also represents anonymous function expression.


<div class="topic-separator"></div>
<div class="code">struct VarDecl {
    scope:        &ScopeTree    // nil for global scopes
    token:        Token // From std::jule::lex
    ident:        str
    cpp_linked:   bool
    public:       bool
    mutable:      bool
    constant:     bool
    doc_comments: &CommentGroup
    kind:         &TypeDecl     // nil for auto-typed
    expr:         &Expr
}</div>
Variable declaration.

<div class="topic-separator"></div>
<div class="code">struct RetSt {
    token: Token // From std::jule::lex
    expr:  &Expr
}</div>
Return statement.


<div class="topic-separator"></div>
<div class="code">struct Iter {
    token: Token // From std::jule::lex
    kind:  IterKind
    scope: &ScopeTree
}</div>
Iteration.

<br><br>
<strong>Methods:</strong> <br><br>
<div class="inline_code">fn is_inf(self): bool</div> <br>
Reports whether iteration is infinity.


<div class="topic-separator"></div>
<div class="code">struct WhileKind {
    expr:       &Expr
    next:       NodeData
    next_token: Token // From std::jule::lex
}</div>
While iteration kind.

<br><br>
<strong>Methods:</strong> <br><br>
<div class="inline_code">fn is_while_next(self): bool</div> <br>
Reports whether kind is while-next iteration.


<div class="topic-separator"></div>
<div class="code">struct RangeKind {
    in_token: Token     // Token of "in" keyword, from std::jule::lex
    expr:     &Expr
    key_a:    &VarDecl  // first key of range
    key_b:    &VarDecl  // second key of range
}</div>
Range iteration kind.


<div class="topic-separator"></div>
<div class="code">struct BreakSt {
    token: Token // From std::jule::lex
    label: Token
}</div>
Break statement.


<div class="topic-separator"></div>
<div class="code">struct ContSt {
    token: Token // From std::jule::lex
    label: Token
}</div>
Continue statement.


<div class="topic-separator"></div>
<div class="code">struct If {
    token: Token // From std::jule::lex
    expr:  &Expr
    scope: &ScopeTree
}</div>
If condition.


<div class="topic-separator"></div>
<div class="code">struct Else {
    token: Token // From std::jule::lex
    scope: &ScopeTree
}</div>
Else condition.


<div class="code">struct Conditional {
    head:    &If
    tail:    []&If
    default: &Else
}</div>
Condition chain.


<div class="topic-separator"></div>
<div class="code">struct TypeAliasDecl {
    scope:        &ScopeTree
    public:       bool
    cpp_linked:   bool
    token:        Token // From std::jule::lex
    ident:        str
    kind:         &TypeDecl
    doc_comments: &CommentGroup
}</div>
Type alias declaration.


<div class="topic-separator"></div>
<div class="code">struct Case {
    token: Token // From std::jule::lex
    scope: &ScopeTree
    exprs: []&Expr
}</div>
Case of match-case.


<div class="topic-separator"></div>
<div class="code">struct MatchCase {
    token:      Token // From std::jule::lex
    type_match: bool
    expr:       &Expr
    cases:      []&Case
    default:    &Else
}</div>
Match-Case.


<div class="topic-separator"></div>
<div class="code">struct UseDecl {
    token:      Token       // From std::jule::lex
    link_path:  str         // Use declaration path string.
    full:       bool        // Full implicit import.
    selected:   []Token
    cpp_linked: bool        // Cpp header use declaration.
    std:        bool        // Standard package use declaration.
}</div>
Use declaration statement.


<div class="topic-separator"></div>
<div class="code">struct EnumItemDecl {
    token: Token  // From std::jule::lex
    ident: str
    expr:  &Expr   // Nil for auto expression.
}</div>
Enum item.

<br><br>
<strong>Methods:</strong> <br><br>
<div class="inline_code">fn auto_expr(self): bool</div> <br>
Reports whether item has auto expression.


<div class="topic-separator"></div>
<div class="code">struct EnumDecl {
    token:        Token  // From std::jule::lex
    public:       bool
    ident:        str
    kind:         &TypeDecl
    items:        []&EnumItemDecl
    doc_comments: &CommentGroup
}</div>
Enum declaration.

<br><br>
<strong>Methods:</strong> <br><br>
<div class="inline_code">fn default_typed(self): bool</div> <br>
Reports whether enum's type is defualt.


<div class="topic-separator"></div>
<div class="code">struct FieldDecl {
    token:   Token  // From std::jule::lex
    public:  bool
    mutable: bool   // Interior mutability.
    ident:   str
    kind:    &TypeDecl
}</div>
Field declaration.


<div class="topic-separator"></div>
<div class="code">struct StructDecl {
    token:        Token // From std::jule::lex
    ident:        str
    fields:       []&FieldDecl
    public:       bool
    cpp_linked:   bool
    directives:   []&Directive
    doc_comments: &CommentGroup
    generics:     []&GenericDecl
}</div>
Structure declaration.


<div class="topic-separator"></div>
<div class="code">struct TraitDecl {
    token:        Token // From std::jule::lex
    ident:        str
    public:       bool
    doc_comments: &CommentGroup
    methods:      []&FnDecl
}</div>
Trait declaration.


<div class="topic-separator"></div>
<div class="code">struct Impl {
    // This token available for these cases:
    //  - Implementation trait to structure, represents trait's token.
    pub base:    Token // Token from std::jule::lex

    // This token available for these cases:
    //  - Implementation trait to structure, represents structure's token.
    //  - Implementation to structure, represents structure's token.
    pub dest:    Token // Token from std::jule::lex

    // Given methods to implement.
    pub methods: []&FnDecl
}</div>
Implementation.

<br><br>
<strong>Methods:</strong> <br><br>
<div class="inline_code">fn is_trait_impl(self): bool</div> <br>
Reports whether implementation type is trait to structure.

<div class="title-separator"></div>
<div class="inline_code">fn is_struct_impl(self): bool</div> <br>
Reports whether implementation type is append to destination structure.

`;

const type_aliases = document.getElementById("type-aliases");
const structs = document.getElementById("structs");

const nav = new SideNavigator();
nav.navigations = [
    [type_aliases, type_aliasesHTML],
    [structs, structsHTML],
];

nav.set_events();
nav.set_content_url();
