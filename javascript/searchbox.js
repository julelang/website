// Searchbox script.

const searchboxes = document.getElementsByClassName('searchbox-input');

for (let index = 0; index < searchboxes.length;) {
  const searchbox = searchboxes[index++];
  searchbox.addEventListener('keydown', function(event) {
    if (event.key != "Enter") {
      return;
    }
    const search_text = searchbox.value.trim();
    if (search_text == "") {
      return;
    }
    window.location.href = `${rootPath}/search.html?searched=${search_text}`;
  });
}
