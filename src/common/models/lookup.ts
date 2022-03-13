export interface Lookup {
  id: number;
  name: string;
}

export const createEmptyLookup = (): Lookup => ({
  id: -1,
  name: '',
});
