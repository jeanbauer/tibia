import {
  createToaster,
  Toaster as ChakraToaster,
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastCloseTrigger,
} from '@chakra-ui/react'

export const toaster = createToaster({
  placement: 'bottom-start',
})

export function Toaster() {
  return (
    <ChakraToaster toaster={toaster}>
      {(toast) => (
        <ToastRoot key={toast.id}>
          {toast.title && <ToastTitle>{toast.title}</ToastTitle>}
          {toast.description && <ToastDescription>{toast.description}</ToastDescription>}
          <ToastCloseTrigger />
        </ToastRoot>
      )}
    </ChakraToaster>
  )
}
