<script>
export default {
  data() {
    return {
      samples: {}
    }
  },
  async mounted() {
    const sample_names = ['hello_world', 'quick_sort', 'traits', 'fizzbuzz', 'levenshtein_distance', 'number_kind']

    for (let name in sample_names) {
      await fetch(`/samples/${sample_names[name]}.jule`)
        .then(response => response.text())
        .then(data => { this.samples[sample_names[name]] = data })
    }

    document.getElementById('code-block').innerText = this.samples.hello_world
  },
  methods: {
    changeSelect() {
      const code_block = document.getElementById('code-block')
      const selected = document.getElementById('select').value;

      switch (selected) {
        case 'hello-world':
          code_block.innerText = this.samples.hello_world
          break;
        case 'quick-sort':
          code_block.innerText = this.samples.quick_sort
          break;
        case 'traits':
          code_block.innerText = this.samples.traits
          break;
        case 'fizzbuzz':
          code_block.innerText = this.samples.fizzbuzz
          break;
        case 'levenshtein-distance':
          code_block.innerText = this.samples.levenshtein_distance
          break;
        case 'number-kind':
          code_block.innerText = this.samples.number_kind
          break;
      }
    }
  }
}
</script>

<template>
  <div class="bg-[var(--bg-tertiary)]">
    <div class="max-w-screen-lg mx-auto px-5 py-20">
      <div class="text-3xl text-center text-black pb-5">Sample Programs</div>
      <pre id="code-block" class="overflow-auto h-96 mb-5 p-5 bg-zinc-900 text-white rounded-sm"></pre>
      <select @change="changeSelect()" id="select" class="p-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-darker)] duration-[0.3s] text-white text-sm rounded-sm">
        <option value="hello-world">Hello World</option>
        <option value="quick-sort">Quick Sort</option>
        <option value="traits">Traits</option>
        <option value="fizzbuzz">FizzBuzz</option>
        <option value="levenshtein-distance">Levenshtein Distance</option>
        <option value="number-kind">Number Kind</option>
      </select>
    </div>
  </div>
</template>
