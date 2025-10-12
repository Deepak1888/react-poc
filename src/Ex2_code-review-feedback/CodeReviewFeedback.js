import React from "react";
import { useState } from "react";

const FeedbackSystem = () => {

    const categories = ['Readability','Performance', 'Security', 'Documentation', 'Testing'];

    const [feedback, setFeedback] = useState(
        categories.map(()=>({upvotes: 0, downvotes: 0}))
    );

    const handleUpvote = (index) =>{
        const updated = [...feedback];
        updated[index].upvotes += 1;
        setFeedback(updated); 
    }

    const handleDownvote = (index) =>{
        const updated = [...feedback];
        updated[index].downvotes += 1; 
        setFeedback(updated);
    }
  
  return (
    <div className="my-0 mx-auto text-center w-mx-1200">
      <div className="flex wrap justify-content-center mt-30 gap-30">
        {categories.map((category, index)=>(
        <div className="pa-10 w-300 card" key = {index} > 
          <h2>{category}</h2>

          <div className="flex my-30 mx-0 justify-content-around">
            <button className="py-10 px-15" onClick={()=>handleUpvote(index)} 
            data-testid={`upvote-btn-${index}`}>
              👍 Upvote
            </button>
            <button className="py-10 px-15 danger" onClick={()=>handleDownvote(index)}
            data-testid={`downvote-btn-${index}`}
            >
              👎 Downvote
            </button>
          </div>
          <p className="my-10 mx-0" data-testid={`upvote-count-${index}`}>
            Upvotes: <strong>{feedback[index].upvotes}</strong>
          </p>
          <p className="my-10 mx-0" data-testid={`downvote-count-${index}`}>
            Downvotes: <strong>{feedback[index].downvotes}</strong>
          </p>
        </div>
        )
        )}
      </div>
    </div>
  );
};

export default FeedbackSystem;
