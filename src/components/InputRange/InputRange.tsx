import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const handleOnFormClick = () => {
    setIsFormActive((prev) => !prev);
  };

  const handleOnFormKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.code === 'Enter') {
      navigate('../1');
      setIsFormActive((prev) => !prev);
      const firstValue = firstRange === '' ? undefined : Number(firstRange);
      const secondValue = secondRange === '' ? undefined : Number(secondRange);
      onFormSubmit(firstValue, secondValue);
    }
  };

  const handleOnFormFieldKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
  ) => {
    if (event.code === 'Tab') {
      setIsFormActive(false);
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
    const { value } = event.target;

    if (!Number.isNaN(Number(value))) {
      setFirstRange(value);
    }
  };

  const handleOnSecondRangeValueChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = event.target;

    if (!Number.isNaN(Number(value))) {
      setSecondRange(value);
    }
  };

  const rangeLabel = getRangeLabel(firstRangeValue, secondRangeValue);

  const handleOnInputClick = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>,
  ) => {
    event.stopPropagation();
  };

  return (
    <div
      role="button"
      className={`${styles.select} ${isFormActive ? styles.select_active : ''}`}
      onKeyDown={handleOnFormKeyDown}
      onClick={handleOnFormClick}
      tabIndex={0}
    >
      <div role="button" className={styles.select_value}>
        <div className={styles.select_title}>{rangeLabel || label}</div>
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
          onClick={handleOnInputClick}
          value={firstRange}
        />
        <div>—</div>
        <input
          placeholder="before"
          value={secondRange}
          tabIndex={0}
          onClick={handleOnInputClick}
          onKeyDown={handleOnFormFieldKeyDown}
          onChange={handleOnSecondRangeValueChange}
        />
      </div>
    </div>
  );
}

export { InputRangeComponent };
