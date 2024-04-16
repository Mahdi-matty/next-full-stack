import '@styles/global.css'
import { Children } from 'react'
import Nav from '../components/nav'
export const metadata = {
    title: "maktab",
    description: "online school"
}
export default function RootLayout({Children}){
    return (
        <html>
            <body>
                <div className='main'>
                    <div className='gradient'/>
                </div>
                <main className='app'>
                    <Nav />
                    {Children}
                </main>
            </body>
        </html>
    )

}