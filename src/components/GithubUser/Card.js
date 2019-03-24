import React from "react";

function Card(props) {
  const { user } = props;
  if (!user) {
    return <div>no result</div>;
  }
  return (
    <div className="card card-wrap">
      <img
        src={user.avatar_url}
        className="card-img-top mt-3"
        alt="github user img"
      />
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">company: {user.company || 'no data'}</p>
        <p className="card-text">email: {user.email}</p>
        <p className="card-text">location: {user.location}</p>
        <a href={user.html_url} className="btn btn-primary">
          Go github
        </a>
      </div>
    </div>
  );
}

export default Card;
