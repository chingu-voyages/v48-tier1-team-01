import React from 'react'

const Card = (props) => {
  return (
    <>
        <div className='card'>
            <main>
              <img src={props.sampleImage}></img>
            </main>
            <footer>
              <div className='details'>
                <h1 className='.title'><span className="black">Dinosaur</span></h1>
                <p><span className='bold'>Type:</span> Lorem</p>
                <p><span className='bold'>Length:</span> Lorem</p>
                <p><span className='bold'>Weight:</span> Lorem</p>
                <p><span className='bold'>Diet:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p><span className='bold'>When lived:</span> Lorem ipsum dolor sit amet, consectetur</p>
                <p><span className='bold'>Found in:</span> Lorem, ipsum</p>
                <p><span className='bold'>Taxonomy:</span> Lorem ipsum</p>
                <p><span className='bold'>Named By:</span> Lorem ipsum dolor</p>
                <p><span className='bold'>Type of Species:</span> Lorem ipsum dolor sit amet</p>
                <p><span className='bold'>Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum neque gravida nibh eleifend semper. Sed efficitur tempus imperdiet. Nam nec pharetra massa, id sagittis nisl. Aliquam enim massa, dapibus molestie eros ac, malesuada hendrerit elit. Nunc posuere orci quis lorem bibendum, in venenatis velit faucibus. Etiam congue, nunc sed convallis accumsan, quam sapien viverra velit, ut imperdiet tortor est quis ex. Suspendisse potenti. Suspendisse rhoncus iaculis tempus. Fusce rhoncus nec mauris sed aliquam.</p>
              </div>
              <div className='btn'>Back to Search</div>
            </footer>
        </div>
    </>
  )
}

export default Card
