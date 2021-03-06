import React from "react";
import styled from "styled-components";
import NewAddomForm from "../components/organism/NewProductForms/NewAddonForm/NewAddonForm";
import NewMealForm from "../components/organism/NewProductForms/NewMealForm/NewMealForm";
import NewSauceForm from "../components/organism/NewProductForms/NewSauceForm/NewSauceForm";
import NewBeveragesFrom from "../components/organism/NewProductForms/NewBeveragesForm/NewBeveragesForm";
const Wrapper = styled.div`
  display: flex;
`;
const NewProduct = () => {
  return (
    <Wrapper>
      <NewMealForm action="add" />
      <NewAddomForm action="add" />
      <NewSauceForm action="add" />
      <NewBeveragesFrom action="add" />
    </Wrapper>
  );
};

export default NewProduct;
