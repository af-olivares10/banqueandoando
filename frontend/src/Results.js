import React from 'react';
import { Icon, Card } from 'antd';
import ModalReferencias from './ModalReferencias';
const { Meta } = Card;

class Results extends React.Component {
  render(){
    return(
      <div>
        <Card
          style={{ width: "20vw" }}
          cover={<img alt="logo banco" src={this.props.imgUrl} style={{ height: "22vh", padding:"5px"}} />}
          actions={[<button type="button" className="btn btn-info " data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-user"></span></button>, <button type="button" className="btn btn-info " data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-pencil"></span></button>]}
          >

            <Meta
              title={this.props.bankName}
              description={this.props.interes}
            />
          </Card>
          <ModalReferencias banco ={this.props.bankName}/>
        </div>
      );
    }
  }

  export default Results;
