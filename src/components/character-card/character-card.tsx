import { useMemo, Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import { List, Descriptions, Card } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { snakeCaseToText } from '@utils';
import { ICharacter, IEditCharacterInfo } from '@local-types';
import { CardHeader } from './character-card.styles';

// interface ICharacterIterable extends ICharacter {
//     [key: string]: number | string | null | string[];
// }

interface ICharacterCardProps {
    id: string;
    character: ICharacter;
    setEditInfo: Dispatch<SetStateAction<IEditCharacterInfo | null>>
}

export const CharacterCard = ({ id, character, setEditInfo }: ICharacterCardProps) => {
  const { name } = character;

  const keysToRender = useMemo(() => [
    'url', 'gender', 'mass', 'birth_year', 'hair_color', 'skin_color', 'eye_color'
  ], []);
  return <List.Item
    key={name}
  >
    <Card
      title={<CardHeader>
        <Link key="more" to={id}>
          {name}
        </Link>
        <EditOutlined
          key="edit"
          onClick={() => setEditInfo({ ...character, id })}
        />
      </CardHeader>}
    >
      <Descriptions
        layout="horizontal"
        column={1}
      >
        {keysToRender.map(key => <Descriptions.Item
          key={key}
          label={snakeCaseToText(key)}>
          {key === 'url' ? <a href={character[key as keyof ICharacter] as string}>
            {character[key as keyof ICharacter]}
          </a> : <>{character[key as keyof ICharacter]}</>}
        </Descriptions.Item>)}
      </Descriptions>
    </Card>
  </List.Item>;
};