import React from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import BlogPost from './BlogPost';

function App() {
  // Please fill this with your own blog posts. 🙂
  const blogPosts = [
    {
      id: '1',
      title: 'Trip to Beirut',
      text: 'Last summer I went to Beirut, a beautiful city in the middle of the Mediterranean Sea.',
      author: 'Lewaa Thebian',
      image: 'https://static.nationalgeographic.co.uk/files/styles/image_3200/public/Sleep_Beirut%20Watefront%20%26%20FSBEI%20Location_HR_WEB.webp?w=1450&h=816',
      readmoreUrl: 'https://example.com/post1',
    },
    {
      id: '2',
      title: 'Hiking Adventure',
      text: 'Exploring the breathtaking mountains and landscapes during my hiking adventure.',
      author: 'Lewaa Thebian',
      image: 'https://www.atadventuresintl.com/wp-content/uploads/2015/07/trekking-in-nepal-1140x530.jpg',
      readmoreUrl: 'https://example.com/post2',
    },
    {
      id: '3',
      title: 'The Beauty of Santorini',
      text: 'Discovering the beauty and serenity of Santorini, a Greek island paradise.',
      author: 'Lewaa Thebian',
      image: 'https://www.costacruises.com/content/dam/costa/inventory-assets/ports/JTR/jtr-santorini-port-1.jpg',
      readmoreUrl: 'https://example.com/post3',
    },
    {
      id: '4',
      title: 'Road Trip Across California',
      text: 'Embarking on an unforgettable road trip through the scenic landscapes of California.',
      author: 'Lewaa Thebian',
      image: 'https://media.cntraveler.com/photos/5c895fa2913b993bce04abe1/16:9/w_2560%2Cc_limit/GettyImages-1135452428.jpg',
      readmoreUrl: 'https://example.com/post4',
    },
    // Add more blog posts here
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Lewaa Thebian's Personal Blog</h1>
      </header>
      <Container className="App-body">
        <Row>
          {blogPosts.map((post) => (
            <Col key={post.id} xs={12} md={6} lg={4}>
              <BlogPost post={post} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
