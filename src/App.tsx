import React from 'react';
import './App.sass';

const data = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "married": true
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "married": true
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "married": true,
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "married": true
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "married": false
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "married": false
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "married": true
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "married": false
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "married": true
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "married": false
    }
]

function ListUserHeader() {
    return (
        <div className={'list-user_header'}>
            <div>ID</div>
            <div>Name</div>
            <div>User_name</div>
            <div>Email</div>
            <div>Website</div>
            <div>Address</div>
            <div>Married</div>
            <div>Phone</div>
        </div>
    )
}

function ListUserItem(props: UserPropsType) {
    const {id, name, username, married, email,website, address, phone} = props
    return (
        <li className={'list-user_item'}>
            <strong> {id}</strong>
            <p className={'list-user_paragraph'}> {name}</p>
            <p className={'list-user_paragraph'}> {username}</p>
            <p className={'list-user_paragraph'}> {email}</p>
            <p className={'list-user_paragraph'}> {website}</p>
            <p className={'list-user_paragraph'}> {address.city}/{address.street}  </p>
            <p className={'list-user_paragraph'}> {married ?'Yes':'No'}  </p>
            <p className={'list-user_paragraph'}> {phone}  </p>
        </li>
    )
}

function ListUsers(props: ListUsersPropsType) {
    const {users} = props

    return (
        <>
            <ListUserHeader/>
            <ul className={'list-user'}>
                {users.map((user: any) => {
                    return <ListUserItem
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        username={user.username}
                        email={user.email}
                        address={user.address}
                        married={user.married}
                        phone={user.phone}
                        website={user.website}
                    />
                })}
            </ul>
        </>
    )
}

function App() {
    return (
        <div className="app">
            <ListUsers users={data}/>
        </div>
    );
}

//types
type ListUsersPropsType = {
    users: UserPropsType[]
}
type UserPropsType = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: AddressPropsType,
    phone: string,
    website: string,
    married: boolean
}
type AddressPropsType = {
    street: string,
    suite: string,
    city: string,
    zipcode: string
}

export default App;
