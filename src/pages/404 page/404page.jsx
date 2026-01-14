import { Header } from "../../assets/components/Header";
import './404page.css'

export function PageNotFound (){
    return(
        <>
        <title>404 Page</title>
        <Header />  

        <p className="page">This Page does'nt exist</p>
        </>
    );
}