import { useState } from "hono/jsx";
import { UseStateReturnType } from "../../util/types";

const buttonId = "menuButton";
const navId = "menuContent";

function HamburgerLine({
  left,
  width,
  top,
  height,
}: {
  left: string;
  width: string;
  top: string;
  height: string;
}) {
  return (
    <span
      class={`dark:bg-slate-300 absolute left-[${left}] top-[${top}] h-[${height}] w-[${width}] rounded-full`}
    />
  );
}

function Button({
  peer = " ",
  open,
  setOpen,
}: {
  peer?: string;
  open: boolean;
  setOpen: UseStateReturnType<typeof useState<boolean>>[1];
}) {
  return (
    <button
      aria-controls={navId}
      aria-expanded={`${open}`}
      aria-pressed={`${open}`}
      id={buttonId}
      class={`${peer} relative w-16 aspect-square ml-3`}
      onClick={() => {
        setOpen(!open);
      }}
    >
      <div class="h-full p-[20%]">
        <div class="dark:hover:bg-slate-500 w-full h-full transition-all opacity-20 rounded-full"></div>
      </div>
      <HamburgerLine left="35%" width="30%" top="40%" height="0.1rem" />
      <HamburgerLine left="35%" width="30%" top="50%" height="0.1rem" />
      <HamburgerLine left="35%" width="30%" top="60%" height="0.1rem" />
    </button>
  );
}

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button peer="peer" open={open} setOpen={setOpen} />
      <nav
        id={navId}
        class={`dark:bg-[#1f1f1f] z-50 fixed w-[18rem] h-full top-0 right-[100%] peer-aria-expanded:translate-x-[18rem] transition-all duration-200 ease-out`}
      >
        <Button open={open} setOpen={setOpen} />
        <ul class="w-full h-full flex flex-col items-center justify-center">
          <li class="w-full h-12 flex items-center justify-center">
            <a
              href="#"
              class="dark:hover:bg-slate-500 w-full h-full flex items-center justify-center"
            >
              Home
            </a>
          </li>
          <li class="w-full h-12 flex items-center justify-center">
            <a
              href="#"
              class="dark:hover:bg-slate-500 w-full h-full flex items-center justify-center"
            >
              About
            </a>
          </li>
          <li class="w-full h-12 flex items-center justify-center">
            <a
              href="#"
              class="dark:hover:bg-slate-500 w-full h-full flex items-center justify-center"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
