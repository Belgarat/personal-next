import React from "react";
import styles from "./css/ScrollBar.module.css";

interface Data {
    position: number;
    h: number;
}

export const ScrollBar: React.FC<Data> = ({ position, h }) => {

    let current = Math.floor(100 - ((h - position) / h) * 100) + '%' || '0%';

    return (
        <>
            <div className={`${styles.scrollBar} d-flex`}>
                <div style={{ width: current }} className={`${styles.bar}`}><span></span></div>
            </div>
        </>
    )
};

export default ScrollBar;
