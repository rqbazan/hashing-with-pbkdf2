<script>
  export let message
</script>

<div class="flex flex-col h-64 w-full">
  <div class="h-64 md:h-80">
    <img
      class="w-full h-full"
      src="/img/illustration.svg"
      alt="watching netflix"
    />
  </div>
  <div class="flex items-center justify-center text-sm">
    <p class="italic">{message}</p>
  </div>
</div>
