// This for for Manage Modal (Content) Method
// User wanted to DELETE,EDIT, OR Change Visibility ?
// Then they can manage the Content View With this methods

import clsx from "clsx";

export const methods = {
  REMOVE_PRODUCT: "REMOVE_PRODUCT",
  EDIT_PRODUCT: "EDIT_PRODUCT",
  CHANGE_VISIBILITY: "CHANGE_VISIBILITY",
};

export const renderModalTitle = (selectedMethod) => {
  if (selectedMethod == methods.CHANGE_VISIBILITY) return "وضعیت انتشار مصحول";
  if (selectedMethod == methods.EDIT_PRODUCT) return "ویرایش محصول";
  if (selectedMethod == methods.REMOVE_PRODUCT) return "حذف محصول";
  else return "خطایی رخ داده است";
};

export const getBadgeStyles = (isPublished) => {
  if (isPublished)
    return {
      classNames: clsx("badge", "success-badge"),
    };
  else
    return {
      classNames: clsx("badge", "danger-badge"),
    };
};
