import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as api from './api';
import { createEmptyCharacter, Character } from './character.vm';
import { mapHotelFromApiToVm, mapHotelFromVmToApi } from './character.mappers';
import { CharacterComponent } from './character.component';

export const CharacterContainer: React.FunctionComponent = () => {
  const [character, setCharacter] = React.useState<Character>(createEmptyCharacter());
  const { id } = useParams();
  const history = useHistory();

  const handleLoadCharacter = async () => {
    const apiCharacter = await api.getCharacter(id);
    setCharacter(mapHotelFromApiToVm(apiCharacter));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    };
  }, []);

  const handleSave = async (character: Character) => {
    const apiCharacter = mapHotelFromVmToApi(character);
    const success = await api.saveCharacter(apiCharacter);
    if (success) {
      console.log("i don't wanna goooo home")
    } else {
      alert('Error on save hotel');
    }
  };

  const handleBack = () => {
    history.goBack();
  };

  return <CharacterComponent character={character} onSave={handleSave} onBack={handleBack} />;
};
