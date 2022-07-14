import {useParams, Link} from "react-router-dom";
import {PageHeader, Descriptions} from "antd";
import {useCallback, useEffect} from "react";
import {fetchCharacterRequest, setSelectedCharacterId} from "../../redux/actions/character";
import {useDispatch, useSelector} from "react-redux";
import {selectCharacterInfo} from "../../redux/selectors/character";
import {snakeCaseToText} from "../../utils/snakeCaseToText";
import {ICharacterFullInfo} from "../../types/character";

export const Character = () => {
    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (params?.characterId && dispatch) {
            dispatch(fetchCharacterRequest(params.characterId as string));
            dispatch(setSelectedCharacterId(params.characterId as string))
        }
    }, [params, dispatch]);
    const charactersFullInfoMap = useSelector(selectCharacterInfo,
        (store1, store2) => store1 === store2);

    const characterFullInfoDTO = charactersFullInfoMap[params?.characterId as string];

    const prepareDescriptionData = useCallback((key: keyof ICharacterFullInfo, value: string | string[] = "") => {
        switch (key) {
            case "created":
            case "edited":
                return new Date(value as string).toLocaleDateString();
            case "homeworld":
            case "url":
                return <a href={value as string}>{value}</a>
            case "eye_color":
                return (value as string).indexOf('-') !== -1 ? (value as string).split('-').map(color => <div
                        key={value + color}
                        style={{backgroundColor: color as string}}
                        className="eye-color">
                    </div>) : <div
                    style={{backgroundColor: value as string}}
                    className="eye-color">
                </div>
            default:
                if (Array.isArray(value)) return <div>
                    {(value as string[]).map(el => <div key={el} >
                        <a href={el}>{el}</a>
                    </div>)}
                </div>
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
                </Descriptions.Item>
            })}
        </Descriptions>}
        {characterFullInfoDTO?.error && "Error occurred"}
    </>
}