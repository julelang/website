const type_aliasesHTML = `
<div class="sub-sub-title"><x class="inline_code">type ExprModel: any</x></div>
Expression model.

<div class="title-separator"></div>

<div class="sub-sub-title"><x class="inline_code">type St: any</x></div>
Statement type.

`;

const functionsHTML = `
<div class="code">fn analyze_package(mut files: []&Ast, mut importer: Importer): (&Package, []Log)</div>
Builds symbol table of package's ASTs. <br>
Returns nil if files is nil. <br>
Returns nil if pwd is empty. <br>
Returns nil if pstd is empty. <br>
Accepts current working directory is pwd.
<br><br>
Parameters;
<ul>
    <li>files: abstract syntax trees of files</li>
    <li>importer: importer that used for use declarations</li>
</ul>
Dependent Parameters;
<ul>
    <li>working-directory: uses working directory path provided by build</li>
    <li>std-path: uses standard library path provided by build</li>
</ul>
<div class="warn">
<strong>Risks</strong> <br>
You can pass nil to importer, but panics if importer is nil and semantic analyzer used nil importer.
</div>

<div class="topic-separator"></div>
<div class="code">fn analyze_file(mut f: &Ast, mut importer: Importer): (&SymbolTable, []Log)</div>
Builds symbol table of package's ASTs. <br>
Returns nil if files is nil. <br>
Returns nil if pwd is empty. <br>
Returns nil if pstd is empty. <br>
Accepts current working directory is pwd.
<br><br>
Parameters;
<ul>
    <li>files: abstract syntax trees of files</li>
    <li>importer: importer that used for use declarations</li>
</ul>
Dependent Parameters;
<ul>
    <li>working-directory: uses working directory path provided by build</li>
    <li>std-path: uses standard library path provided by build</li>
</ul>
<div class="warn">
<strong>Risks</strong> <br>
You can pass nil to importer, but panics if importer is nil and semantic analyzer used nil importer.
</div>

`;

