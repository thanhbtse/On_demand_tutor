import { Helmet } from "react-helmet";
import { CartView } from "../section/Carts/views";

function CartPage() {
  return (
    <div>
      <Helmet>
        <title>Giỏ hàng - GiaSuOnline.vn</title>
      </Helmet>
      <CartView />
    </div>
  );
}
export default CartPage;
