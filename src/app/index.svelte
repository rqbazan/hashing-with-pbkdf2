<script>
  import './tailwind.svelte'
  import Content from './components/content.svelte'
  import Footer from './components/footer.svelte'

  let inputValue = ''
</script>

<div class="flex flex-col items-center p-6 max-w-3xl mx-auto h-full">
  <h1 class="text-3xl mb-6 text-center font-bold">Hashing w/ pbkdf2</h1>
  <div class="flex flex-col w-full space-y-6">
    <form class="flex flex-col w-full" spellcheck="false">
      <label for="text" class="mb-2 text-sm font-bold">
        Introduce a text to hash
      </label>
      <textarea
        id="text"
        name="text"
        rows={3}
        class="rounded-md text-dark p-4 focus:ring-4 ring-indigo-300 outline-none"
        autocomplete="off"
        bind:value={inputValue}
      />
    </form>
    <Content {inputValue} />
  </div>
  <div class="mt-auto">
    <Footer />
  </div>
</div>

<style>
  :global(html, body) {
    @apply h-full;
  }

  :global(body) {
    @apply bg-dark text-white;
  }

  textarea {
    resize: none;
  }
</style>
