<script>
import { RouterLink } from 'vue-router'

import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  },
  methods: {
    codes() {
      let code = document.getElementById("codes").value;
      if (code == "quick") {
        document.getElementById("code").innerHTML = `fn quicksort(mut s: []int) {<br>&nbsp;&nbsp;&nbsp;&nbsp;if s.len <= 1 {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ret<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br><br>&nbsp;&nbsp;&nbsp;&nbsp;let mut i = -1<br>&nbsp;&nbsp;&nbsp;&nbsp;let last = s[s.len - 1]<br>&nbsp;&nbsp;&nbsp;&nbsp;for j in s {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let mut x = &s[j]<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (unsafe{ *x <= last }) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i++<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let mut y = &s[i]<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;unsafe { *x, *y = *y, *x }<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br><br>&nbsp;&nbsp;&nbsp;&nbsp;quicksort(s[:i])<br>&nbsp;&nbsp;&nbsp;&nbsp;quicksort(s[i+1:])<br>}<br><br>fn main() {<br>&nbsp;&nbsp;&nbsp;&nbsp;let mut my_slice = [1, 9, -2, 25, -24, 4623, 0, -1, 0xFD2]<br>&nbsp;&nbsp;&nbsp;&nbsp;outln(my_slice)<br>&nbsp;&nbsp;&nbsp;&nbsp;quicksort(my_slice)<br>&nbsp;&nbsp;&nbsp;&nbsp;outln(my_slice)<br>}`;
      } if (code == "hello") {
        document.getElementById("code").innerHTML = `fn main() {<br>&nbsp;&nbsp;&nbsp;&nbsp;outln("Hello, world")<br>}`
      } if (code == "traits") {
        document.getElementById("code").innerHTML = `use std::math::{PI}<br><br>trait Shape {<br>&nbsp;&nbsp;&nbsp;&nbsp;fn area(self): f32<br>}<br><br>struct Rectangle {<br>&nbsp;&nbsp;&nbsp;&nbsp;width: int<br>&nbsp;&nbsp;&nbsp;&nbsp;height: int<br>}<br><br>impl Shape for Rectangle {<br>&nbsp;&nbsp;&nbsp;&nbsp;fn area(self): f32 {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ret self.width * self.height<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>}<br><br>struct Circle {<br>&nbsp;&nbsp;&nbsp;&nbsp;r: f32<br>}<br><br>impl Shape for Circle {<br>&nbsp;&nbsp;&nbsp;&nbsp;fn area(self): f32 {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ret PI * self.r * self.r<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>}<br><br>fn main() {<br>&nbsp;&nbsp;&nbsp;&nbsp;let rect: Shape = Rectangle{90, 5}<br>&nbsp;&nbsp;&nbsp;&nbsp;let circ: Shape = Circle{90.5}<br>&nbsp;&nbsp;&nbsp;&nbsp;outln(rect.area())<br>&nbsp;&nbsp;&nbsp;&nbsp;outln(circ.area())<br>}`
      }
    }
  },
}
// &nbsp;&nbsp;&nbsp;&nbsp;
</script>

<template>
  <Navbar theme="light" />
  <main>
    <div class="flex gap-10 px-24 pb-40 max-sm:px-10 max-lg:flex-wrap">
      <div class="grow">
        <h1 class="text-4xl font-bold">The <span class="text-jule">Jule</span> Programming Language</h1>
        <br>
        <p class="text-2xl">Jule is the simple, efficient, statically typed and compiled <br>
          system programming language
        </p>
        <br>
        <ul>
          <li><font-awesome-icon icon="check" /> Jule is an open source and free programming language</li>
          <li><font-awesome-icon icon="check" /> Easy to learn and get started with</li>
          <li><font-awesome-icon icon="check" /> Efficient and fast as C++</li>
          <li><font-awesome-icon icon="check" /> High interoperability with C++</li>
        </ul>
        <br><br>
        <a href="#get-started" class="btn-red">Get Started</a>
      </div>

      <div class="max-lg:grow">
        <div class="overflow-auto code-block lg:w-[35rem]" id="code">
          fn main() {<br>&nbsp;&nbsp;&nbsp;&nbsp;outln("Hello, world")<br>}
        </div>
        <br>
        <select class="btn-jule" id="codes" @change="codes()">
          <option value="hello">Hello World</option>
          <option value="quick">Quick Sort</option>
          <option value="traits">Traits</option>
        </select>
      </div>
    </div>

    <div class="bg-jule-darkest text-white px-24 max-sm:px-10 py-20" id="get-started">
      <h1 class="text-4xl font-bold text-center">Get Started</h1>
      <br><br>
      <div class="flex justify-center max-lg:flex-wrap gap-16 select-none">
        <a href="https://github.com/julelang/jule/releases" target="_blank" class="card">
          <div class="text-center"><font-awesome-icon class="w-28 mb-20 text-8xl" icon="download" /></div>
          <div class="flex justify-between items-center">
            <div class="me-10">
              <p class="font-bold text-xl">Download</p>
              <p>Install JuleC</p>
            </div>
            <font-awesome-icon class="text-2xl" icon="fa-arrow-up-right-from-square" />
          </div>
        </a>

        <a href="https://manual.jule.dev" target="_blank" class="card">
          <div class="text-center"><font-awesome-icon class="w-28 mb-20 text-8xl" icon="graduation-cap" /></div>
          <div class="flex justify-between items-center">
            <div class="me-10">
              <p class="font-bold text-xl">Manual</p>
              <p>Learn Jule</p>
            </div>
            <font-awesome-icon class="text-2xl" icon="fa-arrow-up-right-from-square" />
          </div>
        </a>

        <router-link to="/community" class="card">
          <div class="text-center"><font-awesome-icon class="w-28 mb-20 text-8xl" icon="user-group" /></div>
          <div class="flex justify-between items-center">
            <div class="me-10">
              <p class="font-bold text-xl">Community</p>
              <p>Join community</p>
            </div>
            <font-awesome-icon class="text-2xl" icon="fa-arrow-up-right-from-square" />
          </div>
        </router-link>
      </div>
    </div>
  </main>
  <Footer />
</template>