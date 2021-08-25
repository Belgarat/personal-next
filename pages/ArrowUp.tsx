import React from "react";
import styles from './css/ArrowUp.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons/faChevronCircleUp";

export const ArrowUp: React.FC = () => {

    return (
        <>
            <div className={styles.arrowUp}>
                <FontAwesomeIcon width={50} size={"3x"} color="#168aad" icon={faChevronCircleUp}></FontAwesomeIcon>
            </div>
        </>
    )
};

export default ArrowUp;
