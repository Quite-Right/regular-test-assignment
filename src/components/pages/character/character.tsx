import { Descriptions } from 'antd';
import { PageHeader } from '@ant-design/pro-layout';
import { useParams, Link } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacterRequest, setSelectedCharacterId } from '@redux/actions';
import { selectCharacterInfo } from '@redux/selectors/character';
import { snakeCaseToText } from '@utils';
import { ICharacterFullInfo } from '@local-types';
import { EyeColor } from './character.styles';

export const Character = () => {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (params?.characterId && dispatch) {
      dispatch(fetchCharacterRequest(params.characterId as string));
      dispatch(setSelectedCharacterId(params.characterId as string));
    }
  }, [params, dispatch]);
  const charactersFullInfoMap = useSelector(selectCharacterInfo,
    (store1, store2) => store1 === store2);

  const characterFullInfoDTO = charactersFullInfoMap[params?.characterId as string];

  const prepareDescriptionData = useCallback((key: keyof ICharacterFullInfo, value: string | string[] = '') => {
    console.log({ key, value });
    switch (key) {
    case 'created':
    case 'edited':
      return new Date(value as string).toLocaleDateString();
    case 'homeworld':
    case 'url':
      return <a href={value as string}>{value}</a>;
    case 'eye_color':
      return (value as string).indexOf('-') !== -1 ? (value as string).split('-').map(color => <EyeColor
        key={color}
        eyeColor={color}
      >
      </EyeColor>) : <EyeColor
        eyeColor={value as string}
      >
      </EyeColor>;
    default:
      if (Array.isArray(value)) return <div>
        {(value as string[]).map(el => <div key={el} >
          <a href={el}>{el}</a>
        </div>)}
      </div>;
      return value;
    }
  }, []);

  return <>
    <PageHeader
      title={<Link to={'/characters'}>Characters</Link>}
      subTitle={characterFullInfoDTO?.data?.name}
    />
    {characterFullInfoDTO?.data && <Descriptions>
      {Object.keys(characterFullInfoDTO.data).map(key => {
        return <Descriptions.Item key={key} label={snakeCaseToText(key)}>
          {
            prepareDescriptionData(
              key as keyof ICharacterFullInfo,
              characterFullInfoDTO.data[key as keyof ICharacterFullInfo]
            )
          }
        </Descriptions.Item>;
      })}
    </Descriptions>}
    {characterFullInfoDTO?.error && 'Error occurred'}
  </>;
};