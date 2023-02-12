import { ICharacterFullInfo } from '@local-types';
import { EyeColor } from './character-description.styles';

interface ICharacterDescriptionProps {
    characteristic: keyof ICharacterFullInfo
    value?: string | string[]
}

export const CharacterDescription = ({ characteristic, value = '' }: ICharacterDescriptionProps) => {
  if (characteristic === 'created' || characteristic === 'edited') 
    return <>{new Date(value as string).toLocaleDateString()}</>;
  if (characteristic === 'homeworld' || characteristic === 'url')
    return <a href={value as string}>{value}</a>;
  if (characteristic === 'eye_color')
    return (value as string).indexOf('-') !== -1 ?
      <>
        {
          (value as string).split('-').map(color => <EyeColor
            key={color}
            eyeColor={color}
          />)
        }
      </> : <EyeColor
        eyeColor={value as string}
      />;
  if (Array.isArray(value)) return <div>
    {(value as string[]).map(el => <div key={el} >
      <a href={el}>{el}</a>
    </div>)}
  </div>;
  return <>{value}</>;
};