import { BASE_URL, CUSTOMER_API, ORDER_API } from "consts/api";
import moment from "moment";
import { axiosInstance } from "utils/http-interceptor";


const produtsAdapter = (order: any) => {
    let finalProducts: any = [];
    order.products.map((product: any) => {
  
      const finalProduct = {
        item_id: product?.id,
        name: product?.name,
        image: product?.image,
        nameAR: product?.nameAR,
        nameHE: product?.nameHE,
        qty: product?.qty,
        note: product?.note,
        price: product?.price,
        data: {},
      };
      finalProducts.push(finalProduct);
    });
    return finalProducts;
  };

const getCartData = async (order: any) => {
    let finalOrder: any = {
      payment_method: order.paymentMthod,
      receipt_method: order.shippingMethod,
      geo_positioning: order.geo_positioning,
      locationText: order.locationText,
      items: produtsAdapter(order),
    };
    const version = 'TBD';

    const cartData: any = {
      order: finalOrder,
      total: order.totalPrice,
      branchId: order.branchId,
      name: order.name,
      phone: order.phone,
      app_language: "0",
      device_os:"web",
      app_version: version,
      unique_hash: '',
      datetime: moment().format(),
      orderDate: order.orderDate || moment().format(),
      customerId: order.customerId,
      orderType: order.orderType,
      shippingPrice: order.shippingPrice,
      orderPrice: order.totalPrice - (order.shippingPrice || 0)
    };

    return cartData;
  };

export const submitOrderApi = async (order:any) => {
  const cartData = await getCartData(order);

  let formData = new FormData();
  const body = cartData;
  console.log("body",body)
  formData.append("body", JSON.stringify(body));

  return axiosInstance
    .post(`${ORDER_API.CONTROLLER}/${ORDER_API.SUBMIT_ORDER_API}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then(function (response: any) {
      // const jsonValue: any = JSON.parse(fromBase64(response.data));

      // const data: TOrderSubmitResponse = {
      //   has_err: jsonValue.has_err,
      //   orderId: jsonValue.orderId,
      //   salt: jsonValue.salt,
      //   status: jsonValue.status,
      //   code: jsonValue.code,
      // }
      return {response, cartData: body};
    })
    .catch(function (error) {
      const data: any = {
        has_err: true,
        orderId: 0,
        salt: "",
        status: "",
        code: 0,
      };
      return data;
    });
  };

  export default submitOrderApi;