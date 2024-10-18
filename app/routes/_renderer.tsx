import { Style } from "hono/css";
import { Link } from "honox/server";
import { jsxRenderer } from "hono/jsx-renderer";
import { Script } from "honox/server";

export default jsxRenderer(({ children }) => {
  return (
    <html lang="en" class="h-full">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />

        {/* for client codes and island components */}
        <Script src="/app/client.ts" async />

        {/* for tailwind */}
        <Link href="/app/style.css" rel="stylesheet" />

        {/* for honox/css */}
        <Style />
      </head>
      <body class="dark:bg-[#1f1f1f] h-full text-slate-200">{children}</body>
    </html>
  );
});
