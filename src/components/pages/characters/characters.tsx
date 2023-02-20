import { useCallback, useEffect, useState, Fragment } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { List, Modal, Input } from 'antd';
import { debounce } from 'lodash';
import { fetchCharactersRequest } from '@redux/actions/characters';
import { selectCharactersInfo } from '@redux/selectors';
import { ICharacter, IEditCharacterInfo } from '@local-types';
import { PageHeader } from '@ant-design/pro-layout';
import { CharacterCard } from '@components/character-card/character-card';
import { CharacterSearch } from './characters.styles';
import { Error } from '@components/error/error';
import { SEARCH_DEBOUNCE_TIMEOUT } from '@constants';

export const Characters = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>('');
  const [editInfo, setEditInfo] = useState<IEditCharacterInfo | null>(null);
  const { data, fetching, error } = useSelector(selectCharactersInfo, shallowEqual);

  const onSearchChange = useCallback(debounce(
    (page: number, search: string) => {
      dispatch(fetchCharactersRequest({ page, search }));
    }, SEARCH_DEBOUNCE_TIMEOUT), []);

  useEffect(() => {
    onSearchChange(page, search);
  }, [page, search]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const updateCharacterInfo = useCallback((newCharacterInfo: IEditCharacterInfo) => {
    // compare two DTO's: newCharacterInfo and DTO from data field by field
    // if there are changes send update request -> if successful -> dispatch(fetchCharactersRequest({page, search))
    // to update data
  }, [data, editInfo]);

  return <>
    <PageHeader
      title="Characters"
      extra={[]}
    />
    <CharacterSearch
      value={search}
      onChange={(event) => {
        setPage(1);
        setSearch(event.target.value);
      }}
    />
    {!error ? <>
      <List
        loading={fetching}
        dataSource={data?.results}
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 3,
          xl: 4,
          xxl: 4,
        }}
        size="large"
        pagination={{
          current: page,
          showSizeChanger: false,
          onChange: setPage,
          total: data?.count
        }}
        renderItem={(character: ICharacter) => {
          const splitedUrl = character.url.split('/');
          const id = splitedUrl[splitedUrl.length - 2];
          return <CharacterCard
            key={id}
            id={id}
            setEditInfo={setEditInfo} 
            character={character}
          />;
        }}
      />
      <Modal
        title="Edit character info"
        open={!!editInfo}
        onOk={() => updateCharacterInfo(editInfo as IEditCharacterInfo)}
        onCancel={() => setEditInfo(null)}
      >
        {editInfo && Object.keys(editInfo as IEditCharacterInfo).map((editInfoKey) => {
          const value = (editInfo as IEditCharacterInfo)[editInfoKey as keyof IEditCharacterInfo];
          return editInfoKey === 'id' || Array.isArray(value) ? <Fragment key={editInfoKey}>
          </Fragment> : <Input
            key={editInfoKey}
            value={value}
            onChange={(event) => {
              setEditInfo({ ...editInfo, [editInfoKey]: event.target.value } as IEditCharacterInfo);
            }}/>;
        })}
      </Modal>
    </> : <Error
      description={JSON.stringify(error)}
      onReload={() => {
        if (!fetching) dispatch(fetchCharactersRequest({ page, search }));
      }}
    />}
  </>;
};
