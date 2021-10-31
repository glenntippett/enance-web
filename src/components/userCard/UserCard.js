import { useEffect, useState } from "react";
import "./userCard.css";

const UserCard = () => {
  const [users, setUsers] = useState([]);
  const numOfUsers = 10;

  useEffect(() => {
    const fetchData = () => {
      const userApiUrl = `https://random-data-api.com/api/users/random_user?size=${numOfUsers}`;
      fetch(userApiUrl)
        .then((response) => response.json())
        .then((data) => {
          const userInfo = data.map((person) => {
            const singlePersonInfo = {
              id: person.id,
              firstName: person.first_name,
              lastName: person.last_name,
              job: person.employment.title,
              skill: person.employment.key_skill,
              avatar: person.avatar,
              country: person.address.country,
              state: person.address.state,
            };
            return singlePersonInfo;
          });
          setUsers(...users, userInfo);
        });
    };

    fetchData();
  }, []);

  return (
    <section className="container-new-users">
      {console.log("users", users)}
      {users.map((user) => (
        <article key={user.id} className="card-new-user">
          <h6 className="user-name">
            {user.firstName} {user.lastName}
          </h6>
          <img src={user.avatar} alt="User"/>
          <p className="user-job">{user.job}</p>
          <span class="skill">{user.skill}</span>
        </article>
      ))}
    </section>
  );
};

export default UserCard;
