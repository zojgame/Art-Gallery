import { useState } from 'react';
import styles from './styles.module.scss';
import { usePage } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { ArrowQuoteIcon, ArrowDoubleQuoteIcon } from '../../ui';
import { ICON_DIRECTION } from '../../consts';

function PaginationComponent() {
  const page = usePage();

  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(page === 1);
  const startPage = page === 1 ? 1 : page - 1;

  const handleNextClick = () => {
    const nextPage = page + 1;
    navigate(`../${nextPage}`);

    if (isDisabled) {
      setIsDisabled(false);
    }
  };

  const handlePrevClick = () => {
    if (!isDisabled) {
      const prevPage = page - 1;
      navigate(`../${prevPage}`);
    }
    if (page - 1 === 1) {
      setIsDisabled(true);
    }
  };

  const handleToStartClick = () => {
    if (page <= 11 && !isDisabled) {
      navigate('../1');
      setIsDisabled(true);
    } else {
      navigate(`../${page - 10}`);
    }
  };

  const handleToEndClick = () => {
    navigate(`../${page + 10}`);
    setIsDisabled(false);
  };

  const handleOnPageClick = (moveToPage: number) => {
    return () => {
      setIsDisabled(moveToPage === 1);
      navigate(`../${moveToPage}`);
    };
  };

  return (
    <div className={styles.pagination}>
      <div
        className={isDisabled ? ` ${styles.disabled}` : ''}
        onClick={handleToStartClick}
      >
        <p>
          <ArrowDoubleQuoteIcon direction={ICON_DIRECTION.LEFT} />
        </p>
      </div>
      <div
        className={isDisabled ? ` ${styles.disabled}` : ''}
        onClick={handlePrevClick}
      >
        <p>
          <ArrowQuoteIcon direction={ICON_DIRECTION.LEFT} />
        </p>
      </div>
      <div
        onClick={handleOnPageClick(startPage)}
        className={page === 1 ? `${styles.active}` : ''}
      >
        <p>{startPage}</p>
      </div>
      <div
        onClick={handleOnPageClick(startPage + 1)}
        className={page === startPage + 1 ? `${styles.active}` : ''}
      >
        <p>{startPage + 1}</p>
      </div>
      <div onClick={handleOnPageClick(startPage + 2)}>
        <p>{startPage + 2}</p>
      </div>
      <div onClick={handleNextClick}>
        <p>
          <ArrowQuoteIcon direction={ICON_DIRECTION.RIGHT} />
        </p>
      </div>
      <div onClick={handleToEndClick}>
        <p>
          <ArrowDoubleQuoteIcon direction={ICON_DIRECTION.RIGHT} />
        </p>
      </div>
    </div>
  );
}

export { PaginationComponent };
