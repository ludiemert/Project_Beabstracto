import { SettingsTabs } from './components/SettingsTabs'

export default function Home() {
  return (
    <>
      <h1 className=" text-1xl ml-2 mt-8 font-medium text-zinc-900 lg:text-2xl ">
        Settings
      </h1>
      <SettingsTabs />
    </>
  )
}
