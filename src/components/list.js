import React from "react";

const List = ({ list, deleteitem }) => {
  return (
    <div className="list_items">
      <h3 className="title">
        Profile of Top {list.length} Scientists in India
      </h3>
      {list.map((ele) => {
        const { id, name, age, info, image } = ele;
        return (
          <article className="listcontainer" key={id}>
            <img className="img_container" src={image} alt={name} />
            <div className="details">
              <h3 className="name">{name}</h3>
              <h3 className="age">{age}Years</h3>
              <h4 className="info">{info}</h4>
            </div>
            <button className="del_btn" onClick={() => deleteitem(id)}>
              DELETE
            </button>
          </article>
        );
      })}
    </div>
  );
};

export default List;
