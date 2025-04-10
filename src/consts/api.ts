// export const BASE_URL = "https://sari-apps-lcibm.ondigitalocean.app/api/";
//DEV
export const BASE_URL = "http://localhost:1111/api/";

export const MENU_API = {
    CONTROLLER: "config",
    GET_MENU_API : "menu",
    GET_SLIDER_API : "getAppSliderGallery",
    ADMIN_UPLOAD_IMAGES_API : "admin/images/upload",
    ADMIN_ADD_PRODUCT_API : "admin/product/insert",
    ADMIN_UPDATE_PRODUCT_API : "admin/product/update",
    ADMIN_UPDATE_PRODUCT_ACTIVE_TASTES_API : "admin/product/update/activeTastes",
    ADMIN_UPDATE_PRODUCTS_ORDER_TASTES_API : "admin/product/update/order",
    ADMIN_UPDATE_IS_IN_STORE_PRODUCT_API : "admin/product/update/isInStore",
    ADMIN_DELETE_PRODUCT_API : "admin/product/delete",
    GET_IMAGES_BY_CATEGORY : "images",
};

export const CUSTOMER_API = {
    CONTROLLER: "customer",
    CREATE_LEAD: "customer/create/lead"
};

export const ORDER_API = {
    CONTROLLER: "order",
    SUBMIT_ORDER_API : "create",
    UPDATE_CCPAYMENT_API: "updateCCPayment",
    ADD_REFUND_API: "addRefund",
    GET_ADMIN_ORDERS_API: "admin/orders",
    GET_ADMIN_NOT_PRINTED_ORDERS_API: "admin/not-printed",
    GET_ADMIN_NOT_VIEWD_ORDERS_API: "admin/not-viewd",
    GET_ADMIN_ALL_NOT_VIEWD_ORDERS_API: "admin/all/not-viewd",
    GET_CUSTOMER_INVOICES_API: "customer-invoices",
    GET_CUSTOMER_ORDERS_API: "customer-orders",
    UPDATE_ADMIN_ORDERS_API: "update",
    UPDATE_ADMIN_ORDERS_VIEWD_API: "update/viewd",
    UPDATE_ADMIN_ORDERS_BOOK_DELIVERY_API: "book-delivery",
    CREATE_ADMIN_ORDERS_BOOK_CUSTOM_DELIVERY_API: "book-custom-delivery",
    UPDATE_ADMIN_ORDERS_BOOK_CUSTOM_DELIVERY_API: "update-custom-delivery",
    GET_ADMIN_ORDERS_BOOK_CUSTOM_DELIVERY_API: "get-custom-delivery",
    UPDATE_ALL_ADMIN_ORDERS_API: "update/all",
    PRINTED_ADMIN_ORDERS_API: "printed",
    GET_ORDERS_API : "getorders",
};