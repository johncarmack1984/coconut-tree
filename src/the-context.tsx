import React, { createContext, useContext } from "react";

const AllInWhichYouLive = createContext<string | null>(null);

function useTheContext() {
  const whatCameBeforeYou = useContext(AllInWhichYouLive);
  if (whatCameBeforeYou === null) {
    throw new Error("You think you just fell out of a coconut tree?");
  }
  return whatCameBeforeYou;
}

function Exist({ children }: { children: React.ReactNode }) {
  const you =
    "You exist in the context of all in which you live and what came before you.";
  return (
    <AllInWhichYouLive.Provider value={you}>
      {children}
    </AllInWhichYouLive.Provider>
  );
}

function You() {
  const you = useTheContext();
  return <>{you}</>;
}

export default function TheContext() {
  return (
    <Exist>
      <You />
    </Exist>
  );
}
