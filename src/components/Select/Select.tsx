import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import { Option, Options } from '../../types';
import { CrossUI, ArrowUI } from '../../ui';

interface SelectComponentProps {
  options: Options;
  onItemSelect: (item: number | undefined) => void;
  label: string;
}

const SelectComponent = React.memo(
  ({ options, label, onItemSelect }: SelectComponentProps) => {
    const [isFormActive, setIsFormActive] = useState(false);
    const [selectedItem, setSelectedItem] = useState<undefined | Option>(
      undefined,
    );
    const navigate = useNavigate();
    const handleOnSelectClick = () => {
      setIsFormActive((prev) => !prev);
    };

    const handleOnKeyDownSelect = (
      event: React.KeyboardEvent<HTMLDivElement>,
    ) => {
      if (event.code === 'Enter') {
        setIsFormActive((prev) => !prev);
      }
    };

    const handleOnKeyDownSelectField = (
      event: React.KeyboardEvent<HTMLDivElement>,
    ) => {
      if (event.code === 'Tab') {
        setIsFormActive(false);
      }
    };

    const handleOnOptionClick = (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    ) => {
      const optionId = (event.target as HTMLButtonElement).dataset.value;
      const option = options.find((opt) => opt.id === Number(optionId));
      if (option) {
        navigate('../');
        setSelectedItem(option);
        onItemSelect(option.id);
      }
    };

    const handleOnClearClick = (
      event: React.MouseEvent<SVGSVGElement, MouseEvent>,
    ) => {
      event.stopPropagation();
      navigate('../');
      setSelectedItem(undefined);
      setIsFormActive(false);
      onItemSelect(undefined);
    };

    return (
      <div
        role="button"
        className={`${styles.select} ${
          isFormActive ? styles.select_active : ''
        }`}
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

        <div
          role="button"
          className={styles.select_container}
          onClick={handleOnOptionClick}
          onKeyDown={handleOnKeyDownSelectField}
          tabIndex={0}
        >
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
  },
);

export { SelectComponent };
