import React from "react";
import styles from "./index.module.css";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
import { useRouter } from "next/navigation";

// BASE URLS
const PAYPAL_BASE_URL = process.env.PAYPAL_BASE_URL;
const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID;

export const PaypalPayment = () => {
  const router = useRouter();

  //create subscription
  const createSubscription = async (data: any) => {
    try {
      return await axios
        .post(`${PAYPAL_BASE_URL}/create-subscription`, {
          userId: "edc4abc1-7b41-4e07-b67f-b88e019b6321",
          paymentType: "YEARLY",
          membershipId: 1,
          country_code: "LK",
        })
        .then((res) => {
          if (!res?.data?.id) {
            console.log(res);
            return;
          }
          console.log(res);
          return res?.data?.id;
        })
        .catch((err) => {
          if (err) {
            // router.push(`/payment-fail?error:${err}`);
            console.log(`Create subscription error: ${err}`);
          }
        });
    } catch (err) {
      // router.push(`/payment-fail?error:${err}`);
      console.log(`Create subscription error: ${err}`);
    }
  };

  const approveSubscription = async (data: any, action: any) => {
    console.log("RAN THIS ON APPROVE");
    console.log(data, "data");
    // API Header configarations
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    await axios
      .post(
        `${PAYPAL_BASE_URL}/subscriptions-save`,
        {
          subscriptionId: data?.subscriptionID,
          paymentSource: data?.paymentSource,
          userId: "edc4abc1-7b41-4e07-b67f-b88e019b6321",
          membershipId: 1,
          paymentType: "YEARLY",
        },
        config
      )
      .then((data) => {
        router.push(`/payment-successful`);
      })
      .catch((err) => {
        console.log(`paymentfail ${err}`);
        router.push(`/payment-fail?error:${err}`);
      });

    return data.subscriptionID;
  };

  return (
    <div className={styles.mainDiv}>
      <PayPalScriptProvider
        options={{
          clientId:
            "AU7x-z6brQv3Ze1NiIAOzwUWYKjnrzTgwqomR8y9wm7BxI0fPXPRwofPH_g9-Kd9pDVb7aUm7qk82WH_",
          components: "buttons",
          currency: "USD",
          intent: "subscription",
          vault: true,
          "disable-funding": "card",
        }}
      >
        <div>
          <PayPalButtons
            createSubscription={(data: any) => createSubscription(data)}
            onApprove={(data: any, action: any) =>
              approveSubscription(data, action)
            }
          />
        </div>
      </PayPalScriptProvider>
    </div>
  );
};
