import React from 'react'
import Profile from '../assets/profile4.png';

import {
    List,
    ListItem,
    ListItemSuffix,
    Card,
    IconButton,
} from "@material-tailwind/react";

export default function About() {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    {/* <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm Sai Kumar, nice to meet you. Please take a look around.</p>
                    </div> */}
                    <div>
                        <img src={Profile} alt="Profile" className='h-50' />
                    </div>
                    <div>
                        {/* <Profile/>   */}
                        <Card className='bg-[#0a192f] text-gray-300'>
                            <List>
                                <ListItem ripple={false} className="py-1 pr-1 pl-4">
                                    Item One
                                    <ListItemSuffix>
                                        <IconButton variant="text" color="blue-gray">
                                            <img src="" alt="" />
                                        </IconButton>
                                    </ListItemSuffix>
                                </ListItem>
                                <ListItem ripple={false} className="py-1 pr-1 pl-4">
                                    Item Two
                                    <ListItemSuffix>
                                        <IconButton variant="text" color="blue-gray">
                                            {/* <TrashIcon className="h-5 w-5" /> */}
                                        </IconButton>
                                    </ListItemSuffix>
                                </ListItem>
                                <ListItem ripple={false} className="py-1 pr-1 pl-4">
                                    Item Three
                                    <ListItemSuffix>
                                        <IconButton variant="text" color="blue-gray">
                                            {/* <TrashIcon className="h-5 w-5" /> */}
                                        </IconButton>
                                    </ListItemSuffix>
                                </ListItem>
                            </List>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
