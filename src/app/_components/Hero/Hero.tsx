import { ReactNode } from "react";

interface Props{
    children?:ReactNode;
}

export default function Hero({children}:Props){
    return(
        <div>
           <p>ヒーローテスト</p>
        </div>
    )
}