<script>
  import { fade } from 'svelte/transition'
  import CopyClipboard from './copy-clipboard.svelte'

  export let title
  export let content

  let showCopied = false

  const clipboard = document.getElementById('clipboard')

  function copy() {
    const app = new CopyClipboard({
      target: clipboard,
      props: {
        value: content
      }
    })
    app.$destroy()
  }

  function onCopyClick() {
    copy()
    showCopied = true
    setTimeout(() => {
      showCopied = false
    }, 750)
  }
</script>

<div
  class="flex flex-col rounded-md bg-meow text-dark w-full min-h-28 select-none relative"
>
  <div class="rounded-t-md bg-pinky px-4 py-3">
    <h2 class="font-bold">{title}</h2>
  </div>
  <div class="btn flex h-6 items-center space-x-2 absolute right-4 top-3">
    {#if showCopied}
      <span transition:fade={{ duration: 200 }}>copied!</span>
    {/if}
    <div class="text-dark h-4 w-4" role="button" on:click={onCopyClick}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        ><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path
          d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
        /></svg
      >
    </div>
  </div>
  <div class="content p-4 h-full break-words">
    <span>{content}</span>
  </div>
</div>

<style>
  .btn:active + .content > span {
    @apply bg-green-200;
  }
</style>
