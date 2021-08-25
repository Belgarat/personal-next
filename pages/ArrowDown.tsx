import React from "react";
import styles from './css/ArrowDown.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons/faAngleDoubleDown";

export const ArrowDown: React.FC = () => {
    return (
        <>
            <div className={styles.arrowDown}>
                <FontAwesomeIcon width={30} size={"3x"} color="#168aad" icon={faAngleDoubleDown}></FontAwesomeIcon>
            </div>
        </>
    )
};

export default ArrowDown;
