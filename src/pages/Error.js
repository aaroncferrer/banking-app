import { Link } from 'react-router-dom';
import './error.css'

function Error(){
    return(
        <>
            <div className="error-container">
                <h1>404.</h1>
                <h2>Oops! Could it be that you're in the wrong bank? Time to doublecheck that address!</h2>
                <p>
                    Ah, the irony! We created a software to find broken links and yet, here we are - facing one ourselves. But no worries, it's just a test run! Or maybe, just maybe, you took a wrong turn and ended up here. Don't fret, just head back to the <Link to='/'><span className='homepage-link'>homepage</span></Link> and give it another shot!
                </p>
                <img src='./error2.png' alt='Bank Logo' className='error-img' />
            </div>
            
            
        </>
    )
}

export default Error;