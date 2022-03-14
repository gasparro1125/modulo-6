import { Character } from './character.api-model';
import axios from 'axios';

export const getCharacter = async (id: string): Promise<Character> => {
  return axios.get(`/api/characters/${id}`).then(({data})=>data)
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  if(character.id){
    //Put
    return axios.put(`/api/characters/${character.id}`,character).then(({data})=>data)
  }else{
    //Post
    return axios.post(`/api/characters`,character).then(({data})=>data)
  }
  return true
};
