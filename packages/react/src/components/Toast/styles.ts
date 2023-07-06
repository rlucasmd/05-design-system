import * as Toast from "@radix-ui/react-toast";
import { styled } from "../../styles";
import { keyframes } from "@stitches/react";

const hide = keyframes({
  "0%": { opacity: 1 },
  "100%": { opacity: 0 },
});

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + 32px))` },
  to: { transform: "translateX(0)" },
});

const swipeOut = keyframes({
  from: { transform: "translateX(var(--radix-toast-swipe-end-x))" },
  to: { transform: `translateX(calc(100% + 32px))` },
});

const ToastViewport = styled(Toast.Viewport, {
  position: "fixed",
  bottom: 0,
  right: 0,
  padding: 32,
  display: "flex",
  flexDirection: "column",
  width: 360,
  maxWidth: "100vw",
  gap: 10,
  margin: 0,
  listStyle: "none",
  zIndex: 9999,
  outline: "none",
});

const ToastContainer = styled(Toast.Root, {
  padding: "$3 $4",
  background: "$gray800",
  border: "1px solid $gray600",
  borderRadius: "$sm",
  fontFamily: "$default",
  position: "relative",

  "@media (prefers-reduced-motion: no-preference)": {
    '&[data-state="open"]': {
      animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${hide} 100ms ease-in`,
    },
    '&[data-swipe="move"]': {
      transform: "translateX(var(--radix-toast-swipe-move-x))",
    },
    '&[data-swipe="cancel"]': {
      transform: "translateX(0)",
      transition: "transform 200ms ease-out",
    },
    '&[data-swipe="end"]': {
      animation: `${swipeOut} 100ms ease-out`,
    },
  },
});

const ToastTitle = styled(Toast.Title, {
  fontWeight: "$bold",
  fontSize: "$xl",
  lineHeight: "$base",
  color: "$white",
});

const ToastDescription = styled(Toast.Description, {
  // fontWeight: "$bold",
  fontSize: "$sm",
  lineHeight: "$base",
  color: "$gray200",
  marginTop: "$1",
});

const ToastCloseButton = styled(Toast.Close, {
  all: "unset",
  color: "$gray200",
  position: "absolute",
  top: "$4",
  right: "$4",
  cursor: "pointer",
});

export {
  ToastViewport,
  ToastContainer,
  ToastTitle,
  ToastDescription,
  ToastCloseButton,
};
