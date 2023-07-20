const PictureMsg = ({origin, images}) => {
    return (
        <div data-origin={origin} className={`flex gap-2 animate-showMsg ${origin === 'to' ? 'self-end origin-right' : 'origin-left'}`}>
            {images.map((image, index) => (
                <img key={index} src={image} alt="dog" className="w-10 h-10 rounded-[10px] shadow-message_shadow"/>
            ))}
        </div>
    );
};

export default PictureMsg;
