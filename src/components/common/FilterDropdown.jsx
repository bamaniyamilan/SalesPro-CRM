import { ChevronDown, Filter } from 'lucide-react';
import { useState } from 'react';

const FilterDropdown = ({ options, selected, onSelect, label = "Filter" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
      >
        <Filter size={16} />
        <span>{label}</span>
        {selected && (
          <span className="px-2 py-1 text-xs bg-primary-100 text-primary-700 rounded">
            {selected}
          </span>
        )}
        <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute top-full mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  onSelect(option.value);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 hover:bg-gray-50 ${
                  selected === option.value ? 'bg-primary-50 text-primary-700' : ''
                }`}
              >
                {option.label}
              </button>
            ))}
            {selected && (
              <button
                onClick={() => {
                  onSelect('');
                  setIsOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
              >
                Clear Filter
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;