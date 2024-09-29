import { useCartContext } from "../store/context/CartContext";
// import { PageHero, CartItems, Checkout } from "../components";
import PageHero from "../components/UI/PageHero";
import CartItems from "../components/cart/CartItems";
import Checkout from "../components/cart/Checkout";
import { emptyCart } from "../assets";

function Cart() {
  const { cart } = useCartContext();

  return (
    <main className="container mx-auto 2xl:max-w-screen-2xl min-h-screen md:min-h-0">
      <PageHero title="سبدخرید" back />

      <section className="mt-8 mb-24 px-3 md:pt-28 md:min-h-[calc(100vh-24rem)] md:px-6">
        {cart.length === 0 && (
          <div className="pt-28 flex flex-col items-center justify-center gap-y-5">
            <img src={emptyCart} alt="empty cart" />
            <h1 className="mb-6 text-center text-lg text-slate-800">
              سبد خرید شما خالی است.
            </h1>
          </div>
        )}
        {cart.length > 0 && (
          <div>
            <div className="justify-between gap-[5%] md:flex">
              <CartItems cart={cart} />
              <Checkout />
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default Cart;
