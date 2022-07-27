// Copyright 2022 The X Programming Language.
// Use of this source code is governed by a BSD 3-Clause
// license that can be found in the LICENSE file.

const preview_code_helloworldHTML =
`main() {
    outln("Hello, world")
}`;

const preview_code_fibonacci_closureHTML =
`fibo() () int {
    a:, b: = 0, 1
    ret () int {
        a, b = b, a+b
        ret a
    }
}

main() {
    f: = fibo()
    outln(f())
    outln(f())
    outln(f())
}`;

const preview_code_traitsHTML =
`trait Animal {
    voice() str
}

struct Dog {}

impl Animal for Dog {
    &voice() str {
        ret "woof"
    }
}

struct Cat {}

impl Animal for Cat {
    &voice() str {
        ret "meow"
    }
}

main() {
    foo:Animal = Dog{}
    bar:Animal = Cat{}
    outln(foo.voice())
    outln(bar.voice())
}`;

//#region GET_ELEMENTS

const preview_code                   = document.getElementById('preview-code')
const preview_dropdown_text          = document.getElementById('preview-dropdown-text');
const preview_code_helloworld        = document.getElementById('preview-code-helloworld');
const preview_code_fibonacci_closure = document.getElementById('preview-code-fibonacci-closure');
const preview_code_traits            = document.getElementById('preview-code-traits');

//#endregion GET_ELEMENTS

preview_code_helloworld.addEventListener("click", () => {
  preview_dropdown_text.innerHTML = preview_code_helloworld.innerHTML;
  preview_code.innerHTML = preview_code_helloworldHTML;
});

preview_code_fibonacci_closure.addEventListener("click", () => {
  preview_dropdown_text.innerHTML = preview_code_fibonacci_closure.innerHTML;
  preview_code.innerHTML = preview_code_fibonacci_closureHTML;
})

preview_code_traits.addEventListener('click', () => {
  preview_dropdown_text.innerHTML = preview_code_traits.innerHTML;
  preview_code.innerHTML = preview_code_traitsHTML;
})

preview_code_helloworld.click();
