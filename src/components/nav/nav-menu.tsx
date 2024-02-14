"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "../ui/button";

function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex flex-row p-4 items-center justify-between">
        <h3 className="font-semibold text-lg">Hello {session?.user?.name}!</h3>
        <br/>
        <Button onClick={() => signOut()}>Sign out</Button>
      </div>
    );
  }
  return (
    <>
      Not signed in <br />
      <Button onClick={() => signIn()}>Sign in</Button>
    </>
  );
}

export default function NavMenu() {
  return (
    <div>
      <AuthButton />
      <hr/>
    </div>
  );
}