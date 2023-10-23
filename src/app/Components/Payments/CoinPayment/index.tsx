import React from "react";
import styles from "./index.module.css";
import axios from "axios";
import { useRouter } from "next/navigation";

const CoinPayment = () => {
  const router = useRouter();

  const handleCoinPaymentOnClick = async () => {
    try {
      const response = await axios.post(
        `http://localhost:5002/coin-payment/create`
      );

      console.log(response.data.checkout_url);

      if (!response?.data.txn_id) {
        router.push(`/payment-fail?error=coin-payment-fail`);
      } else {
        router.push(
          `/payment-loading?txn_id=${response?.data.txn_id}&amount=${
            response?.data.amount
          }&address=${response?.data.address}&qr_code=${
            response?.data.qrcode_url
          }&timeout=${response?.data.timeout}&checkout_url=${
            response?.data.checkout_url
          }&id=${response?.data.checkout_url.split(
            "&id="[1]
          )}&key=${response?.data.checkout_url.split("&key="[1])}`
        );
        return;
      }
    } catch (err) {
      console.log(`Catch error: ${err}`);
      router.push(`/payment-fail?error=coin-payment-catch-fail-error: ${err}`);
      return;
    }
  };

  return (
    <div className={styles.mainDiv} onClick={handleCoinPaymentOnClick}>
      <div className={styles.btn}>COIN PAY</div>
    </div>
  );
};

export default CoinPayment;
