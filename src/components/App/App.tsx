import * as React from "react";

interface AppProps {
  children: React.ReactNode;
}

export const App: React.FC<React.ReactNode> = ({ children }: AppProps) => {
  return <>{children}</>;
};
