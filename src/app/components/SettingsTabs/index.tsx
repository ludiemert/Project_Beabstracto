'use client'

import Link from 'next/link'

import * as Tabs from '@radix-ui/react-tabs'
import { TabItem } from './TabItem'
import { Camera, Computer, Home } from 'lucide-react'
import { useState } from 'react'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('tab1')
  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.TabsList className=" ml-1 mt-5 flex w-full flex-col items-center gap-10">
        <Link
          href="https://beabstracto.web.app/#services"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TabItem
            value="tab1"
            title="Home Page"
            icon={Home}
            isSelected={currentTab === 'tab1'}
          />
        </Link>

        <Link href="/page">
          <TabItem
            value="tab2"
            title="MARKETING"
            icon={Camera}
            isSelected={currentTab === 'tab2'}
          />
        </Link>

        <TabItem
          value="tab3"
          title="AUDIOVISUAL"
          icon={Home}
          isSelected={currentTab === 'tab3'}
        />

        <TabItem
          value="tab4"
          title="TECNOLOGIA"
          icon={Computer}
          isSelected={currentTab === 'tab4'}
        />
      </Tabs.TabsList>
    </Tabs.Root>
  )
}
