# FSU Ubiquitous & Intelligence Computing Group

Website for the Ubiquitous & Intelligence Computing Group in the Department of
Computer Science at Florida State University.

FSU UIC develops ubiquitous intelligent systems for real-world applications by
integrating hardware, systems and networks, artificial intelligence, and
human-centered computing.

## Development

Requires Node.js `>=22.13.0`.

```bash
npm install
npm run dev
```

The local site runs at [http://localhost:3000](http://localhost:3000).

## Verification

```bash
npm run lint
npm test
```

`npm test` creates a production build and verifies the server-rendered homepage.

## Project Structure

- `app/` contains the website layout, content, and styles.
- `public/` contains static visual assets.
- `tests/` contains rendered-page checks.
- `worker/` and `vite.config.ts` provide the vinext/Cloudflare runtime.
- `.openai/hosting.json` links the project to its Sites deployment.

## Live Website

[intelligence-computing-group.teyenwu.chatgpt.site](https://intelligence-computing-group.teyenwu.chatgpt.site)
