# enlighten-desktop

This is just a prototype using [http://electron.atom.io/]

# Instructions to build

## OSX

```
# must have wine installed
brew install Caskroom/cask/xquartz
brew install wine

npm install
npm run start # to run the application using electron
npm run package # to package executable for the current architecture
npm run package-all # to generate executables for all supported architectures
```
