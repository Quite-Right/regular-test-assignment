import { ICharacter } from '@local-types';

export const CHARACTER_CARD_KEYS_TO_RENDER: (keyof ICharacter)[] = [
  'url', 'gender', 'mass', 'birth_year', 'hair_color', 'skin_color', 'eye_color'
];