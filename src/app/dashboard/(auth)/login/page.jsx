"use client";

import React, { useRef, useState } from "react";
import styles from "./page.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
	const router = useRouter();
	const session = useSession();
	const [visible, setVisible] = useState(false);

	if (session.status === "loading") {
		return <p>Loading...</p>;
	}

	if (session.status === "authenticated") {
		return router.push("/dashboard");
	}

	const handleSubmit = async (e) => {
		e.preventDefault();

		const email = e.target[0].value;
		const password = e.target[1].value;

		signIn("credentials", { email, password });
	};

	const handleShowPass = () => {
		debugger;
		pass.current.type === "text";
		console.log(pass.current.type);
		// pass.current.type === "password";
	};

	return (
		<div className={styles.container}>
			<form className={styles.form} onSubmit={handleSubmit}>
				<input
					type="email"
					placeholder="email"
					className={styles.input}
					required
				/>
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
				<button className={styles.button}>Login</button>
			</form>
			<button className={styles.google} onClick={() => signIn("google")}>
				Login with Google
			</button>

			<div className={styles.registerContainer}>
				<div className={styles.question}>Not Registered?</div>
				<button
					className={styles.button}
					onClick={() => router.push("/dashboard/register")}>
					Register
				</button>
			</div>
		</div>
	);
};

export default Login;
