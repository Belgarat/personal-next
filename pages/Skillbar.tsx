import {useEffect, useState} from "react";

interface TextInput {
    perc: number;
    label: string;
    color: string;
}
export const Skillbar: React.FC<TextInput> = ({perc, label, color}) => {
    let difPerc = 100 - perc;

    const [valore, setValore] = useState(0);

    useEffect(() => {
        let current = 0;
        const interval = setInterval(function () {
            if (current < perc) {
                setValore(prev => {
                    return prev + 1
                });
            } else {
                clearInterval(interval);
            }
            current++
        }, 10);
        return () => clearInterval(interval);
    }, [perc]);

    return (
        <>
            <div className='d-flex p-2'>
                <div className='rounded-start fw-bold text-white small d-flex' style={{backgroundColor: color, width: valore + '%', height: '30px'}}>
                    <span className='pt-1 px-4 m-0 bg-opacity-50 bg-black' style={{borderEndEndRadius: '32px', borderStartEndRadius: '32px'}}>{label}</span>
                </div>
                <div className='d-flex justify-content-end small text-black-50' style={{backgroundColor: '#eee', width: difPerc + '%', height: '30px'}}><span className='pt-1 px-2'>{perc}%</span></div>
            </div>
        </>
    )
};

export default Skillbar;
