import mongoose from "mongoose";

const ProductsInCartSchema = mongoose.Schema({
  test: String,
  mealsList: [{ type: mongoose.Schema.Types.ObjectId, ref: "Meals" }],
  beverages: [{ type: mongoose.Schema.Types.ObjectId, ref: "Beverages" }],
  addons: [{ type: mongoose.Schema.Types.ObjectId, ref: "Addons" }],
  sauces: [{ type: mongoose.Schema.Types.ObjectId, ref: "Sauces" }],
});

const ProductsInCart = mongoose.model("ProductsInCart", ProductsInCartSchema);

export default ProductsInCart;

0;
