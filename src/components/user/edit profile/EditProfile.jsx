import React from "react";
import "./EditProfile.scss";

const EditProfile = () => {
	return (
		<div>

		<h1 className="edit_profile-title">Edit Profile</h1>

			<form className="form-container pa4 black-80">
				<div className="measure mb2">
					<label htmlFor="name" className="f6 b db mb2">
						Name
					</label>
					<input
						id="name"
						className="input-reset ba b--black-20 pa2 mb2 db w-100"
						type="text"
						aria-describedby="name-desc"
					/>
				</div>

				<div className="measure">
					<label htmlFor="name" className="f6 b db mb2">
						Email
					</label>
					<input
						id="name"
						className="input-reset ba b--black-20 pa2 mb2 db w-100"
						type="email"
						aria-describedby="name-desc"
					/>
				</div>

				<div className="measure">
					<label htmlFor="name" className="f6 b db mb2">
						Password
					</label>
					<input

						id="name"
						className="input-reset ba b--black-20 pa2 mb2 db w-100"
						type="password"
						aria-describedby="name-desc"
					/>
				</div>

				<div style={{display:'flex', justifyContent:'center'}}>
					<button className="edit_profile-button">Submit</button>
				</div>
			</form>
		</div>
	);
};

export default EditProfile;
