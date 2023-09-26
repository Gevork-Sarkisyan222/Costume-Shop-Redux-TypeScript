import React from 'react';

interface CardInfoProps {
  title: string;
  price: string;
  image: string;
  id: number;
}

const CardInfo: React.FC<CardInfoProps> = ({ title, price, image, id }) => {
  return (
    <div className="CardInfo-Main">
      <div className="card-info-wrapper">
        <h1>{title}</h1>
        <div className="line"></div>
        <h2>Цена: {price}</h2>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default CardInfo;
