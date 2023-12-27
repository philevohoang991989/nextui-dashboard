"use client";
import { Chip } from "@nextui-org/react";
import React, { ReactNode } from "react";

function wait(){
  return new Promise((resolve: any, rejects: any)=>{
    setTimeout(()=>resolve(), 3000)
  })
}

export default async function AboutPage({
  params: { lng },
}: {
  params: {
    lng: string;
  };
}) {
  await wait();
  return (
    <section>
      AboutPage
      <Chip variant="shadow" color="primary" size="sm">
        Next.js 13
      </Chip>
    </section>
  );
}