const structsHTML = `
<div class="code">struct EnumItem {
    token: Token
    ident: str
    value: &Value
}</div>
Enum item.

<br><br>
<strong>Methods:</strong> <br><br>
<div class="inline_code">fn auto_expr(self): bool</div> <br>
Reports whether item has auto expression.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct Enum {
    token:  Token
    public: bool
    ident:  str
    kind:   &TypeSymbol
    items:  []&EnumItem
    doc:    str
}</div>
Enum.

<div class="info">
<strong>Implemented Traits</strong>
<li>Kind</li>
</div>

<br><br>
<strong>Methods:</strong> <br><br>
<div class="inline_code">fn find_item(mut self, ident: str): &EnumItem</div> <br>
Returns item by identifier. <br>
Returns nil reference if not exist any item in this identifier.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct Data {
    kind:       &TypeKind
    cast_kind:  &TypeKind // This expression should be cast to this kind.
    mutable:    bool
    lvalue:     bool
    variadiced: bool
    is_rune:    bool
    model:      ExprModel

    // True if kind is declaration such as:
    //  - &Enum
    //  - &Struct
    //  - int type
    //  - bool type
    decl: bool

    // Constant expression data.
    constant: &Const
}</div>
Value data.

<div class="info">
<strong>Implemented Traits</strong>
<li>Kind</li>
</div>

<br><br>
<strong>Methods:</strong> <br><br>
<div class="inline_code">fn is_nil(self): bool</div> <br>
Reports whether Data is nil literal.

<div class="title-separator"></div>
<div class="inline_code">fn is_void(self): bool</div> <br>
Reports whether Data is void.

<div class="title-separator"></div>
<div class="inline_code">fn is_const(self): bool</div> <br>
Reports whether Data is constant expression.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct Value {
    expr: &Expr
    data: &Data
}</div>
Value.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct BinopExprModel {
    left:  ExprModel
    right: ExprModel
    op:    str
}</div>
Binary operation expression model.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct UnaryExprModel {
    expr:  ExprModel
    op:    str
}</div>
Unary operation expression model.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct GetRefExprModel {
    expr: ExprModel
}</div>
Pointer getter expression for reference types. <br>
For example: <x class="inline_code">&my_reference</x>

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct StructArgExprModel {
    field: &FieldIns
    expr:  ExprModel
}</div>
Structure field argument expression model for constructors. <br>
For example: <x class="inline_code">&MyStruct{10, false, "-"}</x>

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct StructLitExprModel {
    strct: &StructIns
    args:  []&StructArgExprModel
}</div>
Structure literal.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct AllocStructLitExprModel {
    lit: &StructLitExprModel
}</div>
Heap allocated structure litral expression. <br>
For example: <x class="inline_code">&MyStruct{}</x>

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct CastingExprModel {
    expr:      ExprModel
    kind:      &TypeKind
    expr_kind: &TypeKind
}</div>
Casting expression model.
For example: <x class="inline_code">(int)(my_float)</x>

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct FnCallExprModel {
    func:  &FnIns
    is_co: bool
    expr:  ExprModel
    args:  []ExprModel
}</div>
Function call expression model.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct SliceExprModel {
    elem_kind: &TypeKind
    elems:     []ExprModel
}</div>
Slice expression model. <br>
For example: <x class="inline_code">[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]</x>

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct IndexingExprModel {
    expr:  ExprModel
    index: ExprModel
}</div>
Indexing expression model. <br>
For example: <x class="inline_code">my_slice[my_index]</x>

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct AnonFnExprModel {
    func:   &FnIns
    global: bool
}</div>
Anonymous function expression model.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct KeyValPairExprModel {
    key: ExprModel
    val: ExprModel
}</div>
Key-value expression pair model.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct MapExprModel {
    key_kind: &TypeKind
    val_kind: &TypeKind
    entries:  []&KeyValPairExprModel
}</div>
Map expression model. <br>
For example: <x class="inline_code">{0: false, 1: true}</x>

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct SlicingExprModel {
    expr:  ExprModel
    left:  ExprModel
    right: ExprModel
}</div>
Slicig expression model. <br>
For example: <x class="inline_code">my_slice[2:my_slice.len-5]</x>

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct TraitSubIdentExprModel {
    expr:  ExprModel
    ident: str
}</div>
Trait sub-ident expression model. <br>
For example: <x class="inline_code">my_trait.my_sub_ident</x>

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct StructSubIdentExprModel {
    expr:      ExprModel
    expr_kind: &TypeKind
    method:    &FnIns
    field:     &FieldIns
}</div>
Structure sub-ident expression model. <br>
For example: <x class="inline_code">my_struct.my_sub_ident</x>

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct ArrayExprModel {
    kind:  &Arr
    elems: []ExprModel
}</div>
Array expression model.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct CommonIdentExprModel {
    ident: str
}</div>
Common ident expression model.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct CommonSubIdentExprModel {
    expr:  ExprModel
    ident: str
}</div>
Common sub-ident expression model.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct TupleExprModel {
    datas: []&Data
}</div>
Tuple expression model.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct BuiltinOutCallExprModel {
    expr:  ExprModel
}</div>
Expression model for built-in out function calls.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct BuiltinOutlnCallExprModel {
    expr:  ExprModel
}</div>
Expression model for built-in outln function calls.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct BuiltinCloneCallExprModel {
    expr:  ExprModel
}</div>
Expression model for built-in clone function calls.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct BuiltinCloneNewExprModel {
    kind: &TypeKind
    init: ExprModel
}</div>
Expression model for built-in new function calls.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct BuiltinRealCallExprModel {
    expr:  ExprModel
}</div>
Expression model for built-in real function calls.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct BuiltinDropCallExprModel {
    expr:  ExprModel
}</div>
Expression model for built-in drop function calls.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct BuiltinPanicCallExprModel {
    expr:  ExprModel
}</div>
Expression model for built-in panic function calls.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct BuiltinMakeCallExprModel {
    kind: &TypeKind
    size: ExprModel
}</div>
Expression model for built-in make function calls.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct BuiltinErrorTraitSubIdentCallExprModel {
    expr:  ExprModel
    ident: str
}</div>
Expression model for sub-ident expression to built-in Error trait.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct SizeofExprModel {
    expr:  ExprModel
}</div>
Expression model for sizeof expressions. <br>
For exmaple, in C++: <x class="inline_code">sizeof(int)</x>

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct AlignofExprModel {
    expr:  ExprModel
}</div>
Expression model for alignof expressions. <br>
For exmaple, in C++: <x class="inline_code">alignof(int)</x>

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct StrConstructorCallExprModel {
    expr:  ExprModel
}</div>
Expression model for constructor call of str type. <br>
For exmaple: <x class="inline_code">str(my_expr)</x>

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct RuneExprModel {
    code: rune
}</div>
Rune literal expression model. <br>
For exmaple: <x class="inline_code">'a'</x>

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct ExplicitDerefExprModel {
    expr: ExprModel
}</div>
Expression model for explicit dereferencing of reference.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct RetType {
    kind:   &TypeSymbol
    idents: []Token
}</div>
Return type.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct Param {
    token:    Token
    mutable:  bool
    variadic: bool
    kind:     &TypeSymbol
    ident:    str
}</div>
Parameter.

<br><br>
<strong>Methods:</strong> <br><br>
<div class="inline_code">fn is_self(self): bool</div> <br>
Reports whether parameter is self (receiver) parameter.

<div class="title-separator"></div>
<div class="inline_code">fn is_ref(self): bool</div> <br>
Reports whether self (receiver) parameter is reference.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct Fn {
    token:      Token
    global:     bool
    unsafety:   bool
    public:     bool
    cpp_linked: bool
    ident:      str
    directives: []&Directive
    doc:        str
    scope:      &ScopeTree
    generics:   []&GenericDecl
    result:     &RetType
    params:     []&Param
    owner:      &Struct

    // Function instances for each unique type combination of function call.
    // Nil if function is never used.
    instances: []&FnIns
}</div>
Function.

<br><br>
<strong>Methods:</strong> <br><br>
<div class="inline_code">fn is_void(self): bool</div> <br>
Reports whether return type is void.

<div class="title-separator"></div>
<div class="inline_code">fn is_method(self): bool</div> <br>
Reports whether function is method.

<div class="title-separator"></div>
<div class="inline_code">fn is_entry_point(self): bool</div> <br>
Reports whether function is entry point.

<div class="title-separator"></div>
<div class="inline_code">fn is_anon(self): bool</div> <br>
Reports whether function is anonymous funuction.

<div class="title-separator"></div>
<div class="inline_code">fn any_var(self): bool</div> <br>
Reports whether function has return variable(s).

<div class="title-separator"></div>
<div class="inline_code">fn parameters_uses_generics(self): bool</div> <br>
Reports whether any parameter uses generic types.

<div class="title-separator"></div>
<div class="inline_code">fn result_uses_generics(self): bool</div> <br>
Reports whether result type uses generic types.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct ParamIns {
    decl: &Param
    kind: &TypeKind
}</div>
Parameter instance.

<div class="info">
<strong>Implemented Traits</strong>
<li>Kind</li>
</div>

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct FnIns {
    owner:    &StructIns
    decl:     &Fn
    generics: []&TypeKind
    params:   []&ParamIns
    result:   &TypeKind
    scope:    &Scope
}</div>
Function instance.

<div class="info">
<strong>Implemented Traits</strong>
<li>Kind</li>
</div>

<br><br>
<strong>Methods:</strong> <br><br>
<div class="inline_code">fn is_builtin(self): bool</div> <br>
Reports whether instance is built-in.

<div class="title-separator"></div>
<div class="inline_code">fn is_anon(self): bool</div> <br>
Reports whether instance is anonymous function.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct Impl {
    base:    Token
    dest:    Token
    methods: []&Fn
}</div>
Implementation.

<br><br>
<strong>Methods:</strong> <br><br>
<div class="inline_code">fn is_trait_impl(self): bool</div> <br>
Reports whether implementation type is trait to structure.

<div class="title-separator"></div>
<div class="inline_code">fn is_struct_impl(self): bool</div> <br>
Reports whether implementation type is append to destination structure.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct ImportInfo {
    // Use declaration token.
    token: Token

    // Absolute path.
    path: str

    // Use declaration path string.
    link_path: str

    // Package identifier (aka package name).
    // Empty if package is cpp header.
    ident: str

    // True if imported with Importer.Get_import function.
    duplicate: bool

    // Is cpp use declaration.
    cpp_linked: bool

    // Is standard library package.
    std: bool

    // Is imported all defines implicitly.
    import_all: bool

    // Identifiers of selected definition.
    selected: []Token

    // Nil if package is cpp header.
    package: &Package
}</div>
Import information. <br>
Represents imported package by use declaration.

<div class="info">
<strong>Implemented Traits</strong>
<li>Lookup</li>
</div>

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct Package {
    files: []&SymbolTable
}</div>
Package.

<div class="info">
<strong>Implemented Traits</strong>
<li>Lookup</li>
</div>

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct Scope {
    parent:   &Scope
    unsafety: bool
    deferred: bool
    stmts:    Vector[St]
}</div>
Scope.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct If {
    expr:  ExprModel
    scope: &Scope
}</div>
Cain conditional node.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct Else {
    scope: &Scope
}</div>
Default scope of conditional chain.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct Conditional {
    elifs:  []&If
    default: &Else
}</div>
Conditional chain.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct InfIter {
    scope: &Scope
}</div>
Infinity iteration.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct WhileIter {
    expr:  ExprModel
    next:  St
    scope: &Scope
}</div>
While iteration.

<br><br>
<strong>Methods:</strong> <br><br>
<div class="inline_code">fn is_while_next(self): bool</div> <br>
Reports whether iteration is while-next.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct RangeIter {
    expr:  ExprModel
    scope: &Scope
    key_a: &Var
    key_b: &Var
}</div>
Range iteration.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct Contst {
    it: uintptr
}</div>
Continue statement.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct Breakst {
    it:   uintptr
    mtch: uintptr
}</div>
Break statement.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct Label {
    ident: str
}</div>

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct GotoSt {
    ident: str
}</div>

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct Postfix {
    expr: ExprModel
    op:   str
}</div>
Postfix assignment.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct Assign {
    l:  ExprModel
    r:  ExprModel
    op: str
}</div>
Assignment.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct MultiAssign {
    l: []ExprModel
    r: ExprModel
}</div>
Multi-declarative assignment.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct Match {
    expr:       ExprModel
    type_match: bool
    cases:      []&Case
    default:    &Case
}</div>
Match-Case.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct Case {
    owner: &Match
    scope: &Scope
    exprs: []ExprModel
    next:  &Case
}</div>

<br><br>
<strong>Methods:</strong> <br><br>
<div class="inline_code">fn is_default(self): bool</div> <br>
Reports whether case is default.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct FallSt {
    dest_case: uintptr
}</div>

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct RetSt {
    vars: []&Var
    expr: ExprModel
}</div>
Return statement.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct Recover {
    handler:      &FnIns
    handler_expr: ExprModel
    scope:        &Scope
}</div>
Built-in recover function call statement.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct Field {
    owner:   &Struct
    token:   Token
    public:  bool
    mutable: bool
    ident:   str
    kind:    &TypeSymbol
}</div>

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct Struct {
    depends:    []&Struct
    uses:       []&Struct
    token:      Token
    ident:      str
    fields:     []&Field
    methods:    []&Fn
    cpp_linked: bool
    directives: []&Directive
    doc:        str
    generics:   []&GenericDecl
    implements: []&Trait
    instances:  []&StructIns
}</div>
Structure.

<br><br>
<strong>Methods:</strong> <br><br>
<div class="inline_code">fn find_method(mut self, ident: str): &Fn</div> <br>
Returns method by identifier. <br>
Returns nil reference if not exist any method in this identifier.

<div class="title-separator"></div>
<div class="inline_code">fn find_field(mut self, ident: str): &Field</div> <br>
Returns field by identifier. <br>
Returns nil reference if not exist any field in this identifier.

<div class="title-separator"></div>
<div class="inline_code">fn is_implements(self, t: &Trait): bool</div> <br>
Reports whether structure implements given trait.

<div class="title-separator"></div>
<div class="inline_code">fn is_derives(self, ident: str): bool</div> <br>
Reports whether structure is derives given derive.

<div class="title-separator"></div>
<div class="inline_code">fn is_uses(self, s: &Struct): bool</div> <br>
Reports whether structure is uses given structure.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct FieldIns {
    decl: &Field
    kind: &TypeKind
}</div>
Field instance.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct StructIns {
    checked:  bool
    decl:     &Struct
    generics: []&TypeKind
    fields:   []&FieldIns
    methods:  []&Fn
    has_mut:  bool
}</div>
Structure instance.

<div class="info">
<strong>Implemented Traits</strong>
<li>Kind</li>
</div>

<br><br>
<strong>Methods:</strong> <br><br>
<div class="inline_code">fn find_method(mut self, ident: str): &Fn</div> <br>
Returns method by identifier. <br>
Returns nil reference if not exist any method in this identifier.

<div class="title-separator"></div>
<div class="inline_code">fn find_field(mut self, ident: str): &FieldIns</div> <br>
Returns field by identifier. <br>
Returns nil reference if not exist any field in this identifier.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct Pass {
    token: Token
    text:  str
}</div>
Directive pass.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct SymbolTable {
    file:         &File               // Owner fileset of this symbol table.
    passes:       Vector[Pass]        // All passed flags with jule:pass directive.
    imports:      Vector[&ImportInfo] // Imported packages.
    vars:         Vector[&Var]        // Variables.
    type_aliases: Vector[&TypeAlias]  // Type aliases.
    structs:      Vector[&Struct]     // Structures.
    funcs:        Vector[&Fn]         // Functions.
    traits:       Vector[&Trait]      // Traits.
    enums:        Vector[&Enum]       // Enums.
    impls:        Vector[&Impl]       // Implementations.
}</div>
Structure instance.

<div class="info">
<strong>Implemented Traits</strong>
<li>Lookup</li>
</div>

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct Trait {
    token:   Token
    ident:   str
    public:  bool
    doc:     str
    methods: []&Fn
}</div>
Trait.

<div class="info">
<strong>Implemented Traits</strong>
<li>Kind</li>
</div>

<br><br>
<strong>Methods:</strong> <br><br>
<div class="inline_code">fn is_builtin(self): bool</div> <br>
Returns whether Trait is built-in

<div class="title-separator"></div>
<div class="inline_code">fn find_method(mut self, ident: str): &Fn</div> <br>
Returns method by identifier. <br>
Returns nil reference if not exist any method in this identifier.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct TypeAlias {
    scope:      &ScopeTree
    public:     bool
    cpp_linked: bool
    used:       bool
    token:      Token
    ident:      str
    kind:       &TypeSymbol
    doc:        str
    refers:     []any
}</div>
Type alias

<div class="info">
<strong>Implemented Traits</strong>
<li>Kind</li>
</div>

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct TypeKind {
    cpp_linked: bool
    cpp_ident:  str
    kind:       Kind
}</div>
Type alias

<div class="info">
<strong>Implemented Traits</strong>
<li>Kind</li>
</div>

<br><br>
<strong>Methods:</strong> <br><br>
<div class="inline_code">fn is_nil(self): bool</div> <br>
Reports whether kind is nil.

<div class="title-separator"></div>
<div class="inline_code">fn is_void(self): bool</div> <br>
Reports whether kind is void.

<div class="title-separator"></div>
<div class="inline_code">fn prim(self): &Prim</div> <br>
Returns primitive type if kind is primitive type, nil reference if not.

<div class="title-separator"></div>
<div class="inline_code">fn ref(self): &Ref</div> <br>
Returns primitive type if kind is reference, nil reference if not.

<div class="title-separator"></div>
<div class="inline_code">fn ptr(self): &Ptr</div> <br>
Returns primitive type if kind is pointer, nil reference if not.

<div class="title-separator"></div>
<div class="inline_code">fn enm(self): &Enum</div> <br>
Returns primitive type if kind is enum, nil reference if not.

<div class="title-separator"></div>
<div class="inline_code">fn arr(self): &Arr</div> <br>
Returns primitive type if kind is array, nil reference if not.

<div class="title-separator"></div>
<div class="inline_code">fn slc(self): &Slc</div> <br>
Returns primitive type if kind is slice, nil reference if not.

<div class="title-separator"></div>
<div class="inline_code">fn fnc(self): &FnIns</div> <br>
Returns primitive type if kind is function, nil reference if not.

<div class="title-separator"></div>
<div class="inline_code">fn strct(self): &Struct</div> <br>
Returns primitive type if kind is structure, nil reference if not.

<div class="title-separator"></div>
<div class="inline_code">fn trt(self): &Trait</div> <br>
Returns primitive type if kind is trait, nil reference if not.

<div class="title-separator"></div>
<div class="inline_code">fn map(self): &Map</div> <br>
Returns primitive type if kind is map, nil reference if not.

<div class="title-separator"></div>
<div class="inline_code">fn tup(self): &Tuple</div> <br>
Returns primitive type if kind is tuple, nil reference if not.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct TypeSymbol {
    decl: &TypeDecl
    kind: &TypeDecl
}</div>
Type.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct Prim {
    kind: str
}</div>
Primitive type.

<div class="info">
<strong>Implemented Traits</strong>
<li>Kind</li>
</div>

<br><br>
<strong>Methods:</strong> <br><br>
<div class="inline_code">fn is_i8(self): bool</div> <br>
Reports whether type is primitive i8.

<div class="title-separator"></div>
<div class="inline_code">fn is_i16(self): bool</div> <br>
Reports whether type is primitive i16.

<div class="title-separator"></div>
<div class="inline_code">fn is_i32(self): bool</div> <br>
Reports whether type is primitive i32.

<div class="title-separator"></div>
<div class="inline_code">fn is_i64(self): bool</div> <br>
Reports whether type is primitive i64.

<div class="title-separator"></div>
<div class="inline_code">fn is_u8(self): bool</div> <br>
Reports whether type is primitive u8.

<div class="title-separator"></div>
<div class="inline_code">fn is_u16(self): bool</div> <br>
Reports whether type is primitive u16.

<div class="title-separator"></div>
<div class="inline_code">fn is_u32(self): bool</div> <br>
Reports whether type is primitive u32.

<div class="title-separator"></div>
<div class="inline_code">fn is_u64(self): bool</div> <br>
Reports whether type is primitive u64.

<div class="title-separator"></div>
<div class="inline_code">fn is_f32(self): bool</div> <br>
Reports whether type is primitive f32.

<div class="title-separator"></div>
<div class="inline_code">fn is_f64(self): bool</div> <br>
Reports whether type is primitive f64.

<div class="title-separator"></div>
<div class="inline_code">fn is_int(self): bool</div> <br>
Reports whether type is primitive int.

<div class="title-separator"></div>
<div class="inline_code">fn is_uint(self): bool</div> <br>
Reports whether type is primitive uint.

<div class="title-separator"></div>
<div class="inline_code">fn is_uintptr(self): bool</div> <br>
Reports whether type is primitive uintptr.

<div class="title-separator"></div>
<div class="inline_code">fn is_bool(self): bool</div> <br>
Reports whether type is primitive bool.

<div class="title-separator"></div>
<div class="inline_code">fn is_str(self): bool</div> <br>
Reports whether type is primitive str.

<div class="title-separator"></div>
<div class="inline_code">fn is_any(self): bool</div> <br>
Reports whether type is primitive any.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct Slc {
    elem: &TypeKind
}</div>
Slice type.

<div class="info">
<strong>Implemented Traits</strong>
<li>Kind</li>
</div>

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct Tuple {
    types: []&TypeKind
}</div>
Tuple type.

<div class="info">
<strong>Implemented Traits</strong>
<li>Kind</li>
</div>

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct Map {
    key: &TypeKind
    val: &TypeKind
}</div>
Map type.

<div class="info">
<strong>Implemented Traits</strong>
<li>Kind</li>
</div>

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct Arr {
    elem: &TypeKind
}</div>
Array type.

<div class="info">
<strong>Implemented Traits</strong>
<li>Kind</li>
</div>

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct Ptr {
    elem: &TypeKind
}</div>
Pointer type.

<div class="info">
<strong>Implemented Traits</strong>
<li>Kind</li>
</div>

<br><br>
<strong>Methods:</strong> <br><br>
<div class="inline_code">fn is_unsafe(self): bool</div> <br>
Reports whether pointer is unsafe pointer (*unsafe).

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">struct Var {
    scope:      &ScopeTree
    token:      Token
    ident:      str
    cpp_linked: bool
    constant:   bool
    mutable:    bool
    public:     bool
    used:       bool
    doc:        str
    kind:       &TypeSymbol
    value:      &Value

    // This variable depended to these variables for initialization expression.
    // Nil if not global variable.
    depends:    []&Var
}</div>
Variable

<br><br>
<strong>Methods:</strong> <br><br>
<div class="inline_code">fn is_initialized(self): bool</div> <br>
Reports whether variable is initialized explicitly.

<div class="title-separator"></div>
<div class="inline_code">fn is_auto_typed(self): bool</div> <br>
Reports whether variable is auto-typed.

`;

