import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class BlogContent extends Component{
  render() {
    return (
      <div className="blog-post-container">
        <div className="blog-title">
          <h1>Our Story</h1>
          <h6>Authored by: Jeff Horner & Terry Dinh</h6>
        </div>
        <div className="blog-story">
          <p>Bacon ipsum dolor amet corned beef pork belly chuck, prosciutto biltong pancetta beef venison tri-tip leberkas. Pork loin boudin pastrami corned beef venison kielbasa spare ribs rump pork belly pig t-bone. Buffalo cow pastrami tongue andouille. Drumstick beef ribs brisket beef. Pig tri-tip turducken alcatra tail pork loin shank spare ribs short ribs landjaeger salami leberkas hamburger flank. Tenderloin porchetta pork loin kevin, short loin strip steak bresaola turkey beef ribs boudin jerky tail pig.</p>
          <p>Jerky beef ribs turkey pork hamburger cupim. Pork chop chuck biltong venison jerky sirloin picanha shank alcatra pork loin. Short loin pork ribeye sirloin, tri-tip alcatra shank bacon biltong rump sausage spare ribs. Beef ribs meatball buffalo swine shankle brisket sausage rump chicken kevin.</p>
          <p>Picanha pig rump beef cow tenderloin pancetta spare ribs. Turkey beef ribs brisket prosciutto picanha. Pork chop ham hock pork pastrami chicken corned beef boudin, cow spare ribs hamburger chuck pig. Buffalo short loin fatback, filet mignon biltong sirloin porchetta short ribs. Tongue hamburger tail venison cupim pork beef ribs. Landjaeger tail capicola tenderloin filet mignon venison ground round andouille frankfurter swine tongue strip steak. Corned beef beef ribeye ham hock short loin.</p>
          <p>Burgdoggen alcatra brisket hamburger jerky, swine fatback shankle pork belly doner pork loin t-bone filet mignon buffalo meatloaf. Leberkas picanha meatball tenderloin salami corned beef. Porchetta corned beef ball tip cow beef doner prosciutto tenderloin jowl jerky. Biltong pork loin pork belly shoulder. Porchetta prosciutto tri-tip landjaeger biltong strip steak pastrami hamburger beef andouille capicola ham hock pig.</p>
          <p>Ham hock ball tip meatloaf beef ribs porchetta sausage cow tenderloin pork chop kevin pancetta sirloin pig. Pastrami landjaeger ball tip corned beef fatback. Shank t-bone jowl pork. Bresaola shank capicola corned beef, beef shankle leberkas strip steak prosciutto. Pig doner shoulder meatball jerky, t-bone pancetta swine frankfurter venison. Jowl meatball rump picanha boudin, turducken ham hock alcatra jerky cupim beef venison strip steak pastrami corned beef.</p>
          <p>Meatloaf filet mignon salami, spare ribs flank drumstick pig brisket prosciutto rump meatball. Jowl capicola pork loin, beef ribs kielbasa meatball sausage fatback prosciutto kevin ground round. Tenderloin salami pork chop, ground round beef pork loin leberkas hamburger jerky fatback prosciutto sirloin drumstick biltong sausage. Rump drumstick spare ribs, chuck pork chop short ribs pork belly. Corned beef tongue sausage kevin cow frankfurter short loin pork loin biltong picanha. Drumstick alcatra swine meatball. Shankle pork loin beef ribs beef strip steak chuck.</p>
          <p>Burgdoggen alcatra brisket hamburger jerky, swine fatback shankle pork belly doner pork loin t-bone filet mignon buffalo meatloaf. Leberkas picanha meatball tenderloin salami corned beef. Porchetta corned beef ball tip cow beef doner prosciutto tenderloin jowl jerky. Biltong pork loin pork belly shoulder. Porchetta prosciutto tri-tip landjaeger biltong strip steak pastrami hamburger beef andouille capicola ham hock pig.</p>
          <p>Ham hock ball tip meatloaf beef ribs porchetta sausage cow tenderloin pork chop kevin pancetta sirloin pig. Pastrami landjaeger ball tip corned beef fatback. Shank t-bone jowl pork. Bresaola shank capicola corned beef, beef shankle leberkas strip steak prosciutto. Pig doner shoulder meatball jerky, t-bone pancetta swine frankfurter venison. Jowl meatball rump picanha boudin, turducken ham hock alcatra jerky cupim beef venison strip steak pastrami corned beef.</p>
          <p>Meatloaf filet mignon salami, spare ribs flank drumstick pig brisket prosciutto rump meatball. Jowl capicola pork loin, beef ribs kielbasa meatball sausage fatback prosciutto kevin ground round. Tenderloin salami pork chop, ground round beef pork loin leberkas hamburger jerky fatback prosciutto sirloin drumstick biltong sausage. Rump drumstick spare ribs, chuck pork chop short ribs pork belly. Corned beef tongue sausage kevin cow frankfurter short loin pork loin biltong picanha. Drumstick alcatra swine meatball. Shankle pork loin beef ribs beef strip steak chuck.</p>
        </div>
        <div className="blog-buttons">
          <Link to="/blog" className="main-button">Read More Posts</Link>
          <Link to="/resources" className="button">Helpful Resources</Link>
        </div>
      </div>
    );
  }
}

export default BlogContent;