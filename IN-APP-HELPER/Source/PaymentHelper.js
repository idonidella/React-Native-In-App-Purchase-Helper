import axios from 'axios';
import { Platform } from 'react-native';
import {
  initConnection,
  getProducts,
  flushFailedPurchasesCachedAsPendingAndroid,
  requestPurchase,
  finishTransaction,
} from 'react-native-iap';

export async function verifyTransaction(transactionReceipt, ITUNES_SHARED_SECRET) {
  const url = 'https://buy.itunes.apple.com/verifyReceipt';
  const urlSandbox = 'https://sandbox.itunes.apple.com/verifyReceipt';
  const requestBody = {
    'receipt-data': transactionReceipt,
    password: ITUNES_SHARED_SECRET,
  };

  try {
    const response = await axios.post(url, requestBody);
    const responseData = response.data;

    if (responseData.status === 0) {
      return { valid: true, message: 'Purchase is valid.' };
    } else {
      const responseSandbox = await axios.post(urlSandbox, requestBody);
      const responseDataSandbox = responseSandbox.data;

      if (responseDataSandbox.status === 0) {
        return { valid: true, message: 'Purchase is valid.' };
      } else {
        return { valid: false, message: 'Purchase is invalid.' };
      }
    }
  } catch (error) {
    console.error('Error during verification:', error);
    return { valid: false, message: 'Error during verification.' };
  }
}

export async function fetchPrices(packageDetails) {
  try {
    const prices = await Promise.all(
      packageDetails.map(async pkg => {
        const skus = Platform.OS === 'android' ? pkg.androidSKUs : pkg.iosSKUs;
        const products = await getProducts({ skus });
        if (products.length > 0) {
          return { id: pkg.id, price: products[0].localizedPrice };
        } else {
          return { id: pkg.id, price: 'N/A' };
        }
      }),
    );
    return prices;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

export async function createPaymentMethod(packageId, skus) {
  try {
    await initConnection();
    if (Platform.OS === 'android') {
      flushFailedPurchasesCachedAsPendingAndroid();
    }
    const sku = Platform.OS === 'android' ? skus.androidSKUs[0] : skus.iosSKUs[0];
    const products = await getProducts({ skus: [sku] });
    if (products.length === 0) {
      console.error('Product not found');
      return;
    }
    const product = products[0];
    const purchase = await requestPurchase({
      sku: product.productId,
      skus: [product.productId],
      quantity: 1,
      andDangerouslyFinishTransactionAutomaticallyIOS: false,
    });
    await finishTransaction({ purchase, isConsumable: true });
    return purchase;
  } catch (error) {
    console.error('Error during payment creation:', error);
    throw error;
  }
}

export async function continuePayment(skus, ITUNES_SHARED_SECRET) {
  try {
    const sku = Platform.OS === 'android' ? skus.androidSKUs[0] : skus.iosSKUs[0];
    const products = await getProducts({ skus: [sku] });
    if (products.length === 0) {
      console.error('Product not found');
      return;
    }
    const product = products[0];
    const purchase = await requestPurchase({
      sku: product.productId,
      skus: [product.productId],
      quantity: 1,
      andDangerouslyFinishTransactionAutomaticallyIOS: false,
    });
    const transactionReceipt = purchase.transactionReceipt;
    const isVerified = await verifyTransaction(transactionReceipt, ITUNES_SHARED_SECRET);
    if (isVerified.valid) {
      if (Platform.OS === 'ios') {
        await finishTransaction({ purchase });
      }
      return purchase;
    } else {
      throw new Error('Payment could not be verified.');
    }
  } catch (error) {
    console.error('Error during payment continuation:', error);
    throw error;
  }
}
