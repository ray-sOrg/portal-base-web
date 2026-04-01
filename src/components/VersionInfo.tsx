"use client";

import { useEffect } from "react";

export default function VersionInfo() {
  useEffect(() => {
    console.log("%c🚀 portal-base-web v0.1.15", "color: #4CAF50; font-weight: bold; font-size: 14px;");
    console.log("%c   构建时间: " + new Date().toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" }), "color: #888;");
  }, []);

  return null;
}
