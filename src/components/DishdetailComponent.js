import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish != null)
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return (
                <div></div>
            );
    }

    renderComment(comment) {
        return(
        <div>
            <p>{comment.comment}</p>
            <p>--{comment.author}, {comment.date}</p>
        </div>
        );
    }

    render() {
        if(this.props.selectedDish==null)
            return(<div></div>)
        const comments=this.props.selectedDish.comments.map((comment)=>{
            return(
                <li key={comment.id}>
                    {this.renderComment(comment)}
                </li>
                )
        });
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.selectedDish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h4 class="mb-4 mt-2">Comments</h4>
                    <ul class="list-unstyled">
                        {comments}
                    </ul>
                </div>
            </div>
        )
    }
}
export default DishDetail;