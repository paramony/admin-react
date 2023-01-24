const Avatar = ({ name, imagePath }) => {
  return (
    <li className="pt-1 pb-2 d-flex flex-column avatar_li position-relative">
      <span className="avatar_box">
        <img alt="" className="w-100 rounded-circle" src={imagePath} />
      </span>
      <div className="sidebar_avatar_name text-center hiddenable">{name}</div>
    </li>
  );
};

export default Avatar;
