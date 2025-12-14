"use client";

// import Button from "@repo/ui/Button";
// import { cn } from "@repo/utils";
// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";

// export default function AuthLoginPage() {
//   const [isFocused, setIsFocused] = useState(false);

//   return (
//     <AnimatePresence>
//       <main className="h-dvh">
//         <div className="w-full h-18 bg-emerald-100 flex flex-row items-center justify-end px-4">
//           <Button size={"md"}>{"-->"}</Button>
//         </div>

//         <div className="">
//           <motion.div
//             layout
//             transition={{
//               layout: {
//                 duration: 0.4,
//                 ease: "easeInOut",
//                 delay: 0.2,
//               },
//             }}
//             className={cn(
//               "absolute bg-emerald-300 flex flex-col items-center justify-center gap-8",
//               isFocused ? "top-2 h-12 left-4 w-fit" : "top-52 w-full"
//             )}
//           >
//             <Logo
//               direction={isFocused ? "row" : "col"}
//               size={isFocused ? "xs" : "md"}
//             />
//           </motion.div>
//           <motion.div className="bg-red-500 overflow-hidden">
//             <motion.p
//               animate={{
//                 ...(isFocused
//                   ? { y: 50, opacity: 0, display: "none" }
//                   : { y: 0, opacity: 1, display: "block" }),
//               }}
//             >
//               بازار آنلاین آثار هنری اصیل
//             </motion.p>
//           </motion.div>
//         </div>

//         <div
//           className={cn(
//             "absolute top-[50dvh] mx-auto w-full px-4 flex flex-col gap-8 items-center"
//           )}
//         >
//           <div
//             className="h-12 w-full bg-white"
//             onClick={() => setIsFocused(!isFocused)}
//           >
//             TOGGLE
//           </div>

//           <p>یا</p>

//           <div className="h-12 w-xs bg-blue-200"></div>
//         </div>
//       </main>
//     </AnimatePresence>
//   );
// }

// interface LogoProps {
//   direction: "col" | "row";
//   size?: "xs" | "sm" | "md" | "lg" | "xl";
// }
// const Logo = (props: LogoProps) => {
//   const { direction, size = "md" } = props;
//   return (
//     <motion.div
//       layout
//       transition={{ layout: { duration: 0.4, ease: "easeInOut", delay: 0.2 } }}
//       className={cn("flex gap-3 items-center", {
//         "flex-col": direction === "col",
//         "flex-row": direction === "row",
//       })}
//     >
//       <motion.div
//         layout
//         transition={{
//           layout: { duration: 0.4, ease: "easeInOut" },
//         }}
//         className={cn("size-16 bg-amber-400", {
//           "size-5 rounded-theme-xs": size === "xs",
//           "size-16 rounded-theme-md": size === "md",
//           "size-24 rounded-theme-lg": size === "lg",
//         })}
//       ></motion.div>
//       <motion.p
//         layout
//         transition={{
//           layout: { duration: 0.4, ease: "easeInOut" },
//         }}
//       >
//         Paletto
//       </motion.p>
//     </motion.div>
//   );
// };


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '@repo/ui';

export default function LoginPage() {
  const [isFocused, setIsFocused] = useState(false);

  // Helper to toggle focus off (for demo purposes, usually clicking back/close)
  const handleReset = () => {
    setIsFocused(false);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col font-sans">

      {/* --- HEADER (Height: 48px) --- */}
      {/* Z-index ensures it stays on top. Fixed position to anchor visuals. */}
      <header className="absolute top-0 left-0 right-0 h-[48px] z-50 flex items-center justify-start px-4">
        {/* Top Right Button */}
        <button
          onClick={handleReset}
          className="p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors"
        >
          {isFocused ? 'X' : 'O'}
        </button>
      </header>

      {/* --- TOP SECTION (Logo & App Name) --- */}
      {/* We use absolute positioning to move this group freely from the 
         "Top Half" center to the "Header" top-left.
      */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="absolute z-40 flex"
        initial={false}
        animate={
          isFocused
            ? {
              top: 0,
              left: 16, // Padding left
              x: 0,
              y: 0,
              height: 48, // Match header height
              alignItems: "center",
              flexDirection: "row",
              gap: 8,
            }
            : {
              top: "25%", // Roughly center of top half
              left: "50%",
              x: "-50%", // Center alignment correction
              y: "-50%",
              height: "auto",
              alignItems: "center",
              flexDirection: "column",
              gap: 16,
            }
        }
      >
        {/* Logo */}
        <motion.div
          layout
          className="bg-blue-600 flex items-center justify-center text-white font-bold"
          animate={
            isFocused
              ? { width: 32, height: 32, }
              : { width: 80, height: 80, }
          }
        >
          <span className="text-xl">A</span>
        </motion.div>

        {/* App Name */}
        <motion.h1
          layout
          className="font-bold text-gray-900"
          animate={
            isFocused
              ? { fontSize: "18px" }
              : { fontSize: "32px" }
          }
        >
          MyApp
        </motion.h1>
      </motion.div>

      {/* --- SENTENCE (Fades out) --- */}
      <motion.div
        className="absolute w-full text-center px-8"
        initial={false}
        animate={
          isFocused
            ? { top: "25%", opacity: 0, pointerEvents: "none" }
            : { top: "35%", opacity: 1, pointerEvents: "auto" }
        }
        transition={{ duration: 0.3 }}
      >
        <p className="text-gray-500 text-sm">
          Welcome back! Please enter your details to continue using the application.
        </p>
      </motion.div>


      {/* --- BOTTOM SECTION (Input & Buttons) --- */}
      {/* This container holds the Input, OR, and Google Button.
         It moves from 50% height (bottom half) to just under the header.
      */}
      <motion.div
        layout
        className="absolute w-full px-6 flex flex-col items-center"
        initial={false}
        animate={
          isFocused
            ? { top: 64 } // 48px header + 16px spacing
            : { top: "50%" }
        }
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Input Field */}
        <div className="w-full relative">
          <Input
            type="email"
            placeholder="Email Address"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            fullWidth
          // Note: We don't auto-blur here to keep the state active for the demo
          />
        </div>

        {/* Elements that disappear on focus */}
        <AnimatePresence>
          {!isFocused && (
            <motion.div
              className="w-full flex flex-col items-center"
              initial={{ opacity: 1, height: "auto", marginTop: 24 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* The word "OR" */}
              <div className="relative flex items-center justify-center w-full mb-6">
                <div className="h-px bg-gray-200 w-full absolute"></div>
                <span className="bg-white px-3 text-gray-400 text-sm relative z-10">OR</span>
              </div>

              {/* Login with Google Button */}
              <button className="w-full h-12 flex items-center justify-center gap-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-700 font-medium">
                {/* Google SVG Icon */}
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Login with Google
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>
    </div>
  );
}