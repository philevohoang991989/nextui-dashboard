"use client";
import { Chip } from "@nextui-org/react";
import React, { ReactNode } from "react";

export default function AboutPage({
  params: { lng },
}: {
  params: {
    lng: string;
  };
}) {
  return (
    <section>
      AboutPage
      <Chip variant="shadow" color="primary" size="sm">
        Next.js 13
      </Chip>
    </section>
  );
}
