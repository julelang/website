// Copyright 2022 The Jule Programming Language.
// Use of this source code is governed by a BSD 3-Clause
// license that can be found in the LICENSE file.

const preview_code_helloworldHTML =
`main() {
    outln("Hello, world")
}`;

const preview_code_quicksortHTML =
`quicksort(slice: []int) {
    if slice.len <= 1 {
        ret
    }
    i: = 0
    for i < slice.len-1 {
        curr:, next: = &slice[i], &slice[i+1]
        if *curr > *next {
            *curr, *next = *next, *curr
        }
        i++
    }
    quicksort(slice[:i])
    quicksort(slice[i+1:])
}

main() {
    my_slice: = []int{1, 9, -2, 25, -24, 4623, 0, -1, 0xFD2}
    outln(my_slice)
    quicksort(my_slice)
    outln(my_slice)
}`;

const preview_code_traitsHTML =
`use std::math::{PI}

trait Shape {
    area() int
}

struct Rectangle {
    width: int
    height: int
}

impl Shape for Rectangle {
    @inline
    &area() int {
        ret .width * .height
    }
}

struct Circle {
    r: f32
}

impl Shape for Circle {
    @inline
    &area() int {
        ret PI * .r * .r
    }
}

main() {
    rect: Shape = Rectangle{90, 5}
    circ: Shape = Circle{90.5}
    outln(rect.area())
    outln(circ.area())
}`;

//#region GET_ELEMENTS

const preview_code            = document.getElementById('preview-code')
const preview_dropdown_text   = document.getElementById('preview-dropdown-text');
const preview_code_helloworld = document.getElementById('preview-code-helloworld');
const preview_code_quicksort  = document.getElementById('preview-code-quicksort');
const preview_code_traits     = document.getElementById('preview-code-traits');

//#endregion GET_ELEMENTS

preview_code_helloworld.addEventListener("click", () => {
  preview_dropdown_text.innerHTML = preview_code_helloworld.innerHTML;
  preview_code.innerHTML = preview_code_helloworldHTML;
});

preview_code_quicksort.addEventListener("click", () => {
  preview_dropdown_text.innerHTML = preview_code_quicksort.innerHTML;
  preview_code.innerHTML = preview_code_quicksortHTML;
})

preview_code_traits.addEventListener('click', () => {
  preview_dropdown_text.innerHTML = preview_code_traits.innerHTML;
  preview_code.innerHTML = preview_code_traitsHTML;
})

preview_code_helloworld.click();
