import React from "react";
import Holder from "./Holder";
import styles from './css/Brand.module.css';
import mainStyles from './css/App.module.css';

interface TextInput {
    name: string;
    surname: string;
}
export const Brand: React.FC<TextInput> = ({ name, surname }) => {

    return (
        <>
            <div className={`${mainStyles.opaqueBg} ${mainStyles.animated} ${mainStyles.fadeInDown}`}>
                <div id='title'>
                    <h1 className={`${styles.fadeInText}`} style={{ color: 'white' }}>{name}<span style={{ color: '#168aad' }}>/</span>{surname}</h1>
                    <p><Holder valore={'System administrator & Web Developer'}></Holder></p>
                </div>
            </div>
        </>
    )
};

export default Brand;
