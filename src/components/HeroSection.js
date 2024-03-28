import CustomImage from "./CustomImage"


export default function HeroSection(){
const images = [
    "/img/img_1.jpg",
    "/img/img_2.jpg",
    "/img/img_3.jpg",
    "/img/img_4.jpg",
    "/img/img_5.jpg",
    "/img/img_6.jpg",
    "/img/img_7.jpg",
    "/img/img_8.jpg",
    "/img/img_9.jpg"
]
    return(
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">What we do</h1>
                <p className="info"> Z eats is a place where you can learn how to make quality food right at your home</p>
                <button className="btn"> explore now</button>
            </div>
            <div className="col gallery">
                { images.map((src, index) => (
                 <CustomImage key={index} imgSrc={src} pt={"90%"}/>
                ))}
            </div>
        </div>
    )
}/* use ur own pics */