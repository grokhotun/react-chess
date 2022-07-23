import React from 'react';
import { Pieces } from 'models/types';

type PieceProps = {
  name?: Pieces;
  src?: string;
};

export const Piece: React.FC<PieceProps> = ({ src, name }) => {
  return <img src={src} title={name} alt={name} />;
};
