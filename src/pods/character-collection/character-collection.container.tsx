import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { deleteCharacter } from './api';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';

export const CharactersCollectionContainer = () => {
  const {charactersCollection, loadCharacterCollection } = useCharacterCollection();
  const history = useHistory();

  React.useEffect(() => {
    loadCharacterCollection();
  }, []);

  const handleCreateHotel = () => {
    history.push(linkRoutes.createCharacter);
  };

  const handleEdit = (id: number) => {
    history.push(linkRoutes.editCharacter(String(id)));
  };

  const handleDelete = async (id: number) => {
    await deleteCharacter(id);
    loadCharacterCollection();
  };

  return (
    <CharacterCollectionComponent
      characterCollection={charactersCollection}
      onCreateCharacter={handleCreateHotel}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
};
