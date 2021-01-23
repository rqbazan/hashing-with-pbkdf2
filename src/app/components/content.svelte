<script>
  import debounce from 'lodash.debounce'
  import { statuses } from '../constants.js'
  import OutputCard from './output-card.svelte'
  import EmptyState from './empty-state.svelte'

  export let inputValue

  const query = {
    status: statuses.IDLE,
    data: undefined
  }

  const debounced = debounce(async text => {
    query.status = statuses.FETCHING

    const res = await fetch(`/api/?text=${text}`)

    if (res.ok) {
      query.data = await res.json()
      query.status = statuses.SUCCESS
    } else {
      query.status = statuses.ERROR
    }
  }, 500)

  $: {
    const textToHash = inputValue.trim()

    if (textToHash) {
      query.status = statuses.TYPING
      debounced(textToHash)
    } else {
      debounced.cancel()
      query.status = statuses.IDLE
    }
  }
</script>

{#if query.status === statuses.IDLE}
  <EmptyState message="chilling..." />
{:else if query.status === statuses.TYPING}
  <EmptyState message="typing..." />
{:else if query.status === statuses.FETCHING}
  <EmptyState message="fetching..." />
{:else if query.status === statuses.SUCCESS}
  <OutputCard title="Random Salt" content={query.data.salt} />
  <OutputCard title="Hash" content={query.data.hash} />
{/if}
