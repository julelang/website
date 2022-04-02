// Copyright 2021 The X Programming Language.
// Use of this source code is governed by a BSD 3-Clause
// license that can be found in the LICENSE file.

const page_title = `The X Programming Language`;

const preview_code_helloworldHTML =
`main() {
  outln("Hello, world")
}`;

const preview_code_fibonacci_closureHTML =
`fibo() () i32 {
  a:, b: = 0, 1
  < () i32 {
    a, b = b, a+b
    < a
  }
}

main() {
  f: = fibo()
  outln(f())
  outln(f())
  outln(f())
  outln(f())
  outln(f())
}`;

const preview_code_pointersHTML =
`main() {
  myarr: = []i32{10, 50, 24, -43, 63}
  const myarr_size:size = 5
  counter: = 0
  ptr: = &myarr[0]
  iter (counter+=1) <= myarr_size {
    outln(*ptr)
    ptr += 1
  }
}`;

//#region SET_PAGE

document.title = page_title;

//#endregion SET_PAGE

//#region GET_ELEMENTS

const preview_code                   = document.getElementById('preview-code')
const preview_dropdown_text          = document.getElementById('preview-dropdown-text');
const preview_code_helloworld        = document.getElementById('preview-code-helloworld');
const preview_code_fibonacci_closure = document.getElementById('preview-code-fibonacci-closure');
const preview_code_pointers          = document.getElementById('preview-code-pointers');

//#endregion GET_ELEMENTS

preview_code_helloworld.addEventListener("click", () => {
  preview_dropdown_text.innerHTML = preview_code_helloworld.innerHTML;
  preview_code.innerHTML = preview_code_helloworldHTML;
});

preview_code_fibonacci_closure.addEventListener("click", () => {
  preview_dropdown_text.innerHTML = preview_code_fibonacci_closure.innerHTML;
  preview_code.innerHTML = preview_code_fibonacci_closureHTML;
})

preview_code_pointers.addEventListener('click', () => {
  preview_dropdown_text.innerHTML = preview_code_pointers.innerHTML;
  preview_code.innerHTML = preview_code_pointersHTML;
})

preview_code_helloworld.click();
