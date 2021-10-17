// Searchbox script.

const searchbox = document.getElementById('searchbox-input');

searchbox.addEventListener('keydown', (event) => {
  if (event.key != "Enter") {
    return;
  }
  const search_text = searchbox.value.trim();
  if (search_text == "") {
    return;
  }
  window.location.href = `${rootPath}/search.html?searched=${search_text}`;
})
