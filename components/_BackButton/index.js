import styles from './index.module.scss'
import classNames from 'classnames'
import { useRouter } from 'next/router'

function BackButton (props) {
    const router = useRouter()
    
    function back () {
        router.back()
    }

    const ButtonClasses = classNames({
        [styles["back-link"]]: true,
        [styles["text"]]: props.text == true
    })

    return <a className={ButtonClasses} onClick={back}>
        ← Back
    </a>
}

export default BackButton