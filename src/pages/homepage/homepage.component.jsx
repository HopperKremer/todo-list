//import './homepage.styles.scss'
import { connect } from "react-redux";
const HomePage = ({listItems}) => {
    console.log(listItems.length)

    return(
    <div className='homepage'>
        {
        listItems.length == 0 ?
        <div>Welcome, you have nothing to do yet, click TODO LIST above to add some things. </div>
        :
        listItems.length == 1 ?
        <div>Welcome, you have {listItems.length} thing to do</div>
        :
        <div>Welcome, you have {listItems.length} things to do</div>
        }
    </div>
    )
}

const mapStateToProps = ({ todoList:{listItems} }) => ({
    listItems
})

export default connect(mapStateToProps, null)(HomePage);