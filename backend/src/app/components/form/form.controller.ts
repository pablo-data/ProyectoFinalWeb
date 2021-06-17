import repository from "./form.repository";

import { Form } from '../../models/form.model';

function getForms(): Promise<any[]>{
    return repository.getForms();
}

function getForm(id: string): Promise<any[]>{
    return repository.getForm(id);
}

function postForm(form: Form): Promise<any[]>{
    form.asunto = form.asunto.toLowerCase(); 
    form.categoria = form.categoria.toLowerCase(); 
    form.descripcion = form.descripcion.toLowerCase(); 
    return repository.postForm(form);
}

function patchForm(id: string, form: Form): Promise<any[]>{
    if(form.asunto){
        form.asunto = form.asunto.toLowerCase(); 
    };
    if(form.categoria){
        form.categoria = form.categoria.toLowerCase(); 
    };
    if(form.descripcion){
        form.descripcion = form.descripcion.toLowerCase(); 
    };
    return repository.patchForm(id, form);
}

function deleteForm(id: string): Promise<any[]>{
    return repository.deleteForm(id);
}




export default { getForms, getForm, postForm, patchForm, deleteForm }