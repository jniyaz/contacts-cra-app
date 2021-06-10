import { Image } from 'semantic-ui-react';
import './style.css';
const ImageThumb = ({ firstName, lastName, src, classname, style }) => {
    const getInitials = () => {
        return `${firstName[0]}${lastName[0]}`;
    }
    return (
        <>
            {src && <Image circular width={45} height={45} src={src} style={style} className={`thumbnail ${classname}`} />}
            {!src && <div style={style} className={`thumbnail ${classname}`}>
                <span>{getInitials()}</span>
            </div>}
        </>
    )
}

export default ImageThumb
