import { useEffect, useState } from "react";
import "./userCard.css";

const UserCard = () => {
  const [users, setUsers] = useState([]);
  const latestUsersUrl = "http://localhost:3000/new_users";

  useEffect(() => {
    const fetchData = () => {
      const userApiUrl = latestUsersUrl;
      fetch(userApiUrl)
        .then((response) => response.json())
        .then((data) => {
          const userInfo = data.map((person) => {
            return {
              id: person.id,
              firstName: person.first_name,
              lastName: person.last_name,
              country: person.country,
              state: person.state,
              avatar: person.avatar,
            };
          });
          setUsers(...users, userInfo);
        });
    };

    fetchData();
  }, []);

  if (!users) return "Loading...";

  return (
    <section className="container-new-users">
      {users.map((user) => (
        <article key={user.id} className="card-new-user">
          <h6 className="user-name">
            {user.firstName} {user.lastName}
          </h6>
          <img src={user.avatar} alt="User" />
          <p className="user-job">Front-end Developer</p>
          <span className="skill">JavaScript</span>
        </article>
      ))}
    </section>
  );
};

export default UserCard;
