import { useEffect } from "react";
import { start, registerMicroApps } from "qiankun";

export default function KnowledgePage() {
  useEffect(() => {
    registerMicroApps([
      {
        name: "portal-knowledge",
        entry: "/qiankun-knowledge",
        container: "#portal-knowledge",
        activeRule: (location) => location.pathname.startsWith("/knowledge"),
      },
    ]);

    start();
  }, []);

  return <div id="portal-knowledge" />;
}
