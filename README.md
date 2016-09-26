# Asset Management UI

This repo is an exercise to build an Asset Manager UI using React and Redux.

### Running the project

Running in dev mode:

    npm start

Running in prod mode:

    NODEV_ENV=production npm start

### Running the tests
Running all tests:

    gulp test

### Lint source code
To lint the source code:

    gulp lint

Running one test:

    mocha --compilers js:babel-core/register --require test/setup.js <test path>

### App Architecture

#### Major components explained
 * __Components__: simple UI components. They don't connect with the app store, receiving the data from their parents
 * __Containers__: components responsible to interact with the app store. Each container is responsible to query and propagates the data needed by their children.
 * __Reducers__: app data. The collection of reducer builds the app store.
 * __Actions__ => stateless functions. Receive data from the UI and return store actions.

#### Application state

```
{
    assets: Map<index, SortedArray>,
    selectedAsset: AssetObject,
    pageIndex: Int,
    selectedAssetIndex: String
}
```

* __assets__: database of assets. Every time the app receives an asset collection, it will index and sort it. The sort uses the object attribute used as an index.
* __selectedAsset__: an Asset object. The app will render the Asset information if this field is populated.
* __pageIndex__: an Integer n, n > 0. The number of asset thumbnail pages the app should render. The page number will be reset to 1 every time the user change the index used to group the assets or make a query on the index.
* __selectedAssetIndex__: keep track of the index used to group the assets. The current allowed values are (movieName|languageCode)

### Dev information

When using the dev environment, the app will serve the JavaScript bundle from memory. It makes possible to enable a fast bundle build and diff. The app uses the bundle diff to update the running app using [hot module reload](http://gaearon.github.io/react-hot-loader/getstarted/).
