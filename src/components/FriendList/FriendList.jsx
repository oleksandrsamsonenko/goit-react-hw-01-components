import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ data }) => {
  return (
    <ul className={css.friend_list}>
      {data.map(element => {
        return (
          <FriendListItem
            key={element.id}
            avatar={element.avatar}
            name={element.name}
            isOnline={element.isOnline}
          />
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
