import React, { ReactElement, useState } from "react";
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './css/Slide.module.css';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";

interface CurrentState {
    opacity: number;
    data: Portfolio[];
}
interface Portfolio {
    id: number;
    title: string;
    image: string;
    description1: string;
    description2: string;
    productUrl: string;
}

export const Slide: React.FC<CurrentState> = ({ opacity, data }) => {
    const [currentId, setCurrentId] = useState(1);
    let elements: ReactElement[] = [];
    if (data) {
        elements = data.map((el, idx) => {
            return (
                <div
                    className={currentId === el.id ? `pt-5 ${styles.slide} ${styles.active} ${styles.block}` : `pt-5 ${styles.slide} ${styles.none}`}
                    key={idx}>
                    <h2>{el.title}</h2>
                    <p><cite>{el.description1}<br/> {el.description2}</cite></p>
                    <div className={styles.imageContainer}>
                        <Image layout={"fill"} className={styles.image} alt={el.title} src={el.image}/>
                    </div>
                    <a className={`link-secondary  ${styles.linkStrong} ${styles.block}`} target={"_blank"}
                       rel="noreferrer" href={el.productUrl}>Clicca qui</a>
                </div>
            )
        })
    }

    const SetSlide = (delta: number) => {
        let current = currentId + (delta);
        if (current < data.length && current >= 1) {
            setCurrentId(current);
        } else {
            setCurrentId(1);
        }
    }

    return (
        <>
            <div className="d-flex align-items-center">
                <div>
                    <button className={`btn btn-link ${styles.arrowLeft}`} onClick={(e) => SetSlide(-1)}>
                        <FontAwesomeIcon height={50} icon={faChevronLeft} />
                    </button>
                </div>
                <div className={`${styles.slide} d-flex align-items-center justify-content-center`} style={{ opacity: 1 }}>
                    {elements}
                </div>
                <div>
                    <button className={`btn btn-link ${styles.arrowRight}`} onClick={(e) => SetSlide(1)}>
                        <FontAwesomeIcon height={50} icon={faChevronRight} />
                    </button>
                </div>
            </div>
        </>
    )
};

export default Slide;
