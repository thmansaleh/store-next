import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  initializeSelections, 
  updateSelection,
  selectSelections
} from '@/app/store/features/options';

export default function Options({ options = [] }) {
  const dispatch = useDispatch();
  const selectionsArray = useSelector(selectSelections);
  
  // Initialize selections only when options change
  useEffect(() => {
    if (options && options.length > 0) {
      dispatch(initializeSelections(options));
    }
  }, [options, dispatch]);

  // Handle both select and text changes
  const handleOptionChange = (optionId, value) => {
    
    dispatch(updateSelection({ optionId, value }));
  };

  // Get current value - now using the existing selectionsArray
  const getCurrentValue = (optionId) => {
    const option = selectionsArray.find(item => item.optionId === optionId);
    return option ? option.value : '';
  };

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-6 text-gray-800 text-right">خيارات المنتج</h2>
      
      <div className="space-y-5">
        {options?.length > 0 ? (
          options.map((option) => (
            <div key={option.option_id} className="border-b border-gray-100 pb-5" dir="rtl">
              <label className="block text-gray-700 font-medium mb-2 text-right">
                {option.name}
              </label>
              
              {option.type === 'select' ? (
                <div className="relative">
                  <select
                    className="w-full p-3 border border-gray-200 rounded-md bg-white focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300 text-right transition duration-150"
                    value={getCurrentValue(option.option_id)}
                    onChange={(e) => handleOptionChange(option.option_id, e.target.value)}
                  >
                    <option value="" disabled>اختر {option.name}</option>
                    {option.values?.map((val) => (
                      <option key={`${option.option_id}-${val.value}`} value={val.value}>
                        {val.value}
                      </option>
                    ))}
                  </select>
                </div>
              ) : option.type === 'text' ? (
                <textarea
                  className="w-full p-3 border border-gray-200 rounded-md bg-white focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300 text-right transition duration-150"
                  placeholder={`أدخل ${option.name}`}
                  value={getCurrentValue(option.option_id)}
                  onChange={(e) => handleOptionChange(option.option_id, e.target.value)}
                  rows="3"
                />
              ) : null}
            </div>
          ))
        ) : (
          <div className="text-center py-4 text-gray-400">لا توجد خيارات متاحة</div>
        )}
      </div>
    </div>
  );
}