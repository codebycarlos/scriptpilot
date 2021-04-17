import { useState, useEffect } from "react";
import { useSession } from "next-auth/client";

export default function Restricted() {
  const [session, loading] = useSession();
  const [content, setContent] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/restricted");
      const json = await res.json();

      if (json.content) {
        setContent(json.content);
      }
    };
    fetchData();
  }, [session]);

  if (typeof window !== "undefined" && loading) return null;

  if (!session) {
    return (
      <main>
        <p>You aren't signed in.</p>
      </main>
    );
  }

  return (
    <main>
      <p>Protected page!</p>
      <p>{content}</p>
    </main>
  );
}
