import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { CartProvider } from "use-shopping-cart";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  return (
    <CartProvider stripe={stripeKey} cartMode="checkout-session" currency="USD">
      <Layout>
        <Component {...pageProps} />
        <Toaster />
      </Layout>
    </CartProvider>
  );
}
