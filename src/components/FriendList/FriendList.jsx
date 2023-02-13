import PropTypes from 'prop-types';

export const FriendList = ({ data }) => {
  return (
    <ul className="friend-list">
      {data.map(item => {
        const { avatar, name, isOnline, id } = item;
        return (
          <li className="item" key={id}>
            {/* <span className="status">{isOnline ? 'Online' : 'Offline'}</span> */}
            {isOnline ? (
              <span className="status" style={{ color: 'green' }}>
                Online
              </span>
            ) : (
              <span className="status" style={{ color: 'red' }}>
                Offline
              </span>
            )}

            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
