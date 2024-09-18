import { BASE_URL } from "consts/api";
import { axiosInstance } from "utils/http-interceptor";

export const getDeliveryListApi = () => {
    const body = {
        isAll: false
      }
    return axiosInstance
      .post(`order/get-custom-delivery`, body)
      .then(function (response) {

         console.log("menu list success", response);
          return response;
      });
  };

  export default getDeliveryListApi;