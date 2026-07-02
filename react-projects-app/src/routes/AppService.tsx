import { useEffect, useState } from "react";
import { getProjects } from "../service/projectservice";

export default function AppService() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {

        loadProjects();

    }, []);

    const loadProjects = async () => {

        const data = await getProjects();
        setProjects(data);

    }

    return(

        <>
            <h1>Lista de proyectos</h1>

            {
                projects.length === 0 ?

                <p>No hay proyectos</p>

                :

                projects.map((project:any)=>(
                    <div key={project.id}>

                        <h2>{project.title}</h2>

                        <p>{project.status}</p>

                        <button>Ver detalle</button>

                        <button>Editar</button>

                        <button>Eliminar</button>

                    </div>

                ))

            }

        </>

    )

}