import { LoginForm } from "@/components/login-form.js";
import React from "react";

export function LoginPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <LoginForm />
    </div>
  );
}
