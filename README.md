# Official Website of Jule

The official website of [the Jule Programming Language](https://github.com/julelang/jule), live at <https://jule.dev>.

## Building the website

### Gitpod

Skip all of the steps below by using Gitpod, which automatically does it for you.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/julelang/website)

### Manually/locally

1. Fork the repository [here](https://github.com/jule/website/fork).
2. Clone the forked repository.

```bash
git clone https://github.com/<your-username-here>/website
```

3. Change the directory to the cloned repository.

```bash
cd website
```

4. Install the required dependencies with [NPM](https://www.npmjs.com/).

```bash
npm ci
```

5. Build and compile the website.

```bash
npm run build
```

6. Run website at port 5173.

```bash
npm run dev
```

That's it! :tada: You have successfully ran the website locally.

## License

The repository is under the terms of the BSD-3 Clause license.\
See the [`LICENSE`](https://github.com/julelang/website/blob/master/LICENSE) file for more information.
