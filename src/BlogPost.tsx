import React, { useState } from 'react';
import { Card, Modal, Button } from 'react-bootstrap';
import { PostDTO } from './api/models/PostDTO';

type Props = {
  post: PostDTO;
};

function BlogPost({ post }: Props) {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const generateCustomizedContent = (postId: string) => {
    switch (postId) {
      case '1':
        return (
          <>
            <p>
              During my trip to Beirut, I was amazed by the vibrant culture, delicious cuisine, and stunning coastal views.
              Exploring the bustling streets of the city and immersing myself in the rich history and architecture was a memorable experience.
              Whether it was visiting the historic landmarks or enjoying the vibrant nightlife, Beirut offered a perfect blend of tradition and modernity.
            </p>
          </>
        );
      case '2':
        return (
          <>
            <p>
              Embarking on a hiking adventure was an exhilarating experience. The breathtaking mountains and picturesque landscapes
              offered a sense of tranquility and serenity. Every step along the trails was filled with awe-inspiring views and a
              connection with nature. It was a journey of self-discovery and pushing the limits, creating unforgettable memories
              and a deeper appreciation for the beauty of the natural world.
            </p>
          </>
        );
      case '3':
        return (
          <>
            <p>
              Santorini, a Greek island paradise, captivated my heart with its white-washed buildings, blue-domed churches, and
              stunning sunsets. The beauty of the island extended beyond its iconic landscapes to its charming villages, rich
              history, and warm hospitality. Exploring the narrow streets, indulging in delicious local cuisine, and soaking up
              the sun on the pristine beaches made it a truly magical experience. Santorini is a destination that leaves an
              indelible mark on your soul.
            </p>
          </>
        );
      case '4':
        return (
          <>
            <p>
              Road tripping across California was a journey of endless discoveries. From the iconic landmarks of Los Angeles to
              the majestic beauty of Yosemite National Park, each stop along the way revealed a unique facet of this diverse
              state. Driving along the scenic Pacific Coast Highway, witnessing the grandeur of the Golden Gate Bridge, and
              exploring the vibrant cities left me in awe of California's charm. It was an adventure filled with unforgettable
              experiences, creating memories that will last a lifetime.
            </p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Card className="mb-4 blog-post-card" border="dark" bg="light">
        {post.image && <Card.Img variant="top" src={post.image} />}
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.text}</Card.Text>
          {post.readmoreUrl && (
            <Button variant="link" className="read-more-link" onClick={handleModalOpen}>
              Read More
            </Button>
          )}
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Author: {post.author}</small>
        </Card.Footer>
      </Card>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>{post.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <p>{post.text}</p>
            {generateCustomizedContent(post.id)}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BlogPost;
