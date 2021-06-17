import repository from "./priority.repository";

import { Priority } from '../../models/priority.model';

function getPriorities(): Promise<any[]>{
    return repository.getPriorities();
}

function getPriority(id: string): Promise<any[]>{
    return repository.getPriority(id);
}

function postPriority(priority: Priority): Promise<any[]>{
    priority.prioridad = priority.prioridad.toLowerCase(); 
    return repository.postPriority(priority);
}

function patchPriority(id: string, priority: Priority): Promise<any[]>{
    priority.prioridad = priority.prioridad.toLowerCase(); 
    return repository.patchPriority(id, priority);
}

function deletePriority(id: string): Promise<any[]>{
    return repository.deletePriority(id);
}




export default { getPriorities, getPriority, postPriority, patchPriority, deletePriority }