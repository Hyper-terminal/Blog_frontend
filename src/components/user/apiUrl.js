export const read =  (userId, token) => {
    return  fetch(`/user/${userId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    })
        .then((res) => res.json())
        .catch((err) => console.log(err));
};

export const list =  () => {
    return  fetch("/user", {
        method: "GET",
    }).then((res) => res.json());
};

export const remove =  (userId, token) => {
    return  fetch(`/user/${userId}`, {
        method: "Delete",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    })
        .then((res) => res.json())
        .catch((err) => console.log(err));
};

export const update =  (userId, token, user) => {
    return  fetch(`/user/${userId}`, {
        method: "put",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(user),
    })
        .then((res) => res.json())
};
