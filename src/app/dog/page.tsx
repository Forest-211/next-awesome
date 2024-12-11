import React from 'react'

interface Dog {
    message: string
    status: string
}
async function getData() {
    const res = await fetch('https://dog.ceo/api/breed/appenzeller/images/random')
    return res.json() as Promise<Dog>
}

export async function generateMetadata() {
    const data = await getData()
    return {
        title: data.message
    }
}

export default async function page() {
    const data = await getData()
    return (
        <div>
            <img className='w-28 h-28' src={data.message} alt="dog" />
            <DogDetail />
        </div>
    )
}

const DogDetail = async () => {
    const data = await getData()
    return (
        <div>
            <p>dog detail</p>
            <img className='w-28 h-28' src={data.message} alt="dog" />
        </div>
    )
}