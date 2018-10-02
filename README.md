# electron-ffi-sample

## Prerequisite

It is running for `ia32 dll`, you can run it only on `Windows`.

You need to [Node.js 8.x (LTS)](https://nodejs.org/en/download/) and `windows-build-tools`.

```console
$ npm install --global --production windows-build-tools
```

## Run & Pack

Windows

```console

$ npm i
$ npm start

```

It also executes the `electron-builder` at the same time, so the packaged application is also created in the `elect_builder_output` folder.
