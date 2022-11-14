import { data } from './data';
import './Sidebar.scss';
import Button from '../Button/Button';
import Dropdown from './dropdown';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      <div className='sidebar-content'>
        <ul>
          {data.map((item, i) => {
            return (
              <div
                className='dropdown'
                key={i}
              >
                {item.dropDown ? (
                  <Dropdown
                    item={item}
                    dropdown={item.dropDown}
                  />
                ) : (
                  <li>
                    <Link to={item.path}>{item.title}</Link>
                  </li>
                )}
              </div>
            );
          })}
        </ul>
        <div className='action'>
          <Button
            title='Get in Touch'
            varient='tertiary'
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
