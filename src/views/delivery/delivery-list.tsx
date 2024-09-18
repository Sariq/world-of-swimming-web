// src/Cart.js
import getDeliveryListApi from "apis/delivery/get-delivery-lis";
import React, { useEffect, useState } from "react";

function askNotificationPermission() {
  if ("Notification" in window) {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        console.log("Notification permission granted.");
      } else {
        console.log("Notification permission denied.");
      }
    });
  }
}

const DeliveryListView = () => {
  const [deliveryList, setDeliveryList] = useState<any>([]);

  const getDeliveryList = async () => {
    const list: any = await getDeliveryListApi();
    setDeliveryList(list);
  };
  useEffect(() => {
    getDeliveryList();

    // askNotificationPermission();
    setTimeout(() => {
      getDeliveryList();
    }, 15 * 1000);
    const interval = setInterval(() => {
      getDeliveryList();
    }, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const triggerNotification = () => {
    console.log(
      "'Notification' in window && Notification.permission === 'granted'",
      "Notification" in window && Notification.permission === "granted"
    );
    if ("Notification" in window && Notification.permission === "granted") {
      console.log("XXXXX");
      new Notification("Notification title");
    } else {
      console.log(
        "Notification permission not granted or notifications not supported."
      );
    }
  };

  if(!deliveryList || deliveryList?.length === 0){
    return(
        <div className="w-full flex items-center justify-center mt-10 text-lg">
            <div className="m-auto">
            لا يوجد ارساليات

            </div>
        </div>
    )
  }

  return (

      



<div className="relative overflow-x-auto text-sm mt-2">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="">
                <th scope="col" className="px-6 py-3 ">
                    الاسم
                </th>
                <th scope="col" className="px-6 py-3">
                    رقم الهاتف
                </th>
                <th scope="col" className="px-6 py-3">
                    السعر
                </th>
                <th scope="col" className="px-6 py-3">
                    الوقت
                </th>
            </tr>
        </thead>
        <tbody className="">
        {deliveryList.map((item: any) => {
            return(
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                <th scope="row" className="px-6 py-4    ">
                {item.fullName}
                </th>
                <td className="px-6 py-4">
                {item.phone}
                </td>
                <td className="px-6 py-4">
                {item.price}
                </td>
                <td className="px-6 py-4">
                    {item.deliveryDeltaMinutes}
                </td>
            </tr>)
            
        })}
        </tbody>
    </table>
</div>

  );
};

export default DeliveryListView;
