"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "../ui/button";
import Image from "next/image";

function AuthButton() {
  const { data: session } = useSession();
  
  if (session) {
    return (
      <div className="flex flex-row p-4 items-center justify-between">
        <h3 className="flex items-center font-semibold text-lg">
        {session?.user?.image && (
          <Image src={session.user.image} width={30} height={30} alt="user_image" className="rounded-full mx-3"/>
        )}
          Hello {session?.user?.name}!
        </h3>
        <br/>
        <Button onClick={() => signOut()}>Sign out</Button>
      </div>
    );
  }
  return (
    <>
      Not signed in 
      <br/>
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