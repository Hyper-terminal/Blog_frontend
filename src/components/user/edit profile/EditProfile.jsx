import React from "react";
import "./EditProfile.scss";
import { update } from "../apiUrl";
import { isAuthenticated } from "../../auth";
import { Navigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const EditProfile = () => {
	let userId = isAuthenticated().user._id;

	const [editDetails, setEditDetails] = React.useState({
		name: "",
		email: "",
		password: "",
		error: "",
	});

	const [referer, setReferer] = React.useState(false);

	const isValid = () => {
		if (editDetails.name.length >= 1 && editDetails.name.length <= 4) {
			setEditDetails((prevValue) => {
				return {
					...prevValue,
					error: "Your name should contain more than 4 characters"
				}
			}
			)
			return false
		}
		let email_regexValidation = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
		if (editDetails.email.length >=1 && !email_regexValidation.test(editDetails.email)) {
			setEditDetails((prevValue) => {
				return {
					...prevValue,
					error: "Please enter valid email!"
				}
			}
			)
			return false;
		}

		if (editDetails.password >= 1 && editDetails.password <= 5) {
			editDetails((prevValue) => {
				return {
					...prevValue,
					error: "Password must contain at least characters"
				}
			})
			return false
		} else if (/\d/.test(editDetails.password)) {
			editDetails((prevValue) => {
				return {
					...prevValue,
					error: "Password should contain a number"
				}
			})
			return false
		}
	}

	const handleInput = (e) => {
		const { id, value } = e.target;
		setEditDetails((prevValue) => {
			return {
				...prevValue,
				[id]: value,
				error: ''
			};
		});
	};

	const handleclick = (e) => {
		e.preventDefault();

		if (isValid()) {
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
		}


	};

	if (referer) {
		return <Navigate to={`/user/${userId}`} replace />;
	}

	return (
		<div>
			<h1 className="edit_profile-title">Edit Profile</h1>

			<form className="form-container pa4 black-80">
				<div className="measure mb2" style={{ marginTop: '2rem' }}>
					<Stack sx={{ width: "100%" }} spacing={2}>
						<Alert
							sx={{ display: editDetails.error ? "" : "none" }}
							severity="error"
						>
							{editDetails.error}
						</Alert>
					</Stack>
				</div>
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
