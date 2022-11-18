import { Component } from "react";
import { Table } from 'reactstrap';
import Section1 from "./Section1";
import Section0 from "./Section0";
import Section2 from "./Section2";


class Main extends Component {
    render() {
        return (
            <div className='main'>
                <Table borderless size='sm'>
                    <tbody>
                        <Section0 />
                        <Section1 />
                        <Section2 />

                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Main;
