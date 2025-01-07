// src/Cart.js
import getDeliveryListApi from "apis/delivery/get-delivery-list";
import updateDelivery from "apis/delivery/update-delivery";
import React, { useEffect, useState } from "react";

const DeliveryListView = () => {
  const [deliveryList, setDeliveryList] = useState<any>([]);
  const [isAllChecked, setIsAllChecked] = useState<any>(false);

  const getDeliveryList = async (isAllCheckedValue: boolean) => {
    const list: any = await getDeliveryListApi(isAllCheckedValue);
    setDeliveryList(list);
  };

  useEffect(() => {
    getDeliveryList(isAllChecked);

    setTimeout(() => {
      getDeliveryList(isAllChecked);
    }, 15 * 1000);

    const interval = setInterval(() => {
      getDeliveryList(isAllChecked);
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const getColorAndTextByStatus = (order: any) => {
    switch (order.status) {
      case "0":
        return {
          text: "الغيت",
          color: "red-500",
        };
      case "1":
        return {
          text: "استقبل",
          color: "blue",
        };
      case "2":
        return {
          text: "وصلت",
          color: "orange-500",
        };
      case "3":
        return {
          text: "انتهت",
          color: "green-500",
        };
    }
  };

  const updateStatus = async (item: any) => {
    let updateData = { ...item };
    switch (item.status) {
      case "1":
        updateData.status = "2";
        break;
      case "2":
        updateData.status = "3";
        break;
    }

    await updateDelivery(updateData);
    getDeliveryList(isAllChecked);
  };

  const handleIsAllFilter = (e: any) => {
    setIsAllChecked(e.target.checked);
    getDeliveryList(e.target.checked);
  };
  const cancelOrder = async (item: any) => {
    let updateData = { ...item };
    updateData.status = "0";
    await updateDelivery(updateData);
    getDeliveryList(isAllChecked);
  };

  if (!deliveryList || deliveryList?.length === 0) {
    return (
      <div className="w-full flex items-center justify-center mt-10 text-lg">
        <div className="m-auto">لا يوجد ارساليات</div>
      </div>
    );
  }

  return (
    <div className="pt-5 bg-blueGray-900 h-[100%]">
      <div className="flex items-center justify-center ">
        <label className="inline-flex items-center cursor-pointer">
          <input
            id="customCheckLogin"
            type="checkbox"
            className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150 bg-gray-800"
            onChange={handleIsAllFilter}
          />
          <span className="mr-2 text-lg  text-white">
            كل الطلبيات
          </span>
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-blueGray-900">
        {deliveryList.map((item: any, index: number) => {
          const colorTextByStatus = getColorAndTextByStatus(item);
          return (
            <div
              key={index}
              className={`shadow-md rounded-lg p-4 bg-${colorTextByStatus?.color} dark:text-white flex flex-col gap-4`}
            >
              {/* Store Name */}
              <div className="flex justify-center items-center text-xl font-bold">
                {item.storeName || "اسم المحل غير معروف"}
              </div>

              {/* Full Name and Phone */}
              <div className="flex justify-between">
                <span className="font-medium">الاسم:</span>
                <span>{item.fullName}</span>
              </div>
              <div className="border-t border-white"></div>

              <div className="flex justify-between">
                <span className="font-medium">رقم الهاتف:</span>
                <span>{item.phone}</span>
              </div>
              <div className="border-t border-white"></div>

              {/* Price and Time */}
              <div className="flex justify-between">
                <span className="font-medium">السعر:</span>
                <span>{item.price}</span>
              </div>
              <div className="border-t border-white"></div>

              <div className="flex justify-between">
                <span className="font-medium">الوقت:</span>
                <span>{item.deliveryDeltaMinutes}</span>
              </div>
              <div className="border-t border-white"></div>

              {/* Action Buttons */}
              {item.status !== "0" && <div className="flex justify-center gap-4">
                {item.status !== "3" && <button
                  onClick={() => updateStatus(item)}
                  className={`px-4 py-2 bg-gray-800 text-white rounded  w-[40%]`}
                  disabled={item.status === "3"}
                >
                  {colorTextByStatus?.text}
                </button>}
                <button
                  onClick={() => cancelOrder(item)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600  w-[40%]"
                >
                  إلغاء
                </button>
              </div>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DeliveryListView;