const traitsHTML = `
<div class="code">trait Lookup {
    fn find_package(mut self, ident: str): &ImportInfo
    fn select_package(mut self, selector: fn(&ImportInfo): bool): &ImportInfo
    fn find_var(mut self, ident: str, cpp_linked: bool): &Var
    fn find_type_alias(mut self, ident: str, cpp_linked: bool): &TypeAlias
    fn find_struct(mut self, ident: str, cpp_linked: bool): &Struct
    fn find_fn(mut self, ident: str, cpp_linked: bool): &Fn
    fn find_trait(mut self, ident: str): &Trait
    fn find_enum(mut self, ident: str): &Enum
}</div>
Lookup.

<div class="topic-separator"></div>

<div class="title-separator"></div>
<div class="code">trait Importer {
    // Returns &ImportInfo by path.
    // This function accepted as returns already imported and checked package.
    // If returns not-nil value, will be used instead of Import_package
    // if possible and package content is not checked by Sema.
    get_import(mut self, path: str): &ImportInfo
    // Path is the directory path of package to import.
    // Should return abstract syntax tree of package files.
    // Logs accepts as error.
    import_package(mut self, path: str): ([]&Ast, []Log)
    // Invoked after the package is imported.
    imported(mut self, mut &ImportInfo)
}</div>
Importer. <br>
Used by semantic analyzer for import use declarations.

`;

const type_aliases = document.getElementById("type-aliases");
const functions = document.getElementById("functions");
const structs = document.getElementById("structs");
const traits = document.getElementById("traits");

const nav = new SideNavigator();
nav.navigations = [
    [type_aliases, type_aliasesHTML],
    [functions, functionsHTML],
    [structs, structsHTML],
    [traits, traitsHTML]
];

nav.set_events();
nav.set_content_url();
