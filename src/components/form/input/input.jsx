import { FormControl } from 'react-bootstrap';
import styles from './input.module.css';


export default function Input({text,placeholder, type, id, value, handleOnChange,style}){

    return(
        <>
            <p>{text}</p>
            <FormControl
                style={style}
                placeholder={placeholder}
                className={styles.input}
                type={type}
                id={id}
                name={id}
                value={value}
                onChange={handleOnChange}
            />
        </>

    );
}