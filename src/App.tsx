import './App.css'
import Toggle from "./Toggle.tsx";
import {useEffect, useState} from "react";

type Extension = {
    logo: string;
    name: string;
    description: string;
    isActive: boolean;
}


function App() {

    const [extensions, setExtensions] = useState<Extension[]>([]);

    useEffect(() => {
        fetch("/data.json")
            .then((res) => res.json())
            .then(data => setExtensions(data));
    }, [])

  return (
    <>
        {extensions.filter(e => e.isActive).map((extension) => (
            <>
                <h1>{extension.name}</h1>
                <img src={extension.logo} alt=""/>
                <p>{extension.description}</p>
                <Toggle />
            </>
        ))}
    </>
  )
}

export default App
