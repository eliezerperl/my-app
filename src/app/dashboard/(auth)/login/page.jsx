"use client";

import React, { useRef, useState } from "react";
import styles from "./page.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import PasswordInput from "@/components/password/PasswordInput";
import LoadingSpinner from "@/components/loadingSpinner/LoadingSpinner";
import Image from "next/image";
import Button from "@/components/Button/Button";

const Login = () => {
	const router = useRouter();
	const session = useSession();

	if (session.status === "loading") {
		return <LoadingSpinner />;
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
			<div className={styles.otherMethods}>
				<button
					className={`${styles.google} ${styles.button}`}
					onClick={() => signIn("google")}>
					<Image
						src="/google_icon.png"
						width={20}
						height={20}
						className={styles.googleIcon}
					/>
					<span className={styles.googleText}>Login with Google</span>
				</button>
				<div className={styles.registerContainer}>
					<div className={styles.question}>Not Registered?</div>
					<Button
						className={styles.button}
						url="/dashboard/register"
						text="Register"
					/>
				</div>
			</div>
		</div>
	);
};

export default Login;
