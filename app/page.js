import Image from 'next/image'
import {Profiler} from "react";

export default function Home() {
  return (
    <Profiler id="hello">
      <p>hello app server</p>
    </Profiler>
  )
}
