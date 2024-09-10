import { dataAboutPage } from "@/data";

const TimeLine = () => {
    return (
        <div className="Time-Caja">
            <div className="Time-Caja1">
                <div className="-my-6">
                    {dataAboutPage.map((data) => (
                     <div key={data.id} className="Time-Id">
                     <h3 className="Time-Title">{data.title}</h3>
                     <div className="Time-Info">
                         <time className="Time-Date">{data.date}</time>
                         <div className="Time-Subtitle">{data.subtitle}</div>
                     </div>
                     <div className="Time-Description">{data.description}</div>
                 </div>
                 
                    ))}
                </div>
            </div>
            </div>
    );
}

export default TimeLine;