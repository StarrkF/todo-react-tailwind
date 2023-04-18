import { useState } from 'react';
import '../assets/components/checkboxes.css';

function ToggleSwitch({ label = '', modelValue = false, color = 'primary', onUpdate }) {
  const [checked, setChecked] = useState(modelValue);

  const onInputChange = (event) => {
    const newValue = event.target.checked;
    setChecked(newValue);
    onUpdate && onUpdate(newValue);
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        value={checked}
        checked={checked}
        onChange={onInputChange}
      />
      <div className={`toggle-switch toggle-${color}`}></div>
      {label && (
        <span className="ml-3 text-sm font-medium text-dark dark:text-light">
          {label}
        </span>
      )}
    </label>
  );
}

export default ToggleSwitch;
