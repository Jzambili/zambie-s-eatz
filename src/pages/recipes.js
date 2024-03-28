import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/RecipeCard"

export default function Recipes(){
    const recipes = [
        {
            title: "Chicken Pan Pizza",
            image: "/img/img_1.jpg",
            authorImg: "/img/img_3.jpg",
        }, 
        {
            title: "Spaghetti and Meatballs",
            image: "/img/img_4.jpg",
            authorImg: "/img/img_3.jpg",
        },
        {
            title: "American Cheese Burger",
            image: "/img/img_5.jpg",
            authorImg: "/img/img_3.jpg",
        },
        {
            title: "Mutton Biriyani",
            image: "/img/img_6.jpg",
            authorImg: "/img/img_3.jpg",
        },
        {
            title: "Japanese Sushi",
            image: "/img/img_1.jpg",
            authorImg: "/img/img_3.jpg",
        },
        {
            title: "Chicken Pan Pizza",
            image: "/img/img_6.jpg",
            authorImg: "/img/img_3.jpg",
        }, 
        {
            title: "Spaghetti and Meatballs",
            image: "/img/img_4.jpg",
            authorImg: "/img/img_3.jpg",
        },
        {
            title: "American Cheese Burger",
            image: "/img/img_5.jpg",
            authorImg: "/img/img_3.jpg",
        }
    ].sort(() => Math.random() - 0.5)
    
    return (
        <div>
            <PreviousSearches />
            <div className="recipes-container">
                {/* <RecipeCard />*/}
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}