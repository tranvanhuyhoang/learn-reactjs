import * as React from "react";

export interface StudentProps {
  name?: String;
}

export function Student({ name = "HoangTran" }: StudentProps) {
  return <div>{name}</div>;
}
