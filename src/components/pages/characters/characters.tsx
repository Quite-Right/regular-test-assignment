import { useCallback, useEffect, useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, Modal, Input } from 'antd';
import { fetchCharactersRequest } from '@redux/actions/characters';
import { selectCharactersInfo } from '@redux/selectors/characters';
import { IEditCharacterInfo } from '@local-types';
import { PageHeader } from '@ant-design/pro-layout';
import { CharacterCard } from '@components/character-card/character-card';

export const Characters = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>('');
  const [editInfo, setEditInfo] = useState<IEditCharacterInfo | null>(null);
  const { data, fetching, error } = useSelector(selectCharactersInfo,
    (store1, store2) => store1 === store2
  );

  useEffect(() => {
    dispatch(fetchCharactersRequest({ page, search }));
  }, [page, dispatch, search]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const updateCharacterInfo = useCallback((newCharacterInfo: IEditCharacterInfo) => {
    // compare two DTO's: newCharacterInfo and DTO from data field by field
    // if there are changes send update request -> if successful -> dispatch(fetchCharactersRequest({page, search))
    // to update data
  }, [data, page, dispatch, search]);

  return <>
    <PageHeader
      title="Characters"
      extra={[]}
    />
    <div className="search-input-container">
      <Input
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
          setPage(1);
        }}

      />
    </div>
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
        renderItem={character => {
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
        visible={!!editInfo}
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
    </> : JSON.stringify(error)}
  </>;
};
