# Jokes Mobile App

This repository is created for the Jokes Mobile app, it has been developed using react-native for iOS and Android.

## Getting Started

The app is powered by react-native, so in order to run the project you must have react-native(+0.60.5), node(+v10.16.0), Android Studio/SDK for Android and Xcode for iOS.

### Prerequisites

- REACT NATIVE - Install it following the steps in the react-native docs [here](https://reactnative.dev/docs/environment-setup)
- NODE - Use the Node Version Manager tool for [Windows](https://github.com/coreybutler/nvm-windows) or [Mac](https://github.com/nvm-sh/nvm), or download the installation package [here](https://nodejs.org/en/download/)
- ANDROID STUDIO - Download it [here](https://developer.android.com/studio/index.html)
- XCODE - Use self service or App store to download it(MAC Only)

You can get more details to install Xcode and Android Studio/SDK in the react [native docs](https://reactnative.dev/docs/environment-setup)

## Installing

After you installed the pre-requisites and your simulator is up and running install the dependencies by running:

```
npm install
```

Install the pods ( iOS only ):

```
cd ios && pod install && cd ..
```

Open a new terminal and run the app:  
iOS

```
react-native run-ios
```

Android

```
react-native run-android
```

## Running the tests

Jest is the Testing Framework, to run the tests use the following command:

```
npm test

```

## Command to run ESLint

```
npm run lint

```
