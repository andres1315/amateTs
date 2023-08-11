
import { EnvelopeIcon, UserIcon, PhoneIcon, CurrencyDollarIcon, ChatBubbleBottomCenterIcon } from '@heroicons/react/20/solid'

interface InputIconProps {
  label: string
  children: React.ReactNode
  name: string
  icon: string
}

const iconInput = {
  user: UserIcon,
  phone: PhoneIcon,
  mail: EnvelopeIcon,
  dollar: CurrencyDollarIcon,
  description: ChatBubbleBottomCenterIcon
}

export const InputIcon: React.FC<InputIconProps> = ({ children, label, name, icon }: InputIconProps) => {
  const IconComponent = iconInput[icon]
  return (
    <div>
      <label htmlFor={name} className="block  font-medium  text-gray-900">
        {label}
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <IconComponent className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        {children}
      </div>
    </div>
  )
}
