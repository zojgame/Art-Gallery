import { useState, useMemo } from 'react';
import styles from './styles.module.scss';
import { ArrowUI, CrossUI } from '../../ui';
import { getRangeLabel } from '../../consts';

interface InputRangeComponentProps {
  onFormSubmit: (firstValue?: number, secondValue?: number) => void;
  firstRangeValue: number | undefined;
  secondRangeValue: number | undefined;
  label: string;
}

function InputRangeComponent({
  onFormSubmit,
  label,
  firstRangeValue,
  secondRangeValue,
}: InputRangeComponentProps) {
  const [isFormActive, setIsFormActive] = useState(false);
  const [firstRange, setFirstRange] = useState<string>('');
  const [secondRange, setSecondRange] = useState<string>('');

  const handleOnFormClick = () => {
    setIsFormActive((prev) => !prev);
  };

  const handleOnFormKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.code === 'Enter') {
      setIsFormActive((prev) => !prev);
      const firstRangeValue =
        firstRange === '' ? undefined : Number(firstRange);
      const secondRangeValue =
        secondRange === '' ? undefined : Number(secondRange);
      onFormSubmit(firstRangeValue, secondRangeValue);
    }
  };

  const handleOnFormClear = (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>,
  ) => {
    event.stopPropagation();
    setFirstRange('');
    setSecondRange('');
    onFormSubmit(undefined, undefined);
    setIsFormActive(false);
  };

  const handleOnFirstRangeValueChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.target.value;

    if (!isNaN(Number(value))) {
      setFirstRange(value);
    }
  };

  const handleOnSecondRangeValueChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.target.value;

    if (!isNaN(Number(value))) {
      setSecondRange(value);
    }
  };

  const rangeLabel = useMemo(
    () => getRangeLabel(firstRangeValue, secondRangeValue),
    [firstRangeValue, secondRangeValue],
  );

  return (
    <div
      role="button"
      className={`${styles.select} ${isFormActive ? styles.select_active : ''}`}
      onKeyDown={handleOnFormKeyDown}
      tabIndex={0}
    >
      <div className={styles.select_value} onClick={handleOnFormClick}>
        <div className={styles.select_title}>
          {rangeLabel ? rangeLabel : label}
        </div>
        <div className={styles.icons}>
          {(firstRangeValue || secondRangeValue) && (
            <CrossUI handleOnClick={handleOnFormClear} />
          )}
          <ArrowUI className={styles.arrow_icon} />
        </div>
      </div>

      <div className={styles.select_container}>
        <input
          placeholder="from"
          tabIndex={0}
          onChange={handleOnFirstRangeValueChange}
          value={firstRange}
        />
        <div>—</div>
        <input
          placeholder="before"
          value={secondRange}
          tabIndex={0}
          onChange={handleOnSecondRangeValueChange}
        />
      </div>
    </div>
  );
}

export { InputRangeComponent };
