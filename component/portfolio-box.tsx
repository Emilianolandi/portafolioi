import Image from "next/image"
import Link from "next/link"

interface PortfolioBoxProps{
    data:{
        id: number,
        title:string,
        image: string,
        urlGithub :string,
        urlDemo: string 
    } 
}


const PortfolioBox = (props:PortfolioBoxProps) => {
    const {data} = props
    const { id, title, image, urlGithub, urlDemo} = data
    
    return (
    <div className="data-box">
        <h3 className="data-box-3">
        {title}
        </h3>
        <Image src={image} alt="image product" width={150}
        height={150}
        className="w-full md:w-[200px] rounded-2xl h-auto"/>
    <div className="flex gap-5 mt-5">
    <Link href={urlGithub} target="_blank"
    className="p-2 transition duration-200
    rounded-lg bg-slate-50 hover:bg-slate-500/80">
        Github
    </Link>
    <Link href={urlGithub} target="_blank"
    className="p-2 transition duration-150
    
    rounded-lg bg-secondary hover:bg-secondary/80">
        Github
    </Link>
</div>
    </div>
    );
}

export default PortfolioBox;