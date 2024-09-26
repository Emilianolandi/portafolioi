import { dataAboutPage } from "@/data";

const TimeLine = () => {
    return (
        <div className="flex flex-col justify-center divide-y divide-slate-200">
            <div className="w-full max-w-3xl mx-auto md:pb-40 md:pt-20">
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