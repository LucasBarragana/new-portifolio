import React from 'react';

interface ImagePopupProps {
    imageUrl: string;
}

const ImagePopup: React.FC<ImagePopupProps> = ({ imageUrl }) => {
    const handleClick = () => {
        const popupWindow = window.open('', 'Image', 'width=200,height=200');
        if (popupWindow) {
            popupWindow.document.write(`<img src="${imageUrl}">`);
        }
    };

    return (
        <li onClick={handleClick}>{imageUrl}</li>
    );
};

const TechnologiesList: React.FC = () => {
    return (
        <div className="rounded-lg px-10 py-5">
            <h3 className="text-orange-500 font-semibold mb-2">Extra-curricular Education:</h3>
            <ul className="font-semibold">
                <li>Node.js - 38h<ImagePopup imageUrl="/public/BIG3.png" /></li>
                <li><ImagePopup imageUrl="/public/BIG3.png" /></li>
                <li><ImagePopup imageUrl="/public/BIG3.png" /></li>
                <li><ImagePopup imageUrl="/public/BIG3.png" /></li>
                <li><ImagePopup imageUrl="/public/BIG3.png" /></li>
            </ul>
        </div>
    );
};

export default TechnologiesList;
