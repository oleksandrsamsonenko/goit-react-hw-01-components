import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ data }) => {
  return (
    <ul className={css.friend_list}>
      {data.map(element => {
        return (
          <li className={css.item} key={element.id}>
            <FriendListItem
              avatar={element.avatar}
              name={element.name}
              isOnline={element.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
