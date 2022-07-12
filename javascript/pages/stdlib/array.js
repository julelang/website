const stdlib_array_functionsHTML = `
<div class="code">type[Item_T]
pub copy(&dest, &src []Item_T)</div>
Copies source items to destination.
<br><br>
Special cases are;<br>
<li><x class="inline_code">copy[Item_T](dest, src) = does nothing if src.empty()</x></li>
<li><x class="inline_code">copy[Item_T](dest, src) = does nothing id dest.empty()</x></li>
<li><x class="inline_code">copy[Item_T](dest, src) = length accepts as src.len if dest.len > src.len</x></li>
<li><x class="inline_code">copy[Item_T](dest, src) = length accepts as dest.len if src.len > dest.len</x></li>

<div class="topic-separator"></div>
<div class="code">type[Item_T]
pub make(const n size) []Item_T</div>
Makes an array have n elements with default values of related data-type.

<div class="topic-separator"></div>
<div class="code">type[Item_T]
pub map(&dest []Item_T, func (Item_T)Item_T)</div>
Applies function to each element of destination array.
<br><br>
Special cases are;<br>
<li><x class="inline_code">map[Item_T](dest, func) = does nothing id dest.empty()</x></li>
`;

const NAV_stdlib_array_functions = document.getElementById("functions");

const stdlib_array_nav = new SideNavigator();
stdlib_array_nav.navigations = [
    [NAV_stdlib_array_functions, stdlib_array_functionsHTML],
];

stdlib_array_nav.set_events();
stdlib_array_nav.set_content_url();
