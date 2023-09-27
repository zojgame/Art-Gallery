import { useState } from 'react';
import styles from './styles.module.scss';
import { CrossUI } from '../../ui';

interface InputComponentProps {
  onInputSubmit: (item: string | undefined) => void;
  label: string;
}

function InputComponent({ onInputSubmit, label }: InputComponentProps) {
  const [inputTitle, setInputTitle] = useState<string>('');

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.code === 'Enter') {
      onInputSubmit(inputTitle);
    }
  };

  const handleOnClearClick = (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>,
  ) => {
    event.stopPropagation();
    setInputTitle('');
    onInputSubmit(undefined);
  };

  const handleOnInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('first', event.target.value);
    setInputTitle(event.target.value);
  };

  return (
    <div role="button" tabIndex={0} className={styles.select}>
      <div className={styles.select_value}>
        <input
          type="text"
          value={inputTitle}
          placeholder={label}
          onKeyDown={handleOnKeyDown}
          onChange={handleOnInputChange}
        />
        <div className={styles.icons}>
          {inputTitle !== '' && <CrossUI handleOnClick={handleOnClearClick} />}
        </div>
      </div>
    </div>
  );
}

export { InputComponent };
