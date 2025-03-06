import * as React from 'react'
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

// Menu items.
const items = [
  {
    title: "Total Staffs",
    url: "/",
    icon: Home,
  },
  {
    title: "Ex-Staffs",
    url: "/roles",
    icon: Inbox,
  },
  {
    title: "Active Staffs",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Total Admin roles",
    url: "#",
    icon: Search,
  }
]

const TopBar = () => {
  return (
    <div className='flex flex-1 flex-col p-4'>
      <div className="grid gap-4 grid-cols-4">
        {items.map((item) => (
          <div className='border rounded-xl min-h-40 text-center bg-muted' key={item.title}><h1>{item.title}</h1></div>
        ))}
      </div>
    </div>
  )
}

export default TopBar
