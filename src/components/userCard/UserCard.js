import { useEffect, useState } from "react";
import { getLatestUsers } from "./../../services/users";
import "./userCard.css";

const UserCard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let mounted = true;
    getLatestUsers().then((data) => {
      if (mounted) {
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
      }
    });
    return () => (mounted = false);
  }, []);

  if (!users) return "";

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
