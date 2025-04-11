import { useState } from 'react';

export default function Options({ options = [] }) {
  const [formData, setFormData] = useState({});

  // Handle select change
  const handleSelectChange = (optionId, value) => {
    setFormData(prev => ({
      ...prev,
      [optionId]: value
    }));
  };

  // Handle text input change
  const handleTextChange = (optionId, value) => {
    setFormData(prev => ({
      ...prev,
      [optionId]: value
    }));
  };

  return (
    <div className="">
      <h2 className="text-xl font-bold mb-6 text-gray-800 text-right">خيارات المنتج</h2>
      
      <div className="space-y-5">
        {options && options.length > 0 ? (
          options.map((option) => (
            <div 
              key={option.option_id} 
              className="border-b border-gray-100 pb-5"
              dir="rtl"
            >
              <label className="block text-gray-700 font-medium mb-2 text-right">
                {option.name}
              </label>
              
              {option.type === 'select' ? (
                <div className="relative">
                  <select
                    className="w-full p-3 border border-gray-200 rounded-md bg-white focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300 text-right transition duration-150"
                    value={formData[option.option_id] || ''}
                    onChange={(e) => handleSelectChange(option.option_id, e.target.value)}
                  >
                    <option value="" disabled>اختر {option.name}</option>
                    {option.values && option.values.map((val) => (
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
                  value={formData[option.option_id] || ''}
                  onChange={(e) => handleTextChange(option.option_id, e.target.value)}
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