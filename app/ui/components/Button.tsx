import { tv } from "tailwind-variants";

// const buttonClasses = tv({
//   base: 'h-[40px] text-[14px] inline-flex items-center justify-center gap-2 rounded-[8px] py-[6px] px-[18px] min-w-max transition-all duration-300 ease-in-out cursor-pointer disabled:cursor-default',
//   variants: {
//     variant: {
//       primary:
//         'bg-violet-700 border border-violet-700 text-neutral-50 shadow-[inset_0_4px_8px_0_rgba(255,255,255,0.25)] ' +
//         'hover:bg-violet-900 hover:shadow-[inset_0_4px_8px_0_#743DCB] ' +
//         'active:bg-violet-800 active:border-violet-800 active:shadow-[inset_0_4px_8px_0_rgba(255,255,255,0.25)] ' +
//         'disabled:opacity-50 disabled:hover:bg-violet-700',
//       secondary:
//         'bg-blue-200 border-[1.5px] border-violet-200 text-violet-950 shadow-[inset_0_4px_8px_0_var(--violet-200,_#DDD6FE)] ' +
//         'hover:bg-blue-300 hover:border-violet-300 hover:shadow-[inset_0_4px_8px_0_var(--violet-200,_#C4B5FD)] ' +
//         'active:bg-blue-200 active:border-violet-300 active:shadow-[inset_0_4px_8px_0_var(--violet-200,_#DDD6FE)] ' +
//         'disabled:bg-blue-200 disabled:opacity-50 disabled:border-violet-200 disabled:hover:bg-blue-200 disabled:hover:shadow-[inset_0_4px_8px_0_var(--violet-200,_#DDD6FE)]',
//       outline:
//         'bg-transparent border border-alpha-dark-200 text-neutral-50 ' +
//         'hover:border-neutral-200 active:border-neutral-50 ' +
//         'disabled:border-neutral-500 disabled:opacity-50 disabled:hover:border-neutral-500 disabled:active:border-neutral-500',
//       link:
//         'bg-transparent border-none text-neutral-50 ' +
//         'hover:text-neutral-200 active:text-neutral-50 ' +
//         'disabled:text-neutral-400 disabled:opacity-50 disabled:hover:text-neutral-400 disabled:active:text-neutral-400',
//       howtintingworks: 'bg-[#1A1A1A]',
//     },
//   },
// });
const buttonClasses = tv({
  base: "h-[44px] text-[14px] inline-flex items-center justify-center gap-2 rounded-full py-[6px] px-[24px] min-w-max transition-all duration-300 ease-in-out cursor-pointer disabled:cursor-default",
  variants: {
    variant: {
      primary: 'bg-[#2563EB]'
    },
  },
});
export default function Button({
  variant = "primary",
  className,
  children,
  ...otherProps
}) {
  return (
    <button className={buttonClasses({ variant, className })} {...otherProps}>
      {children}
    </button>
  );
}
