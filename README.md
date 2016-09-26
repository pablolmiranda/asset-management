# Asset Management UI

This repo is a exercise to build a Asset Management UI using React and RxJS.

### Running the project

    npm start

### Running the tests

    gulp test


### App Architecture

#### Major components explained
 * Components => pure render components
 * Containers => interact with the main app state
 * Reducers => data stores
 * Actions => stateless functions
 * Memoized selectors => keep the reducers simple and move the data calculation to points of injection.

#### Application state describe

```
{
    assets: <Array>,
    selectedAsset: <Object>
}
```
