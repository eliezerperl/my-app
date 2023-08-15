import React, { useState } from "react";
import styles from "./PasswordInput.module.css";

const PasswordInput = () => {
	const [visible, setVisible] = useState(false);

	return (
		<div>
			<input
				type={visible ? "text" : "password"}
				placeholder="password"
				className={styles.input}
				required
			/>
			<span className={styles.eyeIcon} onClick={() => setVisible(!visible)}>
				{!visible && "Show"}
				{visible && "Hide"}
			</span>
		</div>
	);
};

export default PasswordInput;
