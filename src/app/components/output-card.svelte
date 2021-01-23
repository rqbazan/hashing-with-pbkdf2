<script>
  export let title
  export let content
</script>

<div class="rounded-md bg-meow text-dark w-full h-28">
  <div
    class="rounded-t-md w-full h-11 bg-pinky flex items-center justify-between p-4"
  >
    <h2 class="font-bold">{title}</h2>
    <div class="text-dark magnify h-4 w-4" role="button">
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
  <p class="p-4 break-words">{content}</p>
</div>

<style>
  .magnify {
    transition: transform 250ms ease-in-out;
  }

  .magnify:hover {
    transform: scale(1.3);
  }

  .magnify:active {
    transform: scale(0.9);
  }
</style>
