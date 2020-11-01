

import Head from 'next/head'
import mypic from './../public/mypicture.jpg'


const Layout = ({children}) => {
    return ( 
        <>
            <Head>
                <link rel="icon" href={mypic} />
                <title>
                    Kayode
                </title>
            </Head>   
        
            {children}
        </>
     );
}
 
export default Layout;