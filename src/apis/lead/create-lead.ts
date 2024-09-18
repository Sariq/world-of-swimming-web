import { BASE_URL, CUSTOMER_API } from "consts/api";
import { axiosInstance } from "utils/http-interceptor";

export const getOrdersListApi = (data:any) => {
  const body = data;
    return axiosInstance
      .post(`${BASE_URL}/${CUSTOMER_API.CREATE_LEAD}`,body)
      .then(function (response) {

         console.log("lead create susccess success", response);
          return response;
      });
  };

  export default getOrdersListApi;