import React from "react";
import Person from "./Person";

const FavoriteFriends = (props) => {

    let persons = props.favoriteFriends.person;

    let person = persons.map(a => {
        if (a.id > 1 && a.id <= 4 ) {
            return <Person avatar={a.avatar} name={a.name} id={a.id}/>;
        }
    });
    return <div>{person}</div>

}
export default FavoriteFriends;