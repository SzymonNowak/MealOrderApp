/* eslint-disable no-nested-ternary */
/* eslint-disable indent */
/* eslint-disable no-use-before-define */

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import MealSection from "../components/molecules/mealSection/MealSection";
import drawBurger from "../assets/drawBurger.jpg";
import drawFrenchFries from "../assets/drawFrenchFries.png";
import drawTortilla from "../assets/drawTortilla.jpg";
import drawBeverages from "../assets/drawBeverages.jpg";
import drawSauce from "../assets/drawSauce.jpg";
import { getAllMeals } from "../actions/meals";
import { getAllAddons } from "../actions/addons";
import { getAllBeverages } from "../actions/beverages";
import { getAllSauces } from "../actions/sauces";
import { Header } from "../components/atoms/Header/Header";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { routes } from "../routes/index";
import CartButton from "../components/atoms/BUTTONS/CartButton/CartButton";

const Main = () => {
  const dispatch = useDispatch();
  const meals = useSelector((state) => state.MealReducer.meals);
  const addons = useSelector((state) => state.AddonReducer.addons);
  const beverages = useSelector((state) => state.BeveragesReducer.beverages);
  const sauces = useSelector((state) => state.SauceReducer.sauces);
  const cart = useSelector((state) => state.ShopingCartReducer.productsInCart);
  const shipingPrice = 6;
  const [currentPrice, setCurrentPrice] = useState(0);

  const total = () => {
    const totalPrice = cart.reduce((prev, current) => {
      return prev + current.price;
    }, shipingPrice);
    setCurrentPrice(totalPrice);
  };
  useEffect(() => {
    dispatch(getAllMeals());
    dispatch(getAllAddons());
    dispatch(getAllBeverages());
    dispatch(getAllSauces());
  }, [dispatch]);
  useEffect(() => {
    total();
  });

  const StyledHeader = styled(Header)`
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: ${({ theme }) => theme.margin.xl};
    margin-left: ${({ theme }) => theme.margin.l};
    margin-top: ${({ theme }) => theme.margin.l};
    letter-spacing: 3px;
  `;

  return (
    <>
      <StyledHeader>Burgers : </StyledHeader>
      <MealSection meals={meals} mealType={"burger"} picture={drawBurger} />

      <StyledHeader>Tortillas : </StyledHeader>
      <MealSection meals={meals} mealType={"tortilla"} picture={drawTortilla} />

      <StyledHeader>Dinnerware Set : </StyledHeader>
      <MealSection
        meals={meals}
        mealType={"dinnerwareSet"}
        picture={drawFrenchFries}
      />

      <StyledHeader>Addons : </StyledHeader>
      <MealSection meals={addons} picture={drawFrenchFries} />

      <StyledHeader>Sauces : </StyledHeader>
      <MealSection meals={sauces} picture={drawSauce} />

      <StyledHeader>Beverages : </StyledHeader>
      <MealSection meals={beverages} picture={drawBeverages} />
      <NavLink to={routes.checkOutmyOrder}>
        <CartButton>
          <FaShoppingCart />
          <span>{`${currentPrice} zl`}</span>
        </CartButton>
      </NavLink>
    </>
  );
};

export default Main;
