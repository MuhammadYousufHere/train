import { data } from './data';
import './Sidebar.scss';
import Button from '../Button/Button';
import Dropdown from './dropdown';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = ({ toggle, close }) => {
  const navigate = useNavigate();
  return (
    <div
      className='sidebar-container'
      style={{ transform: `translateY(${toggle ? 0 : -100}%)` }}
    >
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
                    close={close}
                  />
                ) : (
                  <li>
                    <Link
                      to={item.path}
                      onClick={close}
                    >
                      {item.title}
                    </Link>
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
            onClick={() => {
              navigate('/contact');
              close();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
