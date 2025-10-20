import Link from "next/link";

export const ICP = () => {
  return (
    <a
      style={{
        position: "fixed",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        color: "var(--link)",
      }}
      target="_blank"
      href="https://beian.miit.gov.cn"
    >
      蜀ICP备2024076457号-1
    </a>
  );
};
