import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapHotelFromApiToVm = (
  character: apiModel.Character
): viewModel.Character => ({
  ...character,
  id: character.id,
  name: character.name,
  status: character.status,
  species: character.species,
  type: character.type,
  gender: character.gender,
  bestSentences:character.bestSentences,
});

export const mapHotelFromVmToApi = (character: viewModel.Character): apiModel.Character =>
  (({
    ...character,
    id: character.id,
    name: character.name,
    status: character.status,
    species: character.species,
    type: character.type,
    gender: character.gender,
    bestSentences:character.bestSentences,
  } as unknown) as apiModel.Character);
