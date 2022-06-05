import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router'
import portfolios from "../data/portfolios";
const DetailsPage = () => {
    const {name} = useParams()
    const {project, setProject} = useState({})
    useEffect(() => {
        if(name.length ===0){
            setProject(portfolios)
        }else{
            const k =portfolios.map((port)=>port.title == name)
            setProject(k)
        }
       
    }, [project])
    return (
        <div>
           {project}
        </div>
    )
}

export default DetailsPage
