import React, { ReactElement } from "react";
import styles from './css/Navbar.module.css';
import mainStyles from './css/App.module.css';
import Image from 'next/image'

interface Icons {
    label: string;
    url: string;
}
interface TextInput {
    icons: Icons[];
}
export const Navbar: React.FC<TextInput> = ({ icons }) => {

    let elements: ReactElement[] = [];
    if (icons) {
        elements = icons.map((el, idx) => {
            return <Image width={50} height={50} className={styles.fadeInIcon} key={idx} alt={el.label} src={el.url}/>
        })
    }

    return (
        <>
            <div className={mainStyles.navBrand}>
                {elements}
            </div>
        </>
    )
};

export default Navbar;
