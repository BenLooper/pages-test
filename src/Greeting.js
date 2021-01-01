import {useHistory} from 'react-router-dom'

const Greeting = () => {
    let history = useHistory();

    const goHome = () => {
        history.push('/')
    }

    return (
        <h1 onClick={() => goHome()}>你好 👽</h1>
    )
}

export default Greeting