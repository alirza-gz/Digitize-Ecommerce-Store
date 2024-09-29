import { sellerIcon, warrantyIcon, deliveryIcon } from "../../data";

function ProductShipping() {
  return (
    <div className="mb-7 flex flex-wrap items-center justify-center gap-4 x:gap-6 md:hidden">
      <div className="flex gap-3 text-xs x:text-sm">
        <div className="flex items-center gap-1">
          {sellerIcon}
          <span>فروشنده:</span>
        </div>
        <span>دیجی تایز</span>
      </div>
      <div className="flex gap-3 text-xs x:text-sm">
        <div className="flex items-center gap-1">
          {warrantyIcon}
          <span>گارانتی:</span>
        </div>
        <span>18 ماه زرین خدمت</span>
      </div>
      <div className="flex gap-3 text-xs x:text-sm">
        <div className="flex items-center gap-1">
          {deliveryIcon}
          <span>ارسال توسط:</span>
        </div>
        <span>انبار تهران</span>
      </div>
    </div>
  );
}

export default ProductShipping;
