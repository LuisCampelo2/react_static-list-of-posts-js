export const UserInfo = ({ User }) => (
  <a className="UserInfo" href={`mailto:${User.email}`}>
    {User.name}
  </a>
);
