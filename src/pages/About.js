import React from 'react'

const About = () => {
    return(
        <>
            <div className='bg-papayawhip text-center min-h-screen overflow-y-hidden items-center flex flex-row justify-center text-2xl'>
                <div className='about'>
                    <header><h1 className='header text-5xl p-20'>Quiz Central</h1></header>
                    <div>
                        <h2 className='contactUs'>Contact Us</h2>
                        <p style={{fontSize: '30px', lineHeight: '1.5'}}>
                        1313 Mockingbird Lane<br />
                        Hays, KS 67601<br />
                        785-628-FHSU<br />
                        QuizCentral@gmail.com
                        </p>
                    </div>
                </div>
                <footer className='fixed bottom-0 justify-center item-center bottom-0  my-auto text-center text-lg'><i>Quiz Central &copy; 2024 Quiz Central, Inc.</i></footer>
            </div>
        </>
    )
}

export default About
