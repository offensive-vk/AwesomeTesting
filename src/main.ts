import './style.css'
import typescriptLogo from './assets/typescript.svg';
import viteLogo from './assets/vite.svg';
import vitestLogo from './assets/vitest.svg';
import { setupCounter } from './counter.ts'

const typescript: string = `https://cdn.jsdelivr.net/gh/offensive-vk/Icons@master/typescript/typescript-plain.svg`;
const vitest: string = `https://cdn.jsdelivr.net/gh/offensive-vk/Icons@master/vitest/vitest-original.svg`;
const vitejs: string = `https://cdn.jsdelivr.net/gh/offensive-vk/Icons@master/vitejs/vitejs-original.svg`;

document.querySelector<HTMLDivElement>('#root')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo || vitejs}" class="logo vitejs" alt="Vitejs" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo || typescript}" class="logo typescript" alt="TypeScript" />
    </a>
    <a href="https://www.vitest.dev/" target="_blank">
      <img src="${vitestLogo || vitest}" class="logo vitest" alt="vitest" />
    </a>
    <h1>Vite + TypeScript ❤️ + Vitest</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="author">Built with ❤️ by 
      <a href="https://github.com/offensive-vk/" target="_blank">Vedansh ✨</a> 
    </p>
  </div>
`
setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)