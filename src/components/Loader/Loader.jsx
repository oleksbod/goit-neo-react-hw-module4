import { Oval } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return <Oval wrapperClass={css.loader} color="#00BFFF" height={60} width={60} />;
};

export default Loader;
