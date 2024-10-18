import { css } from "hono/css";
import { createRoute } from "honox/factory";
import Hamburger from "../islands/menu";

const className = css`
  font-family: sans-serif;
`;

export default createRoute((c) => {
  return c.render(
    <>
      <header class="dark:bg-[#1F1F1F] w-full h-16 flex">
        <Hamburger />
        <div class="flex-1 relative mr-3">
          <div class="w-full h-full px-2 py-2">
            <input
              type="text"
              class="dark:bg-[#3a3a3a] w-full h-full px-5 text-white rounded-md"
              placeholder="Search"
            />
          </div>
        </div>
      </header>
      <main class="w-full h-full">
      </main>
    </>
  );
});
