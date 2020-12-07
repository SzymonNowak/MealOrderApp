export const routes = {
  home: "/",
  main: "/main",
  orders: "/orders",
  contact: "/contact",
  register: "/register",
  login: "/login",
  addNewProduct: "/newProduct",
  newMeal: "/meals",
  newAddons: "/addons",
  newBeverages: "/beverages",
  newSauces: "/sauces",
  admin: "/admin",
  user: "/user",
  checkOutmyOrder: "/checkOutmyOrder",
  addresForm: "/addresForm",
  editProduct: "/editProduct",
  editProductForm: "/editProductForm/:collection/:id",
};

export const apiRoutes = {
  getAllMeals: "http://localhost:5000/meals/getAllMeals",
  getAllAddons: "http://localhost:5000/addons/getAllAddons",
  getAllBeverages: "http://localhost:5000/beverages/getAllBeverages",
  getAllSauces: "http://localhost:5000/sauces/getAllSauces",
};
