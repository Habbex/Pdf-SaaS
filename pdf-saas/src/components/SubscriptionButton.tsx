"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import axios from "axios";

type Props = { isPro: boolean };

const SubscriptionButton = (props: Props) => {
  const [loading, setLoading] = useState(false);

  const handleSubscription = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");
      window.location.href = response.data.url;
    } catch (error) {
      console.error("Error from subscription button comp", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button disabled={loading} onClick={handleSubscription}>
      {props.isPro ? "Manage Subscription" : "Get Pro version"}
    </Button>
  );
};

export default SubscriptionButton;
