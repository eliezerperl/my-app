"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import PasswordInput from "@/components/password/PasswordInput";
import Button from "@/components/Button/Button";

const Register = () => {
	const [err, setErr] = useState(false);

	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const name = e.target[0].value;
		const email = e.target[1].value;
		const password = e.target[2].value;

		debugger;

		try {
			const res = await fetch(
				"https://elisnextapi.netlify.app/api/auth/register",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						name,
						email,
						password,
					}),
				}
			);

			res.status === 201 &&
				router.push("/dashboard/login?success=Account has been created");
		} catch (error) {
			setErr(true);
		}
	};

	return (
		<div className={styles.container}>
			<form className={styles.form} onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="username"
					className={styles.input}
					required
				/>
				<input
					type="email"
					placeholder="email"
					className={styles.input}
					required
				/>
				<PasswordInput />
				<button className={styles.button}>Register</button>
			</form>
			{err && "Something went wrong!"}
			<div className={styles.btnContainer}>
				<Button
					url="/dashboard/login"
					text="Login from an existing account"
					className={styles.button}
				/>
			</div>
		</div>
	);
};

export default Register;
