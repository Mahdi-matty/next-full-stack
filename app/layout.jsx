import '@styles/global.css'
import { Children } from 'react'
import Nav from '../components/nav'
import Provider from '../components/provider'
export const metadata = {
    title: "maktab",
    description: "online school"
}
export default function RootLayout({ Children }) {
    return (
        <html>
            <body>
                <Provider>
                    <div className='main'>
                        <div className='gradient' />
                    </div>
                    <main className='app'>
                        <Nav />
                        {Children}
                    </main>
                </Provider>
            </body>
        </html>
    )

}