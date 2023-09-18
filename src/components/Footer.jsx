import React from 'react'

export const Footer = () => {
  return (
    <footer className="footer p-10 flex justify-center  bg-neutral text-neutral-content fixed bottom-0 ">
        {/* <aside>
            <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
            <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
        </aside>  */}
        <nav className='flex justify-center items-center'>
            {/* <header className="footer-title">Formas de contactarme</header>  */}
            <div className="grid grid-flow-col gap-4">
            <a className='flex flex-col items-center group ' href='https://www.linkedin.com/in/debora-abril-badosa/' target='_blank'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='w-10' viewBox="0 0 64 64"><linearGradient id="SUJNhpmDQDF27Y3OfwgfYa_44019_gr1" x1="19" x2="19" y1="24.858" y2="49.041" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#6dc7ff"></stop><stop offset="1" stopColor="#e6abff"></stop></linearGradient><path fill="url(#SUJNhpmDQDF27Y3OfwgfYa_44019_gr1)" fillRule="evenodd" d="M22 48L22 26 16 26 16 48 22 48z" clipRule="evenodd"></path><linearGradient id="SUJNhpmDQDF27Y3OfwgfYb_44019_gr2" x1="19.382" x2="19.382" y1="15.423" y2="23.341" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#6dc7ff"></stop><stop offset="1" stopColor="#e6abff"></stop></linearGradient><path fill="url(#SUJNhpmDQDF27Y3OfwgfYb_44019_gr2)" fillRule="evenodd" d="M19.358,23c2.512,0,4.076-1.474,4.076-3.554 c-0.047-2.126-1.564-3.649-4.028-3.649c-2.465,0-4.076,1.475-4.076,3.601c0,2.08,1.563,3.602,3.981,3.602H19.358L19.358,23z" clipRule="evenodd"></path><linearGradient id="SUJNhpmDQDF27Y3OfwgfYc_44019_gr3" x1="37.386" x2="37.386" y1="14.125" y2="49.525" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#6dc7ff"></stop><stop offset="1" stopColor="#e6abff"></stop></linearGradient><path fill="url(#SUJNhpmDQDF27Y3OfwgfYc_44019_gr3)" fillRule="evenodd" d="M26.946,48H34V35.911c0-0.648,0.122-1.295,0.313-1.758 c0.52-1.295,1.877-2.635,3.867-2.635c2.607,0,3.821,1.988,3.821,4.901V48h6V35.588c0-6.657-3.085-9.498-7.826-9.498 c-3.886,0-5.124,1.91-6.072,3.91H34v-4h-7.054c0.095,2-0.175,22-0.175,22H26.946z" clipRule="evenodd"></path><linearGradient id="SUJNhpmDQDF27Y3OfwgfYd_44019_gr4" x1="32" x2="32" y1="6.5" y2="57.5" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#1a6dff"></stop><stop offset="1" stopColor="#c822ff"></stop></linearGradient><path fill="url(#SUJNhpmDQDF27Y3OfwgfYd_44019_gr4)" d="M50,57H14c-3.859,0-7-3.141-7-7V14c0-3.859,3.141-7,7-7h36c3.859,0,7,3.141,7,7v36 C57,53.859,53.859,57,50,57z M14,9c-2.757,0-5,2.243-5,5v36c0,2.757,2.243,5,5,5h36c2.757,0,5-2.243,5-5V14c0-2.757-2.243-5-5-5H14z"></path></svg><p className='group-hover:flex lg:hidden'>/debora-abril-badosa</p></a> 
            <a className='flex flex-col items-center group' href='https://github.com/debiabril' target='_blank'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='w-10' viewBox="0 0 64 64"><linearGradient id="KpzH_ttTMIjq8dhx1zD2pa_52539_gr1" x1="30.999" x2="30.999" y1="16" y2="55.342" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#6dc7ff"></stop><stop offset="1" stopColor="#e6abff"></stop></linearGradient><path fill="url(#KpzH_ttTMIjq8dhx1zD2pa_52539_gr1)" d="M25.008,56.007c-0.003-0.368-0.006-1.962-0.009-3.454l-0.003-1.55 c-6.729,0.915-8.358-3.78-8.376-3.83c-0.934-2.368-2.211-3.045-2.266-3.073l-0.124-0.072c-0.463-0.316-1.691-1.157-1.342-2.263 c0.315-0.997,1.536-1.1,2.091-1.082c3.074,0.215,4.63,2.978,4.694,3.095c1.569,2.689,3.964,2.411,5.509,1.844 c0.144-0.688,0.367-1.32,0.659-1.878C20.885,42.865,15.27,40.229,15.27,30.64c0-2.633,0.82-4.96,2.441-6.929 c-0.362-1.206-0.774-3.666,0.446-6.765l0.174-0.442l0.452-0.144c0.416-0.137,2.688-0.624,7.359,2.433 c1.928-0.494,3.969-0.749,6.074-0.759c2.115,0.01,4.158,0.265,6.09,0.759c4.667-3.058,6.934-2.565,7.351-2.433l0.451,0.145 l0.174,0.44c1.225,3.098,0.813,5.559,0.451,6.766c1.618,1.963,2.438,4.291,2.438,6.929c0,9.591-5.621,12.219-10.588,13.087 c0.563,1.065,0.868,2.402,0.868,3.878c0,1.683-0.007,7.204-0.015,8.402l-2-0.014c0.008-1.196,0.015-6.708,0.015-8.389 c0-2.442-0.943-3.522-1.35-3.874l-1.73-1.497l2.274-0.253c5.205-0.578,10.525-2.379,10.525-11.341c0-2.33-0.777-4.361-2.31-6.036 l-0.43-0.469l0.242-0.587c0.166-0.401,0.894-2.442-0.043-5.291c-0.758,0.045-2.568,0.402-5.584,2.447l-0.384,0.259l-0.445-0.123 c-1.863-0.518-3.938-0.796-6.001-0.806c-2.052,0.01-4.124,0.288-5.984,0.806l-0.445,0.123l-0.383-0.259 c-3.019-2.044-4.833-2.404-5.594-2.449c-0.935,2.851-0.206,4.892-0.04,5.293l0.242,0.587l-0.429,0.469 c-1.536,1.681-2.314,3.712-2.314,6.036c0,8.958,5.31,10.77,10.504,11.361l2.252,0.256l-1.708,1.49 c-0.372,0.325-1.03,1.112-1.254,2.727l-0.075,0.549l-0.506,0.227c-1.321,0.592-5.839,2.162-8.548-2.485 c-0.015-0.025-0.544-0.945-1.502-1.557c0.646,0.639,1.433,1.673,2.068,3.287c0.066,0.19,1.357,3.622,7.28,2.339l1.206-0.262 l0.012,3.978c0.003,1.487,0.006,3.076,0.009,3.444L25.008,56.007z"></path><linearGradient id="KpzH_ttTMIjq8dhx1zD2pb_52539_gr2" x1="32" x2="32" y1="5" y2="59.167" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#1a6dff"></stop><stop offset="1" stopColor="#c822ff"></stop></linearGradient><path fill="url(#KpzH_ttTMIjq8dhx1zD2pb_52539_gr2)" d="M32,58C17.663,58,6,46.337,6,32S17.663,6,32,6s26,11.663,26,26S46.337,58,32,58z M32,8 C18.767,8,8,18.767,8,32s10.767,24,24,24s24-10.767,24-24S45.233,8,32,8z"></path></svg><p className='group-hover:flex lg:hidden'>/debiabril</p></a> 
            <a className='flex flex-col items-center group' href='https://wa.link/tupwyv' target='_blank'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='w-10' viewBox="0 0 64 64"><linearGradient id="fzF5K76u~QPjMIgETt7bMa_43677_gr1" x1="32" x2="32" y1="5.25" y2="58.834" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#1a6dff"></stop><stop offset="1" stopColor="#c822ff"></stop></linearGradient><path fill="url(#fzF5K76u~QPjMIgETt7bMa_43677_gr1)" d="M6.399,57.699l3.792-13.847c-2.076-3.74-3.17-7.975-3.168-12.272 C7.028,17.641,18.373,6.301,32.312,6.301c6.762,0.003,13.115,2.636,17.889,7.414c4.774,4.778,7.402,11.151,7.4,17.944 C57.595,45.633,46.25,57,32.312,57c-4.024,0-8.073-1.019-11.744-2.95L6.399,57.699z M20.828,51.918l0.346,0.188 C24.645,53.999,28.492,55,32.302,55c12.846,0,23.293-10.471,23.299-23.341c0.002-6.26-2.418-12.13-6.814-16.53 S38.538,8.304,32.312,8.301c-12.836,0-23.283,10.443-23.288,23.279c-0.002,4.089,1.072,8.113,3.107,11.639l0.209,0.361L9.239,54.902 L20.828,51.918z M32.312,53c-3.686,0-7.415-1.06-10.793-3.063l-0.437-0.318l-8.854,2.323l2.382-8.691l-0.244-0.387 c-2.123-3.376-3.243-7.271-3.241-11.269c0.004-11.67,9.513-21.165,21.195-21.165c5.642,0.002,10.961,2.218,14.979,6.239 c4,4.003,6.202,9.345,6.2,15.039C53.495,43.448,43.99,53,32.312,53z M22.583,48.242C25.641,50.047,29.001,51,32.304,51 c10.584,0,19.191-8.654,19.195-19.292c0.002-5.161-1.992-10-5.614-13.625c-3.642-3.644-8.459-5.651-13.565-5.653 c-10.581,0-19.191,8.598-19.195,19.166c-0.002,3.619,1.012,7.146,2.933,10.201l0.715,1.131l-1.698,6.199l6.429-1.687L22.583,48.242z"></path><linearGradient id="fzF5K76u~QPjMIgETt7bMb_43677_gr2" x1="32.305" x2="32.305" y1="17.5" y2="46.527" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#6dc7ff"></stop><stop offset="1" stopColor="#e6abff"></stop></linearGradient><path fill="url(#fzF5K76u~QPjMIgETt7bMb_43677_gr2)" fillRule="evenodd" d="M26.12,21.219c-0.464-1.031-0.952-1.052-1.394-1.07 c-0.361-0.015-0.774-0.015-1.187-0.015c-0.413,0-1.084,0.155-1.651,0.775c-0.568,0.62-2.168,2.118-2.168,5.164 c0,3.047,2.219,5.991,2.529,6.405c0.31,0.413,4.284,6.865,10.579,9.347c5.231,2.063,6.296,1.653,7.431,1.549 c1.135-0.103,3.664-1.498,4.18-2.944c0.516-1.446,0.516-2.685,0.361-2.944c-0.155-0.258-0.568-0.413-1.187-0.723 c-0.619-0.31-3.664-1.808-4.232-2.014c-0.568-0.206-0.981-0.31-1.394,0.31c-0.413,0.619-1.599,2.014-1.96,2.427 c-0.361,0.414-0.723,0.465-1.342,0.156c-0.619-0.311-2.614-0.964-4.98-3.074c-1.841-1.641-3.084-3.668-3.445-4.288 c-0.361-0.619-0.039-0.955,0.272-1.264c0.278-0.277,0.619-0.723,0.929-1.085c0.309-0.362,0.412-0.62,0.619-1.033 c0.206-0.414,0.103-0.775-0.052-1.085S26.67,22.443,26.12,21.219z" clipRule="evenodd"></path></svg><p className='group-hover:flex lg:hidden'>+54 341 2785360</p></a>
            <a className='flex flex-col items-center group' href="mailto:debora.badosa@gmail.com" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='w-10' viewBox="0 0 64 64"><linearGradient id="X8PQgv_hN2z14HAU6EeM8a_48165_gr1" x1="32" x2="32" y1="12" y2="52" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#1a6dff"></stop><stop offset="1" stopColor="#c822ff"></stop></linearGradient><path fill="url(#X8PQgv_hN2z14HAU6EeM8a_48165_gr1)" d="M58,16.82h-0.01C57.94,14.15,55.81,12,53.2,12H10.8c-2.61,0-4.74,2.15-4.79,4.82H6 c0,0.01,0.01,0.02,0.01,0.04S6,16.89,6,16.91v30.18C6,49.8,8.16,52,10.8,52h42.4c2.64,0,4.8-2.2,4.8-4.91V16.91 c0-0.02-0.01-0.03-0.01-0.05S58,16.83,58,16.82z M50.67,14L32,27.11L13.33,14H50.67z M10.03,14.13L32,29.56l21.97-15.43 c1.15,0.34,2,1.42,2.02,2.72c-0.03,0.64-0.87,1.44-1.3,1.74L32,34.77L9.3,18.58c-0.42-0.29-1.26-1.09-1.29-1.73 C8.03,15.55,8.88,14.47,10.03,14.13z M12,23v27h-1.2C9.26,50,8,48.69,8,47.09V20.11c0.07,0.05,0.12,0.09,0.14,0.11L12.05,23H12z M50,50H14V24.39l18,12.84l18-12.84V50z M56,47.09c0,1.6-1.26,2.91-2.8,2.91H52V23h-0.05l3.9-2.78c0.02-0.02,0.08-0.06,0.15-0.11 V47.09z"></path><linearGradient id="X8PQgv_hN2z14HAU6EeM8b_48165_gr2" x1="53.975" x2="53.975" y1="20.11" y2="50" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#6dc7ff"></stop><stop offset="1" stopColor="#e6abff"></stop></linearGradient><path fill="url(#X8PQgv_hN2z14HAU6EeM8b_48165_gr2)" d="M56,20.11v26.98c0,1.6-1.26,2.91-2.8,2.91H52V23h-0.05l3.9-2.78 C55.87,20.2,55.93,20.16,56,20.11z"></path><linearGradient id="X8PQgv_hN2z14HAU6EeM8c_48165_gr3" x1="10.025" x2="10.025" y1="20.11" y2="50" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#6dc7ff"></stop><stop offset="1" stopColor="#e6abff"></stop></linearGradient><path fill="url(#X8PQgv_hN2z14HAU6EeM8c_48165_gr3)" d="M12.05,23H12v27h-1.2C9.26,50,8,48.69,8,47.09V20.11c0.07,0.05,0.12,0.09,0.14,0.11L12.05,23z"></path><linearGradient id="X8PQgv_hN2z14HAU6EeM8d_48165_gr4" x1="32" x2="32" y1="14.13" y2="34.77" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#6dc7ff"></stop><stop offset="1" stopColor="#e6abff"></stop></linearGradient><path fill="url(#X8PQgv_hN2z14HAU6EeM8d_48165_gr4)" d="M55.99,16.85c-0.03,0.64-0.87,1.44-1.3,1.74L32,34.77L9.3,18.58 c-0.42-0.29-1.26-1.09-1.29-1.73c0.02-1.3,0.87-2.38,2.02-2.72L32,29.56l21.97-15.43C55.12,14.47,55.97,15.55,55.99,16.85z"></path></svg><p className='group-hover:flex lg:hidden'>debora.badosa@gmail.com</p></a>
            </div>
        </nav>
    </footer>
  )
}
