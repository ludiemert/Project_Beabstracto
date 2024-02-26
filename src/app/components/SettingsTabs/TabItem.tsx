'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'

import { ElementType } from 'react'

export interface TabItemProps {
  value: string
  title: string
  isSelected?: boolean
  icon: ElementType
}

export function TabItem({
  value,
  title,
  isSelected = false,
  icon: Icon,
}: TabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="hover:tex-base-brand-primary-600 relative px-1 pb-4 text-sm font-medium text-base-font-dark-800  data-[state=active]:text-base-brand-primary-600 "
    >
      {Icon && <Icon className="icon-class-name" />}

      <span>{title}</span>

      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700"
        />
      )}
    </Tabs.Trigger>
  )
}
