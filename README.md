# Risk of Resources sample

## Development
You'll need [`yarn`](https://yarnpkg.com/) instead of `npm` as the package manager, so as to not break the lockfile. I also found it to be faster than `npm` in almost every case. Install it with `npm i -g yarn`. [VS Code](https://code.visualstudio.com/) recommended for editing.

```sh
git clone https://github.com/plungingChode/rores
yarn install
yarn dev
```

## Build and deploy

```
# build the project
yarn build

# to start server at localhost:3000/rores/
yarn run dev

```

## Packages used
- [Svelte](https://svelte.dev/) as the interactive component framework
- [Astro](https://astro.build/) for static site generation, flexible templating and to simplify the build process (uses [Vite](https://vitejs.dev/) under the hood)
- [Tailwind CSS](https://tailwindcss.com/) for styling, because it's easier for me than writing a million CSS classes by hand
- [Prettier](https://prettier.io/) for code formatting. Automatically applied before each `git commit`.
