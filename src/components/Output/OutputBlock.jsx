import React from 'react';
import styles from './../Blocks.module.scss';
import {useSelector} from "react-redux";
import { US } from 'country-flag-icons/react/3x2';

const OutputBlock = () => {
    const { outputValue, isFetching } = useSelector((state) => state.translate)

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                Engilsh <US title={'English'} className={styles.flag}/>
            </div>
            <div className={styles.output}>
                {
                    isFetching ? 'Translating...' :
                        outputValue ? outputValue : ''
                }
            </div>
        </div>
    )
};

export default OutputBlock;