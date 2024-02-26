import { ChevronDown } from 'lucide-react'
import { ElementType } from 'react'

export interface NavItemProps {
  title: string
  icon: ElementType
}

export function NaviItem({ title, icon: Icon }: NavItemProps) {
  return (
    <a
      href=""
      className="  group flex flex-col items-center  justify-center  gap-2 p-0 px-3 py-2  "
    >
      <Icon className="h-5 w-5 text-base-brand-primary-600 group-hover:text-base-global-blue-600" />
      <span className="font-medium text-base-brand-primary-600 group-hover:text-base-global-blue-600">
        {title}
      </span>
      <ChevronDown className="ml-auto h-5 w-5 text-base-brand-primary-600 group-hover:text-base-global-blue-600" />
    </a>
  )
}
