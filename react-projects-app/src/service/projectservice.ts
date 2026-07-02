import axios from "axios";
import type { Project } from "../interfaces/project";

const API_URL = "http://localhost:3002/projects";

export const getProjects = async () => {
    const response = await axios.get<Project[]>(API_URL);
    return response.data;
}