const stdlib_sync_structsHTML = `
<div class="code">struct WaitGroup</div>
Do not copy an instance of WaitGroup, use a ref or pointer instead.
<br><br>
usage: in main thread:
 wg: std::sync::WaitGroup <br>
 "wg.add(delta)" before starting tasks with "co ..." <br>
 "wg.wait()" to wait for all tasks to have finished
<br><br>
in each parallel job: <br>
 "wg.done()" when finished
<br><br>
<strong>Functions:</strong> <br><br>
<div class="inline_code">fn add(mut self, delta: int)</div> <br>
Increments (+delta) or decrements (-delta) task count by delta
and unblocks any wait() calls if task count becomes zero.
Panics if task count reaches below zero.

<div class="title-separator"></div>
<div class="inline_code">fn done(mut self)</div> <br>
Decrements the WaitGroup counter by one.

<div class="title-separator"></div>
<div class="inline_code">fn wait(mut self)</div> <br>
Blocks until all tasks are done (task count becomes zero)

`;

const NAV_stdlib_sync_structs = document.getElementById("structs");

const stdlib_sync_nav = new SideNavigator();
stdlib_sync_nav.navigations = [
    [NAV_stdlib_sync_structs, stdlib_sync_structsHTML],
];

stdlib_sync_nav.set_events();
stdlib_sync_nav.set_content_url();
