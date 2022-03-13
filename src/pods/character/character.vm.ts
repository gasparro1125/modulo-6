export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image:string;
  bestSentences:string[]
}

export const createEmptyCharacter = (): Character => ({
  id: -1,
  name: '',
  status: '',
  species: "",
  type: '',
  gender: '',
  image:'',
  bestSentences:[]
});
