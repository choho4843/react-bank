import { Component } from "react";
import {Button} from "reactstrap";

class Section6 extends Component{
    render(){
        return(
            <tr>
                <td className={"w-100"} colSpan='2'>
                    <div className="componentBox hover">
                        <span className="l-text">
                            복잡한 세류 제출을 간편하게, 내가 원하는 시간에
                        </span>
                        <span className="s-text">
                            이사 날짜가 주말이나 공휴일이어도 전월세보증금 대출을 신청할 수 있습니다.
                        </span><br/>
                        <Button color="light" size="sm">마이너스 통장대출&gt;</Button>&nbsp;
                        <Button color="light" size="sm">신용대출&gt;</Button>&nbsp;
                        <Button color="light" size="sm">개인사업자 대출&gt;</Button>&nbsp;
                        <Button color="light" size="sm">전월세 보증금 대출&gt;</Button>
                        <br/>
                        <img src={require('../img/main-loan.png')}
                        height='850px' width='550px' alt=''/>
                    </div>
                </td>
            </tr>
        )
    }
}

export default Section6;