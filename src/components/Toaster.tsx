interface ToasterProps {
  message: string
}

export const Toaster = ({ message }: ToasterProps) => {
  return (
    <div>
      {message}
    </div>
  )
}
