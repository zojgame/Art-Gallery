import { useState } from 'react';
import styles from './styles.module.scss';
import { Option, Options } from '../../types';
import { CrossUI, ArrowUI } from '../../ui';

interface InputRangeComponentProps {
  options: Options;
  onItemSelect: (item: number | undefined) => void;
  label: string;
}

function InputRangeComponent({
  onItemSelect,
  label,
}: InputRangeComponentProps) {
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
      <div className={`${styles.select_value}`}>
        <div className={styles.select_title}>
          {`${selectedItem ? selectedItem.value : label}`}
        </div>
        <div className={styles.icons}>
          {selectedItem && <CrossUI handleOnClick={handleOnClearClick} />}
          <ArrowUI className={styles.arrow_icon} />
        </div>
      </div>
    </div>
  );
}

export { InputRangeComponent };
