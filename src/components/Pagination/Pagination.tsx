import { useState } from 'react';
import { usePage } from '../../hooks';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';

interface PaginationComponentProps {}

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
        className={`${styles.pagination_item} ${
          isDisabled ? ` ${styles.disabled}` : ''
        }`}
        onClick={handleToStartClick}
      >
        <p>{`<`}</p>
      </div>
      <div
        className={`${styles.pagination_item} ${
          isDisabled ? ` ${styles.disabled}` : ''
        }`}
        onClick={handlePrevClick}
      >
        <p>{`<`}</p>
      </div>
      <div
        onClick={handleOnPageClick(startPage)}
        className={`${styles.pagination_item} ${
          page === 1 ? `${styles.active}` : ''
        }`}
      >
        <p>{startPage}</p>
      </div>
      <div
        onClick={handleOnPageClick(startPage + 1)}
        className={`${styles.pagination_item} ${
          page === startPage + 1 ? `${styles.active}` : ''
        }`}
      >
        <p>{startPage + 1}</p>
      </div>
      <div
        className={styles.pagination_item}
        onClick={handleOnPageClick(startPage + 2)}
      >
        <p>{startPage + 2}</p>
      </div>
      <div className={styles.pagination_item} onClick={handleNextClick}>
        <p>{`>`}</p>
      </div>
      <div className={styles.pagination_item} onClick={handleToEndClick}>
        <p>{`>`}</p>
      </div>
    </div>
  );
}

export { PaginationComponent };
