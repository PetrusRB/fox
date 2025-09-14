import clsx from 'clsx'
import { Input, InputProps } from 'app/components/ui/input'

const NormalInput = ({ id, className, placeholder, type }: InputProps) => {
  return (
    <Input
      id={id}
      type={type}
      placeholder={placeholder}
      className={clsx(className, 'w-full')}
    />
  )
}
export default NormalInput
