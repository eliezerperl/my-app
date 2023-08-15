"use client";

import React, { useRef, useState } from "react";
import styles from "./page.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PasswordInput from "@/components/password/PasswordInput";

const Login = () => {
	const router = useRouter();
	const session = useSession();

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

	return (
		<div className={styles.container}>
			<form className={styles.form} onSubmit={handleSubmit}>
				<input
					type="email"
					placeholder="email"
					className={styles.input}
					required
				/>
				<PasswordInput />
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
