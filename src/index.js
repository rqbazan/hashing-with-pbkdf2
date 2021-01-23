import App from './app/index.svelte'

const app = new App({
  target: document.body
})

export default app

if (import.meta.hot) {
  import.meta.hot.accept()
  import.meta.hot.dispose(() => app.$destroy())
}
