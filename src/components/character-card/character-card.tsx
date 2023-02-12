import { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import { List, Descriptions, Card } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { snakeCaseToText } from '@utils';
import { ICharacter, IEditCharacterInfo } from '@local-types';
import { CardHeader } from './character-card.styles';
import { CHARACTER_CARD_KEYS_TO_RENDER } from '@constants';

// interface ICharacterIterable extends ICharacter {
//     [key: string]: number | string | null | string[];
// }  
interface ICharacterCardProps {
    id: string;
    character: ICharacter;
    setEditInfo: Dispatch<SetStateAction<IEditCharacterInfo | null>>
}

export const CharacterCard = ({ id, character, setEditInfo }: ICharacterCardProps) => {
  return <List.Item
    key={id}
  >
    <Card
      title={<CardHeader>
        <Link key="more" to={id}>
          {character.name}
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
        {CHARACTER_CARD_KEYS_TO_RENDER.map((key: keyof ICharacter) => <Descriptions.Item
          key={key}
          label={snakeCaseToText(key)}>
          {key === 'url' ? <Link to={character[key]}>
            {character[key]}
          </Link> : <>{character[key]}</>}
        </Descriptions.Item>)}
      </Descriptions>
    </Card>
  </List.Item>;
};