import axios from 'axios'
import { CharacterListApi } from './character-collection.api-model';
import { mockCharacterCollection } from './character-collection.mock-data';

//let charactersCollection = [...mockCharacterCollection];

const url="https://rickandmortyapi.com/api/character";


export const getCharacterCollection= async (): Promise<CharacterListApi> => {
  return axios.get<CharacterListApi>(url).then(response =>{
    return response.data
  })
};

/*
export const getHotelCollectionFetchasyncAwait = async (): Promise<HotelEntityApi[]> => {
  const response = await fetch(url);
  if(response.ok){
    return await response.json()
  }else {
    throw Error(response.statusText)
  }
};

export const getHotelCollectionFetchPromise = async (): Promise<HotelEntityApi[]> => {
  return fetch(url).then(response=>{
    if(response.ok){
    return response.json()
    }else {
      throw Error(response.statusText)
    }
  });

};

export const getHotelCollectionAxiosPromise = async (): Promise<HotelEntityApi[]> => {
  return axios.get<HotelEntityApi[]>(url).then(response =>{
    return response.data
  })
};
*/
//////////////////////////////////////////////////////////////////
/*
export const deleteHotelFetch = async (id: string): Promise<boolean> => {
  const response = await fetch(`${url}/${id}`, {method:'DELETE'})
  return response.ok
};
*/


export const deleteCharacter = async (id: number): Promise<boolean> => {
  return axios.delete(`${url}\${id}`)
};
