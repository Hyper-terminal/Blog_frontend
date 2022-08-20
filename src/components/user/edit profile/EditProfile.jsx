import React from "react";
import "./EditProfile.scss";
import { update } from "../apiUrl";
import { isAuthenticated } from "../../auth";
import { Navigate } from "react-router-dom";

const EditProfile = () => {
	let userId = isAuthenticated().user._id;

	const [editDetails, setEditDetails] = React.useState({
		name: "",
		email: "",
		password: "",
		error: "",
	});

	const [referer, setReferer] = React.useState(false);

	const handleInput = (e) => {
		const { id, value } = e.target;
		setEditDetails((prevValue) => {
			return {
				...prevValue,
				[id]: value,
			};
		});
	};

	const handleclick = (e) => {
		e.preventDefault();
		const { name, email, password } = editDetails;
		let user = {
			name: name || undefined,
			email: email || undefined,
			password: password || undefined,
		};
		update(userId, isAuthenticated().token, user)
			.then((data) => {
				if (data.error) {
					setEditDetails({ error: data.error });
				} else {
					setReferer(true);
				}
			})
			.catch((err) => console.log(err));
	};

	if (referer) {
		return <Navigate to={`/user/${userId}`} replace />;
	}

	return (
		<div>
			<h1 className="edit_profile-title">Edit Profile</h1>

			<form className="form-container pa4 black-80">
				<div className="measure mb2">
					<label htmlFor="name" className="f6 b db mb2">
						Name
					</label>
					<input
						onChange={handleInput}
						id="name"
						className="input-reset ba b--black-20 pa2 mb2 db w-100"
						type="text"
						value={editDetails.name}
						aria-describedby="name-desc"
					/>
				</div>

				<div className="measure">
					<label htmlFor="email" className="f6 b db mb2">
						Email
					</label>
					<input
						id="email"
						onChange={handleInput}
						className="input-reset ba b--black-20 pa2 mb2 db w-100"
						type="email"
						value={editDetails.email}
						aria-describedby="name-desc"
					/>
				</div>

				<div className="measure">
					<label htmlFor="password" className="f6 b db mb2">
						Password
					</label>
					<input
						onChange={handleInput}
						id="password"
						value={editDetails.password}
						className="input-reset ba b--black-20 pa2 mb2 db w-100"
						type="password"
						aria-describedby="name-desc"
					/>
				</div>

				<div style={{ display: "flex", justifyContent: "center" }}>
					<button
						onClick={handleclick}
						className="edit_profile-button"
					>
						UPDATE
					</button>
				</div>
			</form>
		</div>
	);
};

export default EditProfile;
