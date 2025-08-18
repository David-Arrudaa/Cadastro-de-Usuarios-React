import { TopBackground } from './styles'
import UsersImage from '../../assets/users.png'

function DefaultTopBackground (){

    return (
        <TopBackground><img src={UsersImage} alt="imagem-usuarios" /></TopBackground>
    )
}

export default DefaultTopBackground