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

  const handleLoadHotel = async () => {
    const apiHotel = await api.getCharacter(id);
    setCharacter(mapHotelFromApiToVm(apiHotel));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadHotel();
    };
  }, []);

  const handleSave = async (hotel: Character) => {
    const apiHotel = mapHotelFromVmToApi(hotel);
    const success = await api.saveCharacter(apiHotel);
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
