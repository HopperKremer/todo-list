//import './homepage.styles.scss'
import { connect } from "react-redux";
const HomePage = ({listItems}) => {
    console.log(listItems.length)

    return(
    <div className='homepage'>
        Welcome, you have {listItems.length} things to do
    </div>
    )
}

const mapStateToProps = ({ todoList:{listItems} }) => ({
    listItems
})

export default connect(mapStateToProps, null)(HomePage);