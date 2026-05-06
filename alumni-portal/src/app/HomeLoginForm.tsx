"use client";

import { useRouter } from "next/navigation";

export function HomeLoginForm() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/jobs");
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full px-4 py-3 border border-gray-200 text-gray-400 rounded-lg text-sm placeholder:text-gray-300 focus:ring-2 focus:ring-blue-200 focus:outline-none"
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          minLength={1}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-400 placeholder:text-gray-300 focus:ring-2  focus:ring-blue-200 focus:outline-none"
        />
      </div>
      <div className="md:col-span-2 flex justify-center mt-4">
        <button
          type="submit"
          className="px-10 py-1 rounded-2xl bg-blue-600 text-white justify-center hover:bg-blue-700 transition-colors"
        >
          Login
        </button>
      </div>
    </form>
  );
}
