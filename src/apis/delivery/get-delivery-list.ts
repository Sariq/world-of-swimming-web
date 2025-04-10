import { BASE_URL } from "consts/api";
import { axiosInstance } from "utils/http-interceptor";

export const getDeliveryListApi = (isAllChecked:boolean) => {
    const body:any = {
    }
    if(isAllChecked){
      body.statusList = ["0","1","2","3"]
    }
    return axiosInstance
      .post(`delivery/list`, body)
      .then(function (response) {

         console.log("menu list success", response);
          return response;
      });
  };

  export default getDeliveryListApi;