import React from "react";
import Wrapper from "../assets/wrappers/CocktailList";
import CocktailCard from "./CocktailCard";

const CocktailList = ({ drinks }) => {
    if (!drinks)
        return (
            <h4 style={{ textAlign: "center" }}>
                No matching cocktails found...
            </h4>
        );
    const strFormattedDrinks = drinks.map((drink) => {
        const {
            idDrink,
            strAlcoholic,
            strDrinkThumb,
            strGlass,
            strDrink,
        } = drink;
        return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
        };
    });
    return (
        <Wrapper>
            {strFormattedDrinks.map((item) => {
                return <CocktailCard {...item} key={item.id} />;
            })}
        </Wrapper>
    );
};

export default CocktailList;
