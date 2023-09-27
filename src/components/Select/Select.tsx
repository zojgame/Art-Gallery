import { useState } from 'react';
import styles from './styles.module.scss';
import { Option, Options } from '../../types';
import { CrossUI, ArrowUI } from '../../ui';
import React from 'react';

interface SelectComponentProps {
  options: Options;
  onItemSelect: (item: number | undefined) => void;
  label: string;
}

const SelectComponent = React.memo(function SelectComponent({
  options,
  label,
  onItemSelect,
}: SelectComponentProps) {
  const [isActive, setIsActive] = useState(false);
  const [selectedItem, setSelectedItem] = useState<undefined | Option>(
    undefined,
  );
  const handleOnSelectClick = () => {
    setIsActive((prev) => !prev);
  };

  const handleOnKeyDownSelect = (
    event: React.KeyboardEvent<HTMLDivElement>,
  ) => {
    if (event.code === 'Tab') {
      setIsActive(false);
    }
    if (event.code === 'Enter') {
      setIsActive((prev) => !prev);
    }
  };

  const handleOnOptionClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    const optionId = (event.target as HTMLButtonElement).dataset.value;
    const option = options.find((opt) => opt.id === Number(optionId));
    if (option) {
      setSelectedItem(option);
      onItemSelect(option.id);
    }
  };

  const handleOnClearClick = (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>,
  ) => {
    event.stopPropagation();
    setSelectedItem(undefined);
    setIsActive(false);
    onItemSelect(undefined);
  };

  return (
    <div
      role="button"
      className={`${styles.select} ${isActive ? styles.select_active : ''}`}
      onClick={handleOnSelectClick}
      onKeyDown={handleOnKeyDownSelect}
      tabIndex={0}
    >
      <div className={styles.select_value}>
        <div className={styles.select_title}>
          {`${selectedItem ? selectedItem.value : label}`}
        </div>
        <div className={styles.icons}>
          {selectedItem && <CrossUI handleOnClick={handleOnClearClick} />}
          <ArrowUI className={styles.arrow_icon} />
        </div>
      </div>

      <div className={styles.select_container} onClick={handleOnOptionClick}>
        <ul className={styles.select_option_container}>
          {options.map((opt) => (
            <li key={opt.id} data-value={opt.id}>
              {opt.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

export { SelectComponent };
