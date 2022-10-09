const stdlib_reflect_functionsHTML = `
<div class="code">type[T1, T2]
fn is_same() bool</div>
Reports the given data types are same or not.

<div class="topic-separator"></div>
<div class="code">type[T]
fn any_is(src: any) bool</div>
Reports the data type of the given any type value is the same as the generic type or not.
`;

const NAV_stdlib_reflect_functions = document.getElementById("functions");

const stdlib_reflect_nav = new SideNavigator();
stdlib_reflect_nav.navigations = [
    [NAV_stdlib_reflect_functions, stdlib_reflect_functionsHTML],
];

stdlib_reflect_nav.set_events();
stdlib_reflect_nav.set_content_url();
