const stdlib_sync_atomic_functionsHTML = `
<div class="code">pub unsafe fn swap_i32(mut addr: *i32, new: i32) (old: i32)</div>
Atomically stores new into *addr and returns the previous *addr value.

<div class="topic-separator"></div>
<div class="code">pub unsafe fn swap_i64(mut addr: *i64, new: i64) (old: i64)</div>
Atomically stores new into *addr and returns the previous *addr value.

<div class="topic-separator"></div>
<div class="code">pub unsafe fn swap_u32(mut addr: *u32, new: u32) (old: u32)</div>
Atomically stores new into *addr and returns the previous *addr value.

<div class="topic-separator"></div>
<div class="code">pub unsafe fn swap_u64(mut addr: *u64, new: u64) (old: u64)</div>
Atomically stores new into *addr and returns the previous *addr value.

<div class="topic-separator"></div>
<div class="code">pub unsafe fn swap_uinptr(mut addr: *uintptr, new: uintptr) (old: uintptr)</div>
Atomically stores new into *addr and returns the previous *addr value.

<div class="topic-separator"></div>
<div class="code">pub unsafe fn compare_swap_i32(mut addr *i32, old: i32, new: i32) (swapped: bool)</div>
Executes the compare-and-swap operation for an i32 value.

<div class="topic-separator"></div>
<div class="code">pub unsafe fn compare_swap_i64(mut addr: *i64, old: i64, new: i64) (swapped: bool)</div>
Executes the compare-and-swap operation for an i64 value.

<div class="topic-separator"></div>
<div class="code">pub unsafe fn compare_swap_u32(mut addr: *u32, old: u32, new: u32) (swapped: bool)</div>
Executes the compare-and-swap operation for an u32 value.

<div class="topic-separator"></div>
<div class="code">pub unsafe fn compare_swap_u64(mut addr: *u64, old: u64, new: u64) (swapped: bool)</div>
Executes the compare-and-swap operation for an u64 value.

<div class="topic-separator"></div>
<div class="code">pub unsafe fn compare_swap_uintptr(mut addr: *uintptr, old: uintptr, new: uintptr) (swapped: bool)</div>
Executes the compare-and-swap operation for an uintptr value.

<div class="topic-separator"></div>
<div class="code">pub unsafe fn add_i32(mut addr: *i32, delta: i32) (old: i32)</div>
Atomically adds delta to *addr and returns the previous *addr value.

<div class="topic-separator"></div>
<div class="code">pub unsafe fn add_i64(mut addr: *i64, delta: i64) (old: i64)</div>
Atomically adds delta to *addr and returns the previous *addr value.

<div class="topic-separator"></div>
<div class="code">pub unsafe fn add_u32(mut addr: *u32, delta: u32) (old: u32)</div>
Atomically adds delta to *addr and returns the previous *addr value.

<div class="topic-separator"></div>
<div class="code">pub unsafe fn add_u64(mut addr: *u64, delta: u64) (old: u64)</div>
Atomically adds delta to *addr and returns the previous *addr value.

<div class="topic-separator"></div>
<div class="code">pub unsafe fn add_uinptr(mut addr: *uintptr, delta: uintptr) (old: uintptr)</div>
Atomically adds delta to *addr and returns the previous *addr value.

<div class="topic-separator"></div>
<div class="code">pub unsafe fn load_i32(addr: *i32) i32</div>
Atomically loads *addr.

<div class="topic-separator"></div>
<div class="code">pub unsafe fn load_i64(addr: *i64) i64</div>
Atomically loads *addr.

<div class="topic-separator"></div>
<div class="code">pub unsafe fn load_u32(addr: *u32) u32</div>
Atomically loads *addr.

<div class="topic-separator"></div>
<div class="code">pub unsafe fn load_u64(addr: *u64) u64</div>
Atomically loads *addr.

<div class="topic-separator"></div>
<div class="code">pub unsafe fn load_uinptr(addr: *uintptr) uintptr</div>
Atomically loads *addr.

<div class="topic-separator"></div>
<div class="code">pub unsafe fn store_i32(mut addr: *i32, val: i32)</div>
Atomically stores val into *addr.

<div class="topic-separator"></div>
<div class="code">pub unsafe fn store_i64(mut addr: *i64, val: i64)</div>
Atomically stores val into *addr.

<div class="topic-separator"></div>
<div class="code">pub unsafe fn store_u32(mut addr: *u32, val: u32)</div>
Atomically stores val into *addr.

<div class="topic-separator"></div>
<div class="code">pub unsafe fn store_u64(mut addr: *u64, val: u64)</div>
Atomically stores val into *addr.

<div class="topic-separator"></div>
<div class="code">pub unsafe fn store_uinptr(mut addr: *uintptr, val: uintptr)</div>
Atomically stores val into *addr.

`;

const NAV_stdlib_sync_atomic_functions = document.getElementById("functions");

const stdlib_sync_atomic_nav = new SideNavigator();
stdlib_sync_atomic_nav.navigations = [
    [NAV_stdlib_sync_atomic_functions, stdlib_sync_atomic_functionsHTML],
];

stdlib_sync_atomic_nav.set_events();
stdlib_sync_atomic_nav.set_content_url();
