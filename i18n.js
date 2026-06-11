import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  EN: {
    translation: {
      home: "Home",
      shop: "Shop",
      contact: "Contact",
      register: "Register",
      login: "Log In",
      logout: "Log Out",

      allCategories: "All Category",
      addToCart: "Add to Cart",

      personal_info: "Personal Information",
      firstname: "First Name",
      lastname: "Last Name",
      email: "Email Address",
      phone: "Phone Number",
      address: "Delivery Address",
      password: "Password",
    },
  },
  KA: {
    translation: {
      home: "მთავარი",
      shop: "მაღაზია",
      contact: "კონტაქტი",
      Register: "რეგისტრაცია",
      LogIn: "შესვლა",
      LogOut: "გასვლა",
      allCategories: "ყველა კატეგორია",
      addToCart: "კალათაში დამატება",

      personal_info: "პირადი ინფორმაცია",
      firstname: "სახელი",
      lastname: "გვარი",
      email: "ელ. ფოსტა",
      phone: "ტელეფონის ნომერი",
      address: "მიწოდების მისამართი",
      password: "პაროლი",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("lang") || "EN",
  fallbackLng: "EN",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
