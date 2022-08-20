export const read = async (userId, token) => {
    return await fetch(`/user/${userId}`, {
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

export const list = async () => {
    return await fetch("/user", {
        method: "GET",
    }).then((res) => res.json());
};

export const remove = async (userId, token) => {
    return await fetch(`/user/${userId}`, {
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

export const update = async (userId, token, user) => {
    return await fetch(`/user/${userId}`, {
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
