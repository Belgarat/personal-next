import React from "react";
import Image from 'next/image'
import styles from './css/Personal-card.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";

interface TextInput {
    name: string;
    surname: string;
}
export const PersonalCard: React.FC<TextInput> = ({ name, surname }) => {

    return (
        <>
            <div className="card">
                <div className="card-header">

                </div>
                <div className="card-body">
                    <div className={"card-body-img"}>
                        <Image width={150} height={150} layout={"responsive"} alt='Avatar Marco Brunet' src="http://www.stdout.it/avatar.jpg" />
                    </div>
                    <div className={"name"}>{name} {surname}</div>
                    <div className={"description"}>Sysadmin and web developer</div>
                    <div className={styles.socialIcons}>
                        <ul>
                            <li><a href="https://www.facebook.com/marco.aep/"><FontAwesomeIcon width='32px' height='32px' className={styles.icon} icon={faFacebook} /></a></li>
                            <li><a href="https://www.linkedin.com/in/marco-brunet-420a94a/"><FontAwesomeIcon width='32px' height='32px' className={styles.icon} icon={faLinkedin} /></a></li>
                            <li><a href="https://github.com/Belgarat"><FontAwesomeIcon width='32px' height='32px' className={styles.icon} icon={faGithub} /></a></li>
                        </ul>
                    </div>
                    <div className={styles.location}>Belluno (Veneto)</div>
                </div>
            </div>
        </>
    )
};

export default PersonalCard;
