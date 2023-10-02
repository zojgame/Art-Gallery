import { useState, KeyboardEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import { usePage } from '../../hooks';
import { ArrowQuoteIcon, ArrowDoubleQuoteIcon } from '../../ui';
import { DIRECTION } from '../../consts';

function PaginationComponent() {
  const page = usePage();
  const [isDisabled, setIsDisabled] = useState(page === 1);
  const navigate = useNavigate();
  const startPage = page === 1 ? 1 : page - 1;

  useEffect(() => {
    setIsDisabled(page === 1);
  }, [page]);

  const handleOnNextPageKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
  ) => {
    if (event.code === 'Enter') {
      const nextPage = page + 1;
      navigate(`../${nextPage}`);

      if (isDisabled) {
        setIsDisabled(false);
      }
    }
  };

  const handleNextClick = () => {
    const nextPage = page + 1;
    navigate(`../${nextPage}`);

    if (isDisabled) {
      setIsDisabled(false);
    }
  };

  const handleOnPrevPageKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
  ) => {
    if (event.code === 'Enter') {
      if (!isDisabled) {
        const prevPage = page - 1;
        navigate(`../${prevPage}`);
      }
      if (page - 1 === 1) {
        setIsDisabled(true);
      }
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

  const handleOnStartPageKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
  ) => {
    if (event.code === 'Enter' && !isDisabled) {
      if (page <= 11) {
        navigate('../1');
        setIsDisabled(true);
      } else {
        navigate(`../${page - 10}`);
      }
    }
  };

  const handleToStartClick = () => {
    if (!isDisabled) {
      if (page <= 11) {
        navigate('../1');
        setIsDisabled(true);
      } else {
        navigate(`../${page - 10}`);
      }
    }
  };

  const handleOnEndPageKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
  ) => {
    if (event.code === 'Enter') {
      navigate(`../${page + 10}`);
      setIsDisabled(false);
    }
  };

  const handleToEndClick = () => {
    navigate(`../${page + 10}`);
    setIsDisabled(false);
  };

  const handleOnPageKeyDown =
    (nextPage: number) => (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.code === 'Enter') {
        setIsDisabled(nextPage === 1);
        navigate(`../${nextPage}`);
      }
    };

  const handleOnPageClick = (moveToPage: number) => () => {
    setIsDisabled(moveToPage === 1);
    navigate(`../${moveToPage}`);
  };

  return (
    <div className={styles.pagination}>
      <div
        role="button"
        tabIndex={0}
        className={isDisabled ? ` ${styles.disabled}` : ''}
        onClick={handleToStartClick}
        onKeyDown={handleOnStartPageKeyDown}
      >
        <p>
          <ArrowDoubleQuoteIcon
            direction={DIRECTION.LEFT}
            isDisabled={isDisabled}
          />
        </p>
      </div>
      <div
        role="button"
        onKeyDown={handleOnPrevPageKeyDown}
        tabIndex={0}
        className={isDisabled ? ` ${styles.disabled}` : ''}
        onClick={handlePrevClick}
      >
        <p>
          <ArrowQuoteIcon direction={DIRECTION.LEFT} isDisabled={isDisabled} />
        </p>
      </div>
      <div
        role="button"
        onKeyDown={handleOnPageKeyDown(startPage)}
        tabIndex={0}
        onClick={handleOnPageClick(startPage)}
        className={page === 1 ? `${styles.active}` : ''}
      >
        <p>{startPage}</p>
      </div>
      <div
        role="button"
        onKeyDown={handleOnPageKeyDown(startPage + 1)}
        tabIndex={0}
        onClick={handleOnPageClick(startPage + 1)}
        className={page === startPage + 1 ? `${styles.active}` : ''}
      >
        <p>{startPage + 1}</p>
      </div>
      <div
        role="button"
        onKeyDown={handleOnPageKeyDown(startPage + 2)}
        onClick={handleOnPageClick(startPage + 2)}
        tabIndex={0}
      >
        <p>{startPage + 2}</p>
      </div>
      <div
        role="button"
        onKeyDown={handleOnNextPageKeyDown}
        onClick={handleNextClick}
        tabIndex={0}
      >
        <p>
          <ArrowQuoteIcon direction={DIRECTION.RIGHT} />
        </p>
      </div>
      <div
        role="button"
        onKeyDown={handleOnEndPageKeyDown}
        onClick={handleToEndClick}
        tabIndex={0}
      >
        <p>
          <ArrowDoubleQuoteIcon direction={DIRECTION.RIGHT} />
        </p>
      </div>
    </div>
  );
}

export { PaginationComponent };
