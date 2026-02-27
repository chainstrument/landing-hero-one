import fs from 'fs'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'
import tailwindPostcss from '@tailwindcss/postcss'

const input = './src/index.css'
const output = './dist/tw-from-postcss.css'
const css = fs.readFileSync(input, 'utf8')

// Add a tiny test file containing the color classes to help the scanner
const testHtml = './.tailwind-scan-test.html'
fs.writeFileSync(testHtml, `<div class="text-4xl text-blue-600 mt-4 from-purple-500 via-pink-500 to-red-500 text-gray-800 text-gray-600"></div>`)

async function run(){
  // Pass base so the plugin can resolve the project's content globs
  // Also pass explicit content globs so the scanner sees our HTML/TSX files and the tiny test file
  const result = await postcss([
    tailwindPostcss({
      base: process.cwd(),
      content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './.tailwind-scan-test.html',
      ],
    }),
    autoprefixer(),
  ]).process(css, {from: input})
  // Log PostCSS messages from the plugin (dependency files, scanner info)
  console.log('postcss messages:', result.messages)
  fs.mkdirSync('./dist', {recursive:true})
  fs.writeFileSync(output, result.css)
  console.log('Wrote', output)
}

run().catch(err=>{ console.error(err); process.exit(1) })
