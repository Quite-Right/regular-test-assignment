import { Descriptions } from 'antd';
import { PageHeader } from '@ant-design/pro-layout';
import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchCharacterRequest, setSelectedCharacterId } from '@redux/actions';
import { characterStoreState } from '@redux/selectors';
import { snakeCaseToText } from '@utils';
import { ICharacterFullInfo } from '@local-types';
import { CharacterDescription } from '@components/character-description/character-description';
import { Error } from '@components/error/error';
import { FullPageLoader } from './character.style';

export const Character = () => {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const characterId = params.characterId as string;
    dispatch(setSelectedCharacterId(characterId));
    dispatch(fetchCharacterRequest());
  }, [params]);
  const { data, fetching, error } = useSelector(characterStoreState, shallowEqual);

  return <>
    <PageHeader
      title={<Link to={'/characters'}>Characters</Link>}
      subTitle={data?.data?.name}
    />
    {error && <Error />}
    {!error && data?.data && <Descriptions>
      {Object.keys(data.data).map(key => <Descriptions.Item key={key} label={snakeCaseToText(key)}>
        <CharacterDescription
          characteristic={key as keyof ICharacterFullInfo}
          value={(data.data as ICharacterFullInfo)[key as keyof ICharacterFullInfo]}
        />
      </Descriptions.Item>
      )}
    </Descriptions>}
    {fetching && <FullPageLoader />}
  </>;
};