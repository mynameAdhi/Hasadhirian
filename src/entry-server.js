import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import App from './App.vue'
import { locale } from './i18n'
import { reveal } from './composables/useReveal'

export async function render() {
  locale.value = 'id'

  const app = createSSRApp(App)
  app.directive('reveal', reveal)

  return renderToString(app)
}
