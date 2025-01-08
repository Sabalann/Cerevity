import './buttons.css'

export default function BorderButton({text}) {
    return (
        <>
            <div className='button-background'><button className='button'>{text}</button></div>
        </>
    );
}