// ModelSwitchButton.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setModel } from '../slices/dressSlice'; // Adjust path as needed
import { RootState } from '../store'; // Adjust path as needed

const DressSwitchButton: React.FC = () => {
  const dispatch = useDispatch();
  const currentModel = useSelector((state: RootState) => state.model.currentModel);

  const handleClick = () => {
    const newModel = currentModel === 'dress.gltf' ? 'dress2.gltf' : 'dress.gltf';
    dispatch(setModel(newModel));
  };

  return (
    <button
      onClick={handleClick}
      className="absolute top-3/4 left-1/2 -ml-0 transform -translate-x-1/2 -translate-y-1/2 z-0 w-12 h-12 rounded-full
       bg-white bg-opacity-5 border border-white flex items-center justify-center shadow-lg hover:bg-opacity-15 focus:outline-none backdrop-blur text-white"
      style={{ top: '80%', width: '60px', height: '60px' }}
    >
      <span>Move</span>
    </button>
  );
};

export default DressSwitchButton;
