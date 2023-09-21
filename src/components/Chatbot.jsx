import React, { useState } from 'react'

export const Chatbot = () => {
    const [chatbotOpen, setchatBotOpen] = useState(false)
    const handleOpen = () => {
        setchatBotOpen(true)
    }
    const handleClose = () => {
        setchatBotOpen(false)
    }
    return (
        <>
        <div className=''>
            {  !chatbotOpen? 
                <div className='fixed bottom-4 right-2' onClick={handleOpen} >
                <p>Hola! </p>
                <p>Necesitas ayuda?</p>
                <img src="data:image/png;base64,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"/>
                </div>
            :
            <div className='fixed bottom-4 right-2 h-[75vh] min-h-52 w-72 md:w-96 bg-black rounded-lg'>
                <div className='flex justify-between my-2 mx-1'>
                <p>Ayudin</p>
                <svg className='h-6 w-6' onClick={handleClose} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 64 64"><linearGradient id="NHD9gZdQDJj0HA67oC7KMa_43980_gr1" x1="32" x2="32" y1="5" y2="59.134" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#1a6dff"></stop><stop offset="1" stopColor="#c822ff"></stop></linearGradient><path fill="url(#NHD9gZdQDJj0HA67oC7KMa_43980_gr1)" d="M32,58C17.663,58,6,46.337,6,32S17.663,6,32,6s26,11.663,26,26S46.337,58,32,58z M32,8 C18.767,8,8,18.767,8,32s10.767,24,24,24s24-10.767,24-24S45.233,8,32,8z"></path><linearGradient id="NHD9gZdQDJj0HA67oC7KMb_43980_gr2" x1="32" x2="32" y1="5" y2="59.134" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#1a6dff"></stop><stop offset="1" stopColor="#c822ff"></stop></linearGradient><path fill="url(#NHD9gZdQDJj0HA67oC7KMb_43980_gr2)" d="M32,52c-11.028,0-20-8.972-20-20s8.972-20,20-20s20,8.972,20,20S43.028,52,32,52z M32,14 c-9.925,0-18,8.075-18,18s8.075,18,18,18s18-8.075,18-18S41.925,14,32,14z"></path><linearGradient id="NHD9gZdQDJj0HA67oC7KMc_43980_gr3" x1="32" x2="32" y1="20.833" y2="42.698" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#6dc7ff"></stop><stop offset="1" stopColor="#e6abff"></stop></linearGradient><path fill="url(#NHD9gZdQDJj0HA67oC7KMc_43980_gr3)" d="M40.692,24.724l-1.417-1.417c-0.41-0.41-1.076-0.41-1.486,0L32,29.097l-5.789-5.789 c-0.41-0.41-1.076-0.41-1.486,0l-1.417,1.417c-0.41,0.41-0.41,1.076,0,1.486L29.097,32l-5.789,5.789c-0.41,0.41-0.41,1.076,0,1.486 l1.417,1.417c0.41,0.41,1.076,0.41,1.486,0L32,34.903l5.789,5.789c0.41,0.41,1.076,0.41,1.486,0l1.417-1.417 c0.41-0.41,0.41-1.076,0-1.486L34.903,32l5.789-5.789C41.103,25.8,41.103,25.135,40.692,24.724z"></path></svg></div>
                <iframe
                    className='rounded-lg'
                    src="https://www.chatbase.co/chatbot-iframe/58zulTbYbPKdqIy9MiW7N"
                    width="100%"
                    style={{"height": "95%", "minHeight": "250px"}}
                ></iframe>
            </div>
            }
            
        </div>
        </>
    )
}
