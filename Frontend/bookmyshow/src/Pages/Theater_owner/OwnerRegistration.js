import React, { useState } from "react";

function OwnerRegistration() {
    const [owners, setOwners] = useState([]);

    function addOwner(newOwner) {
        setOwners([...owners, newOwner]);
    }


    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const newOwner = { firstName, lastName, email };
        addOwner(newOwner);
        setFirstName("");
        setLastName("");
        setEmail("");
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Last Name:
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Register</button>
            </form>

            <h2>Registered Owners</h2>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {owners.map((owner, index) => (
                        <tr key={index}>
                            <td>{owner.firstName}</td>
                            <td>{owner.lastName}</td>
                            <td>{owner.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

}

export default OwnerRegistration;
