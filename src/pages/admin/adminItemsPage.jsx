import { FiPlusCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
export default function AdminItemsPage(){
    return(
        <div className="w-full h-full relative">
            <Link to="/admin/items/add">
                <FiPlusCircle className="text-[50px] absolute right-2 bottom-2 hover:text-red-500"/>
            </Link>
        </div>
    );
    
}