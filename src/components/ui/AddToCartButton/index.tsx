import { Icons } from '@/components/icons';
import React from 'react';

interface AddToCartButtonProps {
  onClick: () => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ onClick }) => {
  return (
    <div 
      className='flex items-center relative cursor-pointer h-10 rounded-md text-center bg-white text-black p-2.5'
      onClick={onClick}
    >
      +<Icons.cart className='h-4 w-4' aria-hidden='true' />
    </div>
  );
};

export default AddToCartButton;
