import React from 'react';

const Details = () =>{
 return(<>
 <div className="admin" style={{marginTop:'50px'}}>
 <form action="/profile" method="post"  enctype="multipart/form-data">
 
 <input type="text" name="name" multiple/>
  <input type="file" name="avatar" multiple/>
    <input type="submit"/>
</form>
 
 </div>
 </>
 );
}

export default Details;



