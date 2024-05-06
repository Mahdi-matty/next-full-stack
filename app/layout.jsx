import '@styles/globals.css'
import Nav from '@components/nav'
import Provider from '@components/provider'
export const metadata = {
    title: "dokan",
    description: "online shop"
};


const RootLayout = ({ children })=> (
    
        <html lang='en'>
            <body>
                <Provider>
                    <main className='app'>
                        <Nav />
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    

);

export default RootLayout;