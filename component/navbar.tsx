import { itemsNavbar } from "@/data";


const Navbar = () => {
    return(
    <div className="fixed z-50 flex flex-colum items-center justify-center w-full mt-auto h-max bottom-10">
        <nav>
            <div className="flex items-center  justify-center gap-8 px-4 py-8>
            rounded-full bg-white/15 background-blur-sm">
                {itemsNavbar.map((item)=>(
                    <div key={item.id}
                    className="px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary">
                   <a href= {item.link}>{item.icon}</a>

                    </div>
                )
                
                )}
                
            </div>
        </nav>
        </div>
    );
}
export default Navbar;