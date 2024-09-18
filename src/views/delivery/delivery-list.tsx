// src/Cart.js
import getDeliveryListApi from "apis/delivery/get-delivery-lis";
import React, { useEffect, useState } from "react";


function askNotificationPermission() {
    if ('Notification' in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          console.log('Notification permission granted.');
        } else {
          console.log('Notification permission denied.');
        }
      });
    }
  }

const DeliveryListView = () => {
  const [deliveryList, setDeliveryList] = useState([]);

  const getDeliveryList = async () => {
    const list: any = await getDeliveryListApi();
    setDeliveryList(list);
  };
  useEffect(() => {
    getDeliveryList();
    askNotificationPermission();

  }, []);

  const triggerNotification = () => {
    console.log("'Notification' in window && Notification.permission === 'granted'",'Notification' in window && Notification.permission === 'granted')
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('New Message', {
        body: 'You have a new notification!',
        tag: 'message-notification'
      });
    } else {
      console.log('Notification permission not granted or notifications not supported.');
    }
  };

  return (
    <div className="container mx-auto mt-10 ">
      {deliveryList.map((item: any) => {
        return (
          <div className="flex ">
            <div className="ml-10">{item.fullName}</div>
            <div>{item.fullName}</div>
            <div>{item.fullName}</div>
          </div>
        );
      })}
      <button onClick={triggerNotification}>Show Notification</button>
    </div>
  );
};

export default DeliveryListView;
