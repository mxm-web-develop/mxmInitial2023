import { IProps } from "@/types";

interface LabelProps extends IProps{

}
const Label = (props:LabelProps) =>{
    
    return(
        <div className="text-xl flex items-center gap-x-2">
            <div className="w-[5px] h-[35px] bg-blue-500"></div>
           <div>Welcome to MxM Project Initialized!Gogogo</div> 
        </div>
    )
}

export default Label