<h1 align="left">
  <a href="https://www.npmjs.com/package/react-native-in-app-purchase-helper">
    REACT NATIVE IN-APP PURCHASE HELPER
  </a>
</h1>
<p align="center">
  <strong>Streamline your in-app purchases:</strong><br>
  Simplify in-app purchase setup and management in your React Native apps.
</p>
<p align="center">
  <a href="https://github.com/yourusername/react-native-in-app-purchase-helper/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="This package is released under the MIT license." />
  </a>
  <a href="https://www.npmjs.com/package/react-native-in-app-purchase-helper">
    <img src="https://img.shields.io/npm/v/react-native-in-app-purchase-helper?color=brightgreen&label=npm%20package" alt="Current npm package version." />
  </a>
  <a href="https://github.com/yourusername/react-native-in-app-purchase-helper/pulls">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  </a>
</p>
<h3 align="center">
  <a href="#-getting-started">Getting Started</a>
  <span> · </span>
  <a href="#-features">Features</a>
  <span> · </span>
  <a href="#-usage">Usage</a>
  <span> · </span>
  <a href="#-contributing">Contributing</a>
  <span> · </span>
  <a href="#-license">License</a>
</h3>
react-native-in-app-purchase-helper is a React Native library designed to simplify in-app purchase flows for both iOS and Android. It provides utility functions to manage in-app purchases and handle receipt verification seamlessly.

React Native brings [**React**'s][r] declarative UI framework to iOS and Android. With React Native, you use native UI controls and have full access to the native platform.

- **Declarative.** React makes it painless to create interactive UIs. Declarative views make your code more predictable and easier to debug.
- **Component-Based.** Build encapsulated components that manage their state, then compose them to make complex UIs.
- **Developer Velocity.** See local changes in seconds. Changes to JavaScript code can be live reloaded without rebuilding the native app.
- **Portability.** Reuse code across iOS, Android, and [other platforms][p].

React Native is developed and supported by many companies and individual core contributors. Find out more in our [ecosystem overview][e].

[r]: https://react.dev/
[p]: https://reactnative.dev/docs/out-of-tree-platforms
[e]: https://github.com/facebook/react-native/blob/HEAD/ECOSYSTEM.md

## Contents

- [Requirements](#-requirements)
- [Building your first React Native app](#-building-your-first-react-native-app)
- [Documentation](#-documentation)
- [How to Contribute](#-how-to-contribute)
- [License](#-license)


## 📋 Requirements

React Native apps may target iOS 13.4 and Android 6.0 (API 23) or newer. You may use Windows, macOS, or Linux as your development operating system, though building and running iOS apps is limited to macOS.

Requirements Packages: react native dotenv

## 🎉 Features
Easy Integration: Quickly set up in-app purchases in your React Native app.
Cross-Platform: Supports both iOS and Android.
Receipt Verification: Easily verify purchase receipts for security.
Auto-Retry for Failed Purchases: Manage failed purchases with automatic retries.

## 🚀 Getting Started

npm kullanarak yükleyin

```bash 
  npm install react-native-in-app-purchase-helper
```
Import the helper functions into your project:

```bash 
import {verifyTransaction,fetchPrices,createPaymentMethod,continuePayment} 
 from 'react-native-in-app-purchase-helper';
```
Verifying a Transaction

```bash 
const isValid = await verifyTransaction(transactionReceipt, ITUNES_SHARED_SECRET);
if (isValid.valid) { 
  console.log('Purchase is valid.');
} else {
  console.error('Purchase is invalid.');
}
```
Fetching Product Prices

```bash 
const prices = await fetchPrices(packageDetails);
console.log('Product Prices:', prices);
```
Creating a Payment Method

```bash 
const purchase = await createPaymentMethod(packageId, skus);
console.log('Purchase successful:', purchase);
```

Continuing a Payment

```bash 
const purchase = await continuePayment(skus, ITUNES_SHARED_SECRET);
console.log('Payment continued:', purchase);
```





## 👏 How to Contribute

The main purpose of this repository is to continue evolving React Native core. We want to make contributing to this project as easy and transparent as possible, and we are grateful to the community for contributing bug fixes and improvements. 

## 📄 License

MIT License

Copyright (c) 2024 Sirius AI Tech

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
