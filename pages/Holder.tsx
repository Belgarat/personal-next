import { useEffect, useState } from "react";
import styles from './css/App.module.css';

interface TextInput {
    valore: string;
}
export const Holder: React.FC<TextInput> = ({ valore }) => {
    const [text, setText] = useState('');

    useEffect(() => {
        const contentArray = valore.split("");
        let cur = 0;
        const interval = setInterval(function () {
            if (cur < contentArray.length) {
                setText(prevText => prevText + contentArray[cur]);
            } else {
                clearInterval(interval);
            }
            cur++;
        }, 80);
        return () => clearInterval(interval);
    }, [valore]);

    return (
        <>
            <span id="holder" /><span className={styles.blinkingCursor}>{text}</span>
        </>
    )
}

export default Holder;
