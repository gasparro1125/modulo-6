import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { getCharacterCollection } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useCharacterCollection = () => {
  const [charactersCollection, setcharactersCollection] = React.useState<CharacterEntityVm[]>(
    []
  );

  const loadCharacterCollection = () => {
    getCharacterCollection().then((result) =>
    setcharactersCollection(mapToCollection(result.results, mapFromApiToVm))
    );
  };

  return { charactersCollection, loadCharacterCollection };
};
