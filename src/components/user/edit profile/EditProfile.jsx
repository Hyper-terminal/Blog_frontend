import React from "react";
import "./EditProfile.scss";
import { read } from "../apiUrl";
import { isAuthenticated } from "../../auth";
import { useParams } from "react-router-dom";

const EditProfile = () => {
	let {userId} = useParams();

	const [editDetails, setEditDetails] = React.useState({
		id: "",
		name: "",
		email: "",
		password: "",
		redirectToSignin: false
	});

	React.useEffect(() => {
		let token = isAuthenticated().token;
		read(userId, token)
			.then((data) => {
				if (data.error) {
					setEditDetails({ redirectToSignin: true });
				} else {
					setEditDetails({
						id: data._id,
						name: data.name,
						email: data.email,
						password: data.password,
					});
				}
			})
	}, []);

	const handleInput = (e) => {
		const { id, value } = e.target;
		setEditDetails((prevValue) => {
			return {
				...prevValue,
				[id]: value,
			};
		});
	};

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
					<button className="edit_profile-button">Submit</button>
				</div>
			</form>
		</div>
	);
};

export default EditProfile;
