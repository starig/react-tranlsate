import React, {useCallback, useState} from 'react';
import styles from './../Blocks.module.scss';
import {translateRequest} from "../../redux/slices/tranlateSlice";
import {useDispatch} from "react-redux";
import debounce from 'lodash.debounce';
import {RU} from 'country-flag-icons/react/3x2'


const InputBlock = () => {
    const [value, setValue] = useState();
    const dispatch = useDispatch();


    const onTextChange = useCallback(
        debounce((str) => {
            dispatch(translateRequest(str));
        }, 350),
        [],
    )

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                Russian <RU title={'English'} className={styles.flag}/>
            </div>
            <textarea className={styles.input} value={value} onChange={(e) => {
                onTextChange(e.target.value);
                setValue(e.target.value)
            }} />
        </div>
    )
};

export default InputBlock;