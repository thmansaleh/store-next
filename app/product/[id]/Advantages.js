

const Advantages = ({ advantages }) => {
  // Don't render anything if no advantages
  if (!advantages || advantages.length === 0) {
    return null;
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded p-3 shadow-sm">
      <h3 className="text-gray-800 font-bold mb-2 text-sm">مميزات المنتج</h3>
      <div className="space-y-2 text-sm">
        {advantages.map((item, index) => (
          <div key={index} className="flex flex-col">
            <span className="text-blue-600 font-medium whitespace-nowrap">
              {item.name}:
            </span>
            <span className="text-gray-700 text-xs mt-1">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advantages;