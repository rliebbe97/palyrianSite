"use client"

//handle submit, handle only when information has been met, 

import { useState } from "react"
import ContactForm from "./ContactForm"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <main className="bg-background items-center">
        <div className="h-screen">
          <Navbar/>
          <ContactForm/>
        </div>
        <Footer/>  
    </main>
  )
}
