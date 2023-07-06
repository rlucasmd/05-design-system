import { X } from "phosphor-react";
import {
  ToastCloseButton,
  ToastContainer,
  ToastDescription,
  ToastTitle,
  ToastViewport,
} from "./styles";
import * as RadixToast from "@radix-ui/react-toast";
import { ComponentProps } from "react";

export type ToastProps = ComponentProps<typeof ToastContainer> & {
  title: string;
  description: string;
};

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <RadixToast.Provider>
      <ToastContainer {...props}>
        <ToastTitle>{title}</ToastTitle>
        {description && <ToastDescription>{description}</ToastDescription>}
        <ToastCloseButton>
          <X size={20} weight="light" />
        </ToastCloseButton>
      </ToastContainer>
      <ToastViewport />
    </RadixToast.Provider>
  );
}
