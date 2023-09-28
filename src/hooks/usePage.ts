import { useParams } from 'react-router-dom';

const usePage = () => {
  const param = Number(useParams().page);
  const page = Number.isNaN(param) ? 1 : param;

  return page;
};

export { usePage };
