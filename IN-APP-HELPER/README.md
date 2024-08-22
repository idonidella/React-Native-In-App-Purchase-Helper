<h1 align="center">
  <a href="https://www.npmjs.com/package/react-native-in-app-purchase-helper">
    React Native In-App Purchase Helper
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

React Native In-App Purchase Helper is a React Native library designed to simplify in-app purchase flows for both iOS and Android. In-app purchases can sometimes be complex to implement, so this library aims to offer a streamlined and more flexible approach. It provides utility functions to manage in-app purchases, handle receipt verification seamlessly, and allows developers to integrate payment flows with shorter, more efficient code. With this package, you can reduce the complexity of IAP operations while maintaining full control over the process.

## Contents

- [Requirements](#-requirements)
- [🚀 Getting Started](#-documentation)
- [How to Contribute](#-how-to-contribute)
- [License](#-license)


## 📋 Requirements

React Native In-App Purchase Helper can target iOS 13.4 and Android 6.0 (API 23) or newer. You can use Windows, macOS, or Linux as your development operating system, but building and running iOS apps is limited to macOS.

Requirements Packages:

"react-native-iap" This library is used to sell digital content and subscriptions in your app via the App Store and Google Play Store. It allows managing IAP processes such as purchases, product lists and receipt verification.

## 🎉 Features
Easy Integration: Quickly set up in-app purchases in your React Native app.
Cross-Platform: Supports both iOS and Android.
Receipt Verification: Easily verify purchase receipts for security.

## 🚀 Getting Started

npm kullanarak yükleyin

```bash 
  npm install react-native-in-app-purchase-helper
```
Import the helper functions into your project:

```bash 
import {verifyTransaction,fetchPrices,createPaymentAndroid,createPaymentIOS} 
 from 'react-native-in-app-purchase-helper';
```

Fetching Product Prices and Defining Packages

```bash 
const packageDetails = [
  {
    id: 'basic',
    androidSKUs: ['basic_android'],
    iosSKUs: ['basic_ios'],
  },
  {
    id: 'premium',
    androidSKUs: ['premium_android'],
    iosSKUs: ['premium_ios'],
  },
  {
    id: 'pro',
    androidSKUs: ['pro_android'],
    iosSKUs: ['pro_ios'],
  },
];

async function displayPackagePrices() {
  try {
    const prices = await fetchPrices(packageDetails);
    prices.forEach(pkg => {
      console.log(`Package: ${pkg.id}, Price: ${pkg.price}`);
    });
  } catch (error) {
    console.error('Error displaying prices:', error);
  }
}
```
Creating a Payment Method for Android

```bash 
async function purchasePackage(packageId) {
  const selectedPackage = packageDetails.find(pkg => pkg.id === packageId);
  if (!selectedPackage) {
    console.error('Invalid package selected');
    return;
  }

  try {
    if (Platform.OS === 'android') {
      const purchase = await createPaymentAndroid(selectedPackage);
      console.log('Purchase successful:', purchase);
    } else if (Platform.OS === 'ios') {
      const ITUNES_SHARED_SECRET = 'your_itunes_shared_secret';
      const purchase = await createPaymentIos(selectedPackage, ITUNES_SHARED_SECRET);
      console.log('Purchase successful:', purchase);
    }
  } catch (error) {
    console.error('Error during purchase:', error);
  }
}

// Örneğin, kullanıcı premium paketini satın almak istiyor:
purchasePackage('premium');
```

Continuing a Payment

```bash 
async function purchasePackage(packageId) {
  const selectedPackage = packageDetails.find(pkg => pkg.id === packageId);
  if (!selectedPackage) {
    console.error('Invalid package selected');
    return;
  }
  try {
    if (Platform.OS === 'android') {
      const purchase = await createPaymentAndroid(selectedPackage);
      console.log('Purchase successful:', purchase);
    } else if (Platform.OS === 'ios') {
      const ITUNES_SHARED_SECRET = 'your_itunes_shared_secret';
      const purchase = await createPaymentIos(selectedPackage, ITUNES_SHARED_SECRET);
      console.log('Purchase successful:', purchase);
    }
  } catch (error) {
    console.error('Error during purchase:', error);
  }
}
// For example, user wants to buy premium package:
purchasePackage('premium');
```
Verifying a Transaction (Only for IOS)

```bash 
const isValid = await verifyTransaction(transactionReceipt, ITUNES_SHARED_SECRET);
if (isValid.valid) { 
  console.log('Purchase is valid.');
} else {
  console.error('Purchase is invalid.');
}
```
Usage Scenario:

Get Product Prices on App Startup and use to show it to the user

Show the prices of the products to the user by calling the getProductPrices(named for example) function at the beginning of your application.
When User Wants to Buy a Product:

Have the user purchase the product of their choice by calling the launchPurchase(named for example) function.
Perform Post-Purchase Actions:

Complete and verify the payment using the ProcessPayment(named for example) function.


## 👏 How to Contribute

The main purpose of this repository is to continue evolving React Native core. We want to make contributing to this project as easy and transparent as possible, and we are grateful to the community for contributing bug fixes and improvements. 

### Maintained By

[![Maintainer](https://github.com/idonidella.png?size=100)](https://github.com/idonidella)

This project is maintained and supported by [idonidella](https://github.com/idonidella).

## 📄 License

MIT