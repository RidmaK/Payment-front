"use client";

import React, { useEffect } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const PaymentLoadingPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const checkout_url = searchParams.get("checkout_url");
  const id = searchParams.get("id");
  const key = searchParams.get("key");

  useEffect(() => {
    if (checkout_url) {
      console.log(checkout_url);
      window.open(`${checkout_url}&id=${id}&key=${key}`, "_blank");
    }
  }, [router]);

  return <div className={styles.mainDiv}>PAYMENT LOADING...</div>;
};

export default PaymentLoadingPage;
