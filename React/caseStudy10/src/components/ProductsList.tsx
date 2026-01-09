import _ from 'lodash';
// import debounce from 'lodash/debounce';
import { formatDate } from '../utils/dateFormat';

export default function ProductList() {
  const fn = _.debounce(() => console.log('search'), 300);
//   const fn = debounce(() => console.log('search'), 300);
  return <div>Products loaded on {formatDate(new Date())}</div>;
}