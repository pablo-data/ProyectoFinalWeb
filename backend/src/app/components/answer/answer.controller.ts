import repository from "./answer.repository";
import { Answer } from '../../models/answer.model';

function getAnswers(): Promise<Answer[]>{
    return repository.getAnswers();
}

function getAnswer(id: string): Promise<Answer[]>{
    return repository.getAnswer(id);
}

function postAnswer(answer: Answer): Promise<any[]>{
    return repository.postAnswer(answer);
}

function patchAnswer(id: string, answer: Answer): Promise<any[]>{
    return repository.patchAnswer(id, answer);
}

function deleteAnswer(id: string): Promise<any[]>{
    return repository.deleteAnswer(id);
}




export default { getAnswers, getAnswer, postAnswer, patchAnswer, deleteAnswer }