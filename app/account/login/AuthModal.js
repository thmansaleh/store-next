import { useDispatch, useSelector } from 'react-redux';
import { X } from 'lucide-react';
import { closeModal } from '@/app/store/features/AuthModal';
import { useEffect } from 'react';
import { Content } from './Content';
// import { closeModal } from './modalSlice';

export default function AuthModal() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.authModal.isOpen);


  const handleClose = () => {
    dispatch(closeModal());
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 backdrop-blur-sm transition-opacity duration-300">
      {/* Modal Content */}
      <div className="bg-white pb-9 rounded-xl shadow-xl w-full max-w-md transform transition-all duration-300 ease-in-out">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          {/* <h3 className="text-xl font-semibold text-gray-900">Modal Title</h3> */}
          <button
            onClick={handleClose}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors duration-200 focus:outline-none"
          >
            <X size={20} className="text-gray-500" />
          </button>
        </div>
        
        {/* Modal Body */}
        <Content/>
       
        {/* Modal Footer */}
        {/* <div className="flex justify-end gap-3 p-5 border-t border-gray-100">
          <button 
            onClick={handleClose}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
          >
            Cancel
          </button>
          <button 
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors duration-200"
          >
            Confirm
          </button>
        </div> */}
      </div>
    </div>
  );
}

// Usage example in any component
