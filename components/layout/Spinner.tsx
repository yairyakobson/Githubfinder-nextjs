"use client"

import Image from "next/image";
import spinner from "./assets/spinner.gif";

function Spinner(){
  return(
    <section className="w-full mt-20">
      <Image className="text-center mx-auto"
      width={180}
      src={spinner}
      alt="Loading..."/>
    </section>
  )
}

export default Spinner;