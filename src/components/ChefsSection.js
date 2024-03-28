import ChefCard from "./ChefCard"

export default function ChefsSection(){
    const chef = [
        {
            name: "Danny bib",
            img: "img/img_3.jpg",
            recipesCount: "8",
            cuisine: "Japanese",
        },
        {
            name: "Timmy TObb",
            img: "img/img_4.jpg",
            recipesCount: "7",
            cuisine: "Sudanese",
        },
        {
            name: "Jimmy Hendrix",
            img: "img/img_5.jpg",
            recipesCount: "10",
            cuisine: "North Korean",
        },
        {
            name: "Page Ti",
            img: "img/img_1.jpg",
            recipesCount: "10",
            cuisine: "Mexican",
        },
        {
            name: "Henry Ford",
            img: "img/img_2.jpg",
            recipesCount: "10",
            cuisine: "French",
        },
        {
            name: "James Dee",
            img: "img/img_6.jpg",
            recipesCount: "12",
            cuisine: "British",
        },
    ]
    return (
        <div className="section chefs">
            <h1 className="title">Our Top Chefs</h1>
            <div className="top-chefs-container">
                {/* <ChefCard />
                <ChefCard />
                <ChefCard />
                <ChefCard />
                <ChefCard />
                <ChefCard /> */}
                { chef.map(chef => <ChefCard key={chef.name} chef={chef} />) }
            </div>
        </div>
    )
}