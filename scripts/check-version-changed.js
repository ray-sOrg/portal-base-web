const { execSync } = require("child_process");
const fs = require("fs");

function getVersionFromContent(content) {
  try {
    const pkg = JSON.parse(content);
    return pkg.version;
  } catch {
    return null;
  }
}

try {
  const currentPkgContent = fs.readFileSync("package.json", "utf-8");
  const currentVersion = getVersionFromContent(currentPkgContent);

  const previousPkgContent = execSync("git show HEAD:package.json", {
    encoding: "utf-8",
  });
  const previousVersion = getVersionFromContent(previousPkgContent);

  if (!currentVersion || !previousVersion) {
    console.error("无法读取 package.json 中的 version 字段");
    process.exit(1);
  }

  if (currentVersion === previousVersion) {
    console.error(
      `Version 未更新，当前版本是 ${currentVersion}，请在提交前更新 package.json 的 version 字段`
    );
    process.exit(1);
  }

  process.exit(0);
} catch (error) {
  console.error("执行 version 校验失败:", error.message);
  process.exit(1);
}
