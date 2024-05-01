import axios from "axios";
import { useLoaderData, Link, Navigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/CocktailPage";
import { useQuery } from "@tanstack/react-query";

const singleCocktailUrl =
    "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const searchSingleCocktail = (id) => {
    return {
        queryKey: ["cocktail", id],
        queryFn: async () => {
            const res = await axios.get(`${singleCocktailUrl}${id}`);
            return res?.data;
        },
    };
};

export const loader =
    (queryClient) =>
    async ({ params }) => {
        const { id } = params;
        // const { data } = await axios.get(`${singleCocktailUrl}${id}`);
        await queryClient.ensureQueryData(searchSingleCocktail(id));
        return { id };
    };

const Cocktail = () => {
    const { id } = useLoaderData();
    const { data } = useQuery(searchSingleCocktail(id));
    if (!data.drinks) {
        return <Navigate to="/" />;
    }
    const singleDrink = data.drinks[0];
    const {
        strDrink: name,
        strDrinkThumb: image,
        strAlcoholic: info,
        strCategory: category,
        strGlass: glass,
        strInstructions: instructions,
    } = singleDrink;

    const validIngredients = Object.keys(singleDrink).filter((key) => {
        if (key.startsWith("strIngredient") && singleDrink[key] !== null) {
            return key;
        }
    });

    return (
        <Wrapper>
            <header>
                <Link to="/" className="btn">
                    Back Home
                </Link>
                <h3>{name}</h3>
            </header>
            <div className="drink">
                <img src={image} alt={name} className="img" />
                <div className="drink-info">
                    <p>
                        <span className="drink-data">name:</span>
                        {name}
                    </p>
                    <p>
                        <span className="drink-data">category:</span>
                        {category}
                    </p>
                    <p>
                        <span className="drink-data">info:</span>
                        {info}
                    </p>
                    <p>
                        <span className="drink-data">glass:</span>
                        {glass}
                    </p>
                    <p>
                        <span className="drink-data">Ingredients:</span>
                        {validIngredients.map((key, id) => {
                            return (
                                <span key={id}>
                                    {singleDrink[key]}
                                    {id < validIngredients.length - 1
                                        ? ","
                                        : ""}
                                </span>
                            );
                        })}
                    </p>
                    <p>
                        <span className="drink-data">instructions:</span>
                        {instructions}
                    </p>
                </div>
            </div>
        </Wrapper>
    );
};

export default Cocktail;
