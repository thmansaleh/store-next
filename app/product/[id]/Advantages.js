

const Advantages = ({ advantages }) => {
  // Don't render anything if no advantages
  if (!advantages || advantages.length === 0) {
    return null;
  }

  return (
    <div className="">
      <h2 className="text-md font-bold mb-4">المميزات</h2>
      <div className="space-y-2 text-sm">
        {advantages.map((item, index) => (
          <div key={index} className="flex flex-col">
            <span className="text-gray-900 font-medium whitespace-nowrap">
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