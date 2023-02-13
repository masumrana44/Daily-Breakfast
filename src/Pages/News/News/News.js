import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Category from '../../Category/Category/Category';

const News = () => {
    const news=useLoaderData();
    const { image_url, total_view,rating,author, details,   title, _id ,category_id } = news;
    const { img, name, published_date } = author
 
    return (
        <Card style={{ width: '95%' }}>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         <p> {details}</p>
        </Card.Text>
        <Link to={`/category/${category_id}`}>
        <Button variant="primary">All news in this category</Button></Link>
      </Card.Body>
    </Card>
    );
};

export default News;