"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [accepted, setAccepted] = useState(false);

    const [errors, setErrors] = useState({
        email: "",
        password: "",
        confirm: "",
    });

    // Validaciones
    useEffect(() => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

        setErrors({
            email: email && !emailRegex.test(email) ? "Invalid email address" : "",
            password:
                password && !passRegex.test(password)
                    ? "Minimum 8 characters, 1 uppercase letter, and 1 number"
                    : "",
            confirm:
                confirm && confirm !== password
                    ? "Passwords do not match"
                    : "",
        });
    }, [email, password, confirm]);

    const isFormValid =
        name.trim() &&
        email.trim() &&
        password.trim() &&
        confirm.trim() &&
        !errors.email &&
        !errors.password &&
        !errors.confirm &&
        accepted;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormValid) return;
        alert("Registro exitoso 🎉");
    };

    return (
        <main className="relative flex items-center justify-center min-h-screen">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/ch.jpg"
                    alt="Fondo difuso"
                    fill
                    className="object-cover blur-lg"
                    priority
                />
            </div>
            <div className="relative w-full max-w-xl bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="relative p-8">
                    <h1 className="text-2xl font-bold text-blue-600 text-center mb-2">Create your account</h1>
                    <p className="text-center text-gray-600 mb-6">
                        Join our community.
                    </p>

                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => {
                                const value = e.target.value;
                                const onlyLetters = value.replace(/[^a-zA-ZÀ-ÿ\u00f1\u00d1\s]/g, "");
                                setName(onlyLetters)
                            }
                            }
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-gray-400 placeholder:text-gray-300 focus:ring-2  focus:ring-blue-200 focus:outline-none"
                        />
                        <div className="md:col-span-1">
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-gray-400 placeholder:text-gray-300 focus:ring-2  focus:ring-blue-200 focus:outline-none"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                            )}
                        </div>

                        <div>
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-gray-400 placeholder:text-gray-300 focus:ring-2  focus:ring-blue-200 focus:outline-none"
                            />
                            {errors.password && (
                                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                            )}
                        </div>

                        <div>
                            <input
                                type="password"
                                placeholder="Confirm password"
                                value={confirm}
                                onChange={(e) => setConfirm(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-gray-400 placeholder:text-gray-300 focus:ring-2  focus:ring-blue-200 focus:outline-none"
                            />
                            {errors.confirm && (
                                <p className="text-red-500 text-xs mt-1">{errors.confirm}</p>
                            )}
                        </div>

                        <div className="md:col-span-2 flex flex-col items-center mt-3">
                            <label htmlFor="terms" className="flex items-center text-sm text-gray-600">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    checked={accepted}
                                    onChange={() => setAccepted(!accepted)}
                                    className="mr-2"
                                />
                                I accept the{" "}
                                <a href="https://alwaysonmt.blob.core.windows.net/terms/christelhousefeenicia-privacy.pdf" target="_blank" className="ml-1 text-blue-600 hover:underline">
                                    Terms and Conditions
                                </a>
                            </label>
                        </div>

                        <div className="md:col-span-2 flex justify-center mt-4">
                            <button
                                type="submit"
                                disabled={!isFormValid}
                                className={`px-5 py-2 rounded-md text-white font-medium transition-colors
                  ${isFormValid ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"}`}
                            >
                                Registrarme
                            </button>
                        </div>
                    </form>

                    <p className="text-center text-sm text-gray-600 mt-5">
                        Already have an account?{" "}
                        <Link href="/" className="text-blue-600 hover:underline">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    );
}

