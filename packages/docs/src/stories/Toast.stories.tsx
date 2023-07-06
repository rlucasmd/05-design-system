import type { StoryObj, Meta } from "@storybook/react";
import { Button, Toast, ToastProps } from "@ranieri-ignite-ui/react";
import { useEffect, useRef, useState } from "react";

const DemoToast = (props: ToastProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const timerRef = useRef(0);

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current);
    };
  }, []);
  return (
    <div>
      <Button
        onClick={() => {
          setIsOpen(false);
          window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => {
            setIsOpen(true);
          }, 100);
        }}
      >
        Agendar
      </Button>
      <Toast
        open={isOpen}
        onOpenChange={setIsOpen}
        duration={5000}
        {...props}
      />
    </div>
  );
};

export default {
  title: "Form/Toast",
  component: DemoToast,
  args: {
    title: "Agendamento realizado",
    description: "Quarta-feira, 23 de Outubro às 16:00",
  },
} as Meta<ToastProps>;

export const Primary: StoryObj<ToastProps> = {};
