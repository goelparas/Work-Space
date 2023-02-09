import { Timer } from '@mui/icons-material'
import { Avatar, Input } from '@mui/material'
import { Search } from '@mui/icons-material'
import { Help } from '@mui/icons-material'
import React from 'react'

export const Header = () => {
  return (

    <div className='header  flex w-full flex-row justify-around bg-primarypurple lg:h-11 items-center'>
      <div className='header_left flex items-center'>
        <Timer />
      </div>

      <div className='header_search'>
        <Input />
        <Search />
      </div>
      <div className='header_right flex items-center gap-2'>
        <Help />
        <Avatar alt='Paras' src="" />
      </div>
    </div>
  )
}
