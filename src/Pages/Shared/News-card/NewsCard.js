import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaEye, FaRegBookmark, FaShareAlt,FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
    
    const { image_url, total_view,rating,author, details,   title, _id } = news;
    const { img, name, published_date } = author
    return (
        <Card className="mb-5">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex'>
                    <Image
                        roundedCircle
                        className='me-2'
                        src={img}
                        style={{ height: '60px' }}
                    >
                    </Image>
                    <div>
                        <p className='mb-0'>{name}</p>
                        <p>{published_date}</p>
                    </div>
                </div>
                <div>
                    <FaRegBookmark className='me-2' />
                    <FaShareAlt />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img className='mb-2' variant="top" src={image_url} />
                <Card.Text>
                    {
                        details?.length > 250 ?
                            <span>{details.slice(0, 250)}<Link to={`/news/${_id}`} >ReadMore...</Link></span> : <span>{details}</span>
                    }
                </Card.Text>
                
            </Card.Body>
            <Card.Footer className="text-muted d-flex justify-content-between">
                <div className='d-flex align-items-center'>
                 <FaStar className='text-warning'/>
                  <span className='ms-2'>{rating?.number}</span>
                </div>
                <div className=''> 
                    <FaEye className='me-2'/>
                    <span>{total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;