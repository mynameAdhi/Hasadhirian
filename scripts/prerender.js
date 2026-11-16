import fs from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const root = process.cwd()
const dist = path.resolve(root, 'dist')
const serverEntry = path.join(dist, 'server/entry-server.js')
const templatePath = path.join(dist, 'index.html')

const { render } = await import(pathToFileURL(serverEntry).href)
const template = await fs.readFile(templatePath, 'utf8')
const appHtml = await render()
const marker = '<div id="app"></div>'

if (!template.includes(marker)) {
  throw new Error('Prerender marker not found in dist/index.html')
}

let html = template.replace(marker, `<div id="app">${appHtml}</div>`)
const stylesheet = html.match(
  /<link[^>]*rel="stylesheet"[^>]*href="([^"]+\.css)"[^>]*>/,
)

if (!stylesheet) {
  throw new Error('Stylesheet link not found in dist/index.html')
}

const cssPath = path.join(dist, stylesheet[1])
const css = await fs.readFile(cssPath, 'utf8')

html = html.replace(stylesheet[0], `<style>${css}</style>`)

await fs.writeFile(templatePath, html)
await fs.rm(cssPath)
await fs.rm(path.join(dist, 'server'), { recursive: true, force: true })

console.log(`Prerendered ${appHtml.length} bytes of HTML and inlined ${css.length} bytes of CSS`)
