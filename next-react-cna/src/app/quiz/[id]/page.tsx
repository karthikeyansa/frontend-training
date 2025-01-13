"use client";
import * as React from "react";

type RouteIdType = {
  id: string;
};

type PageComponentProps = {
  params: React.Usable<RouteIdType>;
};

export default function Page({ params }: PageComponentProps) {
  const { id } = React.use(params);
  return <p>ID: {id}</p>;
}
