import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  initializeSelections, 
  updateSelection,
  selectSelections
} from '@/app/store/features/options';

// Separate component for individual options
const OptionField = ({ option, value, onChange }) => {
  if (option.type === 'select') {
    return (
      <div className="relative">
        <select
          className="w-full p-3 border border-gray-200 rounded-md bg-white focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300 text-right transition duration-150"
          value={value}
          onChange={(e) => onChange(option.option_id, e.target.value)}
        >
          <option value="" disabled>اختر {option.name}</option>
          {option.values?.map((val) => (
            <option key={`${option.option_id}-${val.value}`} value={val.value}>
              {val.value}
            </option>
          ))}
        </select>
      </div>
    );
  }
  
  if (option.type === 'text') {
    return (
      <textarea
        className="w-full p-3 border border-gray-200 rounded-md bg-white focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300 text-right transition duration-150"
        placeholder={`أدخل ${option.name}`}
        value={value}
        onChange={(e) => onChange(option.option_id, e.target.value)}
        rows="3"
      />
    );
  }
  
  return null;
};

export default function Options({ options = [] }) {
  const dispatch = useDispatch();
  const selections = useSelector(selectSelections);

  useEffect(() => {
    if (options.length > 0) {
      dispatch(initializeSelections(options));
    }
  }, [options, dispatch]);

  const handleOptionChange = (optionId, value) => {
    dispatch(updateSelection({ optionId, value }));
  };

  const getOptionValue = (optionId) => {
    const option = selections.find(item => item.optionId === optionId);
    return option?.value || '';
  };

  if (!options?.length) {
    return (
      <div className="max-w-lg mx-auto">
        <h2 className="text-xl font-bold mb-6 text-gray-800 text-right">خيارات المنتج</h2>
        <div className="text-center py-4 text-gray-400">لا توجد خيارات متاحة</div>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-6 text-gray-800 text-right">خيارات المنتج</h2>

      <div className="space-y-5">
        {options.map((option) => (
          <div key={option.option_id} className="border-b border-gray-100 pb-5" dir="rtl">
            <label className="block text-gray-700 font-medium mb-2 text-right">
              {option.name}
            </label>
            
            <OptionField
              option={option}
              value={getOptionValue(option.option_id)}
              onChange={handleOptionChange}
            />
          </div>
        ))}
      </div>
    </div>
  );
}