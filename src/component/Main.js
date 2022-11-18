import { Component } from "react";
import {Table} from 'reactstrap';
import Section0 from "./Section0";

class Main extends Component {
    render(){
        return(
        <div className='main'>
            <Table borderless size='sm'>
                <tbody>
                    <Section0/>
                </tbody>
            </Table>
            </div>
        )
    }
}
  
  export default Main;
  