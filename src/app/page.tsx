'use client';

import { useActionState } from "react";
import { createPaymentRequest } from "./actions/create-payment-request";

const initialState = {
  message: '',
};

export default function Home() {
  const [_state, formAction] = useActionState(
      createPaymentRequest,
      initialState,
  );

  return (
    <form action={formAction}>
      <button type="submit">
        Active server actions
      </button>
    </form>
  );
}
