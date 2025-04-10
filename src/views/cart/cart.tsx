import submitOrderApi from "apis/order/create-order";
import clsx from "clsx";
import React, { useState } from "react";

const inputLabelClass = "block text-xl font-bold uppercase font-bold mb-5";
const inputClass =
  "border-1 border-blueGray-300 px-3 py-3  text-blueGray-600 rounded shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 bg-blueGray-50";

const Cart = () => {
  const [branchesList] = useState<any>([
    { label: "دبورية", value: "1" },
    { label: "الطيبة", value: "2" },
  ]);
  const [branchId, setBranchId] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const initialProducts = [
    {
      id: 1,
      name: "منشفة",
      price: 10,
      image: "/images/products/towel.png",
      qty: 0,
    },
    {
      id: 2,
      name: "بدلة سباحة",
      price: 10,
      image: "/images/products/swim-suit.png",
      qty: 0,
    },
    {
      id: 3,
      name: "مجاذيف",
      price: 10,
      image: "/images/products/paddles.png",
      qty: 0,
    },
    {
      id: 4,
      name: "زعانف",
      price: 10,
      image: "/images/products/flippers.png",
      qty: 0,
    },
    {
      id: 5,
      name: "عوامة سحب",
      price: 10,
      image: "/images/products/pull-buoy.png",
      qty: 0,
    },
    {
      id: 6,
      name: "قبعة",
      price: 10,
      image: "/images/products/cap.png",
      qty: 0,
    },
    {
      id: 7,
      name: "زجاجة ماء",
      price: 10,
      image: "/images/products/water-bottle.png",
      qty: 0,
    },
    {
      id: 8,
      name: "لوح ركوب الأمواج",
      price: 10,
      image: "/images/products/kickboard.png",
      qty: 0,
    },
    {
      id: 9,
      name: "نظارات سباحة",
      price: 10,
      image: "/images/products/swim-goggles.png",
      qty: 0,
    },
    {
      id: 10,
      name: "سنوركل",
      price: 10,
      image: "/images/products/snorkel.png",
      qty: 0,
    },
    {
      id: 11,
      name: "حقيبة شبكية",
      price: 10,
      image: "/images/products/mesh-bag.png",
      qty: 0,
    },
    {
      id: 12,
      name: "حقيبة سوداء",
      price: 10,
      image: "/images/products/bag.png",
      qty: 0,
    },
    {
      id: 13,
      name: "حقيبة وردية",
      price: 10,
      image: "/images/products/bag-pink.png",
      qty: 0,
    },
    {
      id: 14,
      name: "زوومرز",
      price: 10,
      image: "/images/products/zoomers.png",
      qty: 0,
    },
  ];

  const [products, setProducts] = useState(initialProducts);

  const updateQuantity = (id: any, change: any) => {
    setProducts(
      products.map((product: any) =>
        product.id === id
          ? { ...product, qty: Math.max(0, product.qty + change) }
          : product
      )
    );
  };

  const totalPrice = products.reduce(
    (total: any, product: any) => total + product.price * product.qty,
    0
  );

  const isPhoneValid = phone.trim().length >= 10 && /^[0-9]+$/.test(phone);
  const hasItems = products.some((product: any) => product.qty > 0);
  const isFormValid = branchId && name.trim() && isPhoneValid && hasItems;

  const submitCart = () => {
    if (!isFormValid) return;

    const productsList = products.filter((product: any) => product.qty > 0);

    submitOrderApi({
      products: productsList,
      totalPrice,
      branchId,
      name,
      phone,
    }).then((res) => {
      console.log("res", res);
    });
  };

  return (
    <div className="container px-2 md:mx-auto mt-10 text-right">
      <h1 className="md:text-2xl font-bold mb-5">سلة المشتريات</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Product List */}
        <div className="lg:col-span-2 items-center w-full">
          {products.map((product: any) => (
            <div
              key={product.id}
              className="flex justify-between items-center bg-white p-4 rounded shadow-lg mb-4"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-10 w-10 lg:w-20 lg:h-20 rounded"
              />
              <div className="flex ml-4">
                <h2 className="text-xl">{product.name}</h2>
                <div className="mx-2">-</div>
                <p className="text-gray-500 text-xl">₪{product.price}</p>
              </div>
              <div className="flex items-center">
                <button
                  className="bg-gray-200 text-gray-600 hover:bg-gray-300 font-bold py-1 px-3 rounded"
                  onClick={() => updateQuantity(product.id, -1)}
                  disabled={product.qty <= 0}
                >
                  -
                </button>
                <span className="px-4 text-lg">{product.qty}</span>
                <button
                  className="bg-gray-200 text-gray-600 hover:bg-gray-300 font-bold py-1 px-3 rounded"
                  onClick={() => updateQuantity(product.id, 1)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div>
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-2">الملخص:</h2>
            <hr className="border-b-1 border-blueGray-300 mb-6" />

            {products
              .filter((product: any) => product.qty > 0)
              .map((product: any) => (
                <React.Fragment key={product.id}>
                  <div className="flex justify-between mb-2">
                    <span>
                      {product.name} (x{product.qty})
                    </span>
                    <span>₪{product.price * product.qty}</span>
                  </div>
                  <hr className="border-b-1 border-blueGray-300 my-2" />
                </React.Fragment>
              ))}

            <div className="flex justify-between font-bold text-lg mt-10">
              <span>الإجمالي:</span>
              <span>₪{totalPrice}</span>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-4 rounded shadow-lg mt-10">
            <label className={inputLabelClass}>اختر فرع للاستلام:</label>
            <select
              name="branch"
              className={clsx("pr-12", inputClass, "bg-blueGray-100")}
              value={branchId}
              onChange={(e) => setBranchId(e.target.value)}
            >
              <option value="" disabled hidden>
                اختر الفرع
              </option>
              {branchesList.map((branch: any) => (
                <option key={branch.value} value={branch.value}>
                  {branch.label}
                </option>
              ))}
            </select>

            <label className={inputLabelClass + " mt-6"}>الاسم:</label>
            <input
              type="text"
              className={inputClass}
              value={name}
              onChange={(e) => setName(e.target.value)}
            
            />

            <label className={inputLabelClass + " mt-6"}>رقم الهاتف:</label>
            <input
              type="tel"
              className={inputClass}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {!isPhoneValid && phone && (
              <div className="text-red-500 text-sm mt-2">رقم الهاتف غير صالح</div>
            )}

            <div className="mt-5 text-lg">
              *سوف نقوم بالتواصل معك عند تجهيز الطلبية
            </div>

            <button
              className={clsx(
                "mt-5 w-full py-2 rounded text-white",
                isFormValid ? "bg-pink" : "bg-gray-400 cursor-not-allowed"
              )}
              onClick={submitCart}
              disabled={!isFormValid}
            >
              إتمام الشراء
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
