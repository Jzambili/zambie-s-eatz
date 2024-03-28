export default function ImproveSkills(){
    const list = [
        "Learn new recipes",
        "Expirement with food",
        "Write your own recipes",
        "Known nutrition facts",
        "Fun cooking tips"
    ]
    
    return(
        <div className="section improve-skills">
            <div className="col img">
                 <img src="/img/img_2.jpg" alt="" />
                </div>
                <div className="col typography">
                <h1 className="title">Improve your skills</h1>
                { list.map((item, index) =>(
                    <p className="skill-item" key={index}>{item}</p>
                ))}
                <button className="btn"> signup now</button>
            </div>
            
        </div>
    )
}